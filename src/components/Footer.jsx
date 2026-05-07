export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '64px', 
      padding: '48px 24px', 
      borderTop: '4px solid var(--kch-canal-blue)', 
      textAlign: 'center',
      background: 'var(--kch-page-bg)',
      fontSize: '14px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '-1px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        background: '#0f172a'
      }} />
      <h3 style={{ fontSize: '18px', margin: '16px 0 8px', color: 'var(--kch-primary-text)' }}>Kirky Creative Hub</h3>
      <p style={{ color: 'var(--kch-text-sub)', marginBottom: '24px' }}>
        Rooted in Kirkintilloch & Surrounding Area • G66 Signal Network
      </p>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <a href="/" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
        <a href="/submit" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 500 }}>Submit Signal</a>
        <a href="/profile" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 500 }}>Profile</a>
      </nav>
      <p style={{ marginTop: '24px', color: 'var(--kch-text-sub)', fontSize: '12px' }}>
        &copy; {new Date().getFullYear()} KCH Collective
      </p>
    </footer>
  );
}
