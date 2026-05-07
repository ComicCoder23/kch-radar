export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '64px', 
      padding: '48px 24px', 
      borderTop: '4px solid #2563eb', 
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.5)'
    }}>
      <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>Kirky Creative Hub</h3>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
        Rooted in Kirkintilloch & Surrounding Area • G66 Signal Network
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Contact</a>
      </div>
    </footer>
  );
}
