import React from 'react';
import SubmitSignalForm from '../components/SubmitSignalForm';

const pageStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '40px 24px 80px',
};

export default function SubmitPage() {
  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Share something local with Kirky Creative Hub</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '40px' }}>
        Help us keep the radar alive. Submit your events, workshops, or community gatherings to be featured on the KCH platform.
      </p>
      <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', fontStyle: 'italic' }}>
        Trust is everything. All submitted signals are reviewed by our community team to ensure they meet our local standards.
      </div>
      <SubmitSignalForm />
    </div>
  );
}
