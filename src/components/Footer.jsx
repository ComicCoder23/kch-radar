export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '64px', 
      padding: '48px 24px', 
      borderTop: '1px solid var(--kch-border)', 
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.5)'
    }}>
      <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>Kirky Creative Hub</h3>
      <p style={{ color: 'var(--kch-text-sub)', fontSize: '14px', marginBottom: '24px' }}>
        Broadcasting local signals across G66.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <a href="#" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none' }}>Contact</a>
      </div>
    </footer>
  );
}
