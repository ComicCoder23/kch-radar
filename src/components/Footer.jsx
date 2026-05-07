export default function Footer() {
  return (
    <footer style={{ 
      marginTop: 'auto', 
      padding: '48px 24px', 
      borderTop: '2px solid var(--kch-canal-blue)', 
      textAlign: 'center',
      background: 'var(--kch-page-bg)',
      fontSize: '14px',
      width: '100%'
    }}>
      <h3 style={{ fontSize: '18px', margin: '0 0 8px', color: 'var(--kch-primary-text)' }}>
        Kirky Creative Hub
      </h3>
      <p style={{ color: 'var(--kch-text-sub)', marginBottom: '24px', fontSize: '14px' }}>
        Kirkintilloch & Surrounding Area • G66 Signal Network
      </p>
      <nav 
        aria-label="Footer Navigation"
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '32px', 
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}
      >
        <a href="/" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Home</a>
        <a href="/submit" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Submit Signal</a>
        <a href="/profile" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Profile</a>
      </nav>
      <div style={{ color: 'var(--kch-text-sub)', fontSize: '12px', borderTop: '1px solid var(--kch-border-color, #e2e8f0)', paddingTop: '16px' }}>
        &copy; {new Date().getFullYear()} KCH Collective. All signals local.
      </div>
    </footer>
  );
}
