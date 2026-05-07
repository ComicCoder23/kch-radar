import React from 'react';

const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 24px 80px',
  color: '#fff',
};

const cardStyle = {
  background: 'rgba(30, 41, 59, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '24px',
  borderRadius: '16px',
  transition: 'transform 0.2s ease, border-color 0.2s ease',
  cursor: 'pointer',
};

const categories = [
  { name: 'Church Halls', desc: 'Versatile community spaces with history.' },
  { name: 'Sports Centres', desc: 'Active facilities for local leagues.' },
  { name: 'Community Hubs', desc: 'Meeting places for local groups.' },
  { name: 'Library Spaces', desc: 'Quiet zones for study and work.' },
];

export default function VenuesPage() {
  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Venue Discovery</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '40px' }}>
        Find the perfect space for your community activity.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {categories.map((cat) => (
          <div key={cat.name} style={cardStyle} onMouseOver={(e) => e.currentTarget.style.borderColor = '#38bdf8' } onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{cat.name}</h2>
            <p style={{ color: '#cbd5e1' }}>{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
