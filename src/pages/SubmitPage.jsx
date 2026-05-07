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
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Submit a Signal</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '40px' }}>Share something with the G66 community.</p>
      <SubmitSignalForm />
    </div>
  );
}
