import React from 'react';

const pageStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '40px 24px 80px',
  color: '#fff',
};

export default function ProfilePage() {
  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>Member Profile</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.25rem' }}>Manage your account and submissions.</p>
    </div>
  );
}
