# KCH Radar - Developer Documentation

## API Key Setup

To move beyond placeholders, you will need to obtain API keys for Clerk and Stripe.

### 1. Clerk (Authentication)
- **Dashboard**: [dashboard.clerk.com](https://dashboard.clerk.com)
- **Steps**:
  1. Create a new application.
  2. Copy the `Publishable Key` to your root `.env` as `VITE_CLERK_PUBLISHABLE_KEY`.
  3. Copy the `Secret Key` to `server/.env` as `CLERK_SECRET_KEY`.

### 2. Stripe (Payments)
- **Dashboard**: [dashboard.stripe.com](https://dashboard.stripe.com)
- **Steps**:
  1. Toggle **Test Mode** ON.
  2. Go to **Developers > API keys**.
  3. Copy the `Publishable key` to your root `.env` as `VITE_STRIPE_PUBLISHABLE_KEY`.
  4. Copy the `Secret key` to `server/.env` as `STRIPE_SECRET_KEY`.

## Running the Project
- **Frontend**: `npm run dev` in the root directory.
- **Backend**: `node server/index.js` in the root directory.
