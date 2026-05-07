
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const { Webhook } = require('svix');
const { Pool } = require('pg');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const app = express();
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 5000;

app.use(cors());

// Webhook endpoint needs raw body for verification
app.post('/api/webhooks/clerk', express.raw({ type: 'application/json' }), async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return res.status(400).json({ error: 'Missing webhook secret' });
  }

  const headers = req.headers;
  const payload = req.body;

  const svix_id = headers["svix-id"];
  const svix_timestamp = headers["svix-timestamp"];
  const svix_signature = headers["svix-signature"];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: 'Missing svix headers' });
  }

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { email_addresses, first_name, last_name } = evt.data;
    const email = email_addresses[0].email_address;
    const name = `${first_name} ${last_name}`.trim();

    await prisma.user.upsert({
      where: { id: id },
      update: { email, name },
      create: { id, email, name },
    });
  }

  return res.status(200).json({ success: true });
});

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'KCH Backend is running' });
});

app.post('/api/create-checkout-session', async (req, res) => {
  const { priceId, userId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId || 'price_placeholder', // You will replace this with a real Stripe Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/cancel`,
      metadata: {
        userId: userId,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/signals', async (req, res) => {
  try {
    const signals = await prisma.signal.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    res.json(signals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/signals', async (req, res) => {
  try {
    const signal = await prisma.signal.create({
      data: req.body,
    });
    res.json(signal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
