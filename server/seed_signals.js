const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function seed() {
  console.log('Seeding database with hyper-local Kirkintilloch events...');
  
  await prisma.signal.deleteMany();

  await prisma.signal.createMany({
    data: [
      {
        title: 'Monkland & Kirkintilloch Railway Exhibition',
        category: 'Heritage',
        town: 'Kirkintilloch',
        address: 'Auld Kirk Museum, Cowgate, Kirkintilloch',
        date: 'Runs until May 20, 2026',
        note: 'Celebrating 200 years of Scotland\'s first modern railway with a unique local exhibition.',
        link: 'https://www.edlc.co.uk',
        section: 'Featured Now',
        badge: 'HERITAGE',
        cardType: 'Signal',
        sortOrder: 1
      },
      {
        title: 'Sound Affex (The Jam Tribute)',
        category: 'Live Music',
        town: 'Kirkintilloch',
        address: 'McGinley\'s Bar, Kirkintilloch',
        date: 'Friday, May 8, 2026',
        note: 'High-energy tribute to The Jam. Doors open at 7:00 PM.',
        link: 'https://www.facebook.com/mcginleysbar',
        section: 'Featured Now',
        badge: 'LIVE MUSIC',
        cardType: 'Signal',
        sortOrder: 2
      },
      {
        title: 'Stitch the Gap: Deep Pockets Workshop',
        category: 'Creative',
        town: 'Kirkintilloch',
        address: 'Stitch the Gap Studio, Kirkintilloch',
        date: 'Saturday, May 9, 2026',
        note: 'Learn to upcycle and sew deep pockets in this relaxed creative community session.',
        link: 'https://www.stitchthegap.co.uk',
        section: 'Hidden Opportunities',
        badge: 'WORKSHOP',
        cardType: 'Opportunity',
        sortOrder: 3
      },
      {
        title: 'Guided Heritage Walk',
        category: 'Outdoors',
        town: 'Kirkintilloch',
        address: 'Starts at Southbank Marina, Kirkintilloch',
        date: 'Thursday, May 7, 2026',
        note: 'Walking the historic Monkland & Kirkintilloch Railway path with local experts.',
        link: 'https://www.edlc.co.uk',
        section: 'Local Signals Feed',
        cardType: 'Signal',
        sortOrder: 4
      },
      {
        title: 'Gary Meikle (Comedy Live)',
        category: 'Comedy',
        town: 'Kirkintilloch',
        address: 'Broadcroft Hotel, Kirkintilloch',
        date: 'Friday, May 29, 2026',
        note: 'Scottish comedy heavyweight Gary Meikle brings his new tour to the Broadcroft.',
        link: 'https://www.broadcrofthotel.co.uk',
        section: 'Hidden Opportunities',
        badge: 'COMEDY',
        cardType: 'Signal',
        sortOrder: 5
      }
    ]
  });

  console.log('✅ Hyper-local seed complete.');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
