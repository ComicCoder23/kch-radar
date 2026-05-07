import React from 'react';

const pageStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '80px 24px',
  textAlign: 'center',
  color: '#fff',
};

export default function SuccessPage() {
  return (
    <div style={pageStyle}>
      <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✅</div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Payment Successful</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '40px' }}>Your signal has been boosted to the network.</p>
      <a href="/" style={{ 
        display: 'inline-block',
        padding: '12px 24px',
        background: 'var(--primary)',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 600
      }}>Return Home</a>
    </div>
  );
}
