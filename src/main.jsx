import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function DemoAuthFallback() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          KCH Radar demo mode
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Clerk is not configured on this machine yet.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          The app is installed, but live authentication needs VITE_CLERK_PUBLISHABLE_KEY.
          Add the key to the frontend environment to unlock the full Radar experience.
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          Safe demo boundary: no credentials, payments, private submissions, or live sends are touched here.
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <DemoAuthFallback />
    )}
  </React.StrictMode>
);
