import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function BookingButton() {
  const { user } = useUser();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios.post('http://localhost:5000/api/create-checkout-session', {
        userId: user?.id,
        priceId: 'price_placeholder', // User will need to replace this with a real Price ID from Stripe
      });

      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
      alert('Failed to initiate checkout. Is the backend running?');
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: '12px 24px',
        background: '#059669',
        color: '#fff',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '16px',
        display: 'block',
        width: 'fit-content'
      }}
    >
      Book a Studio Session
    </button>
  );
}
