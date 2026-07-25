import { Link } from 'react-router-dom';

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
        KCH Radar
      </h3>
      <p style={{ color: 'var(--kch-text-sub)', marginBottom: '24px', fontSize: '14px' }}>
        Kirkintilloch & Surrounding Area • local discovery and community visibility
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
        <Link to="/" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
        <Link to="/report" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>What this is</Link>
        <Link to="/submit" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Submit Signal</Link>
        <Link to="/profile" style={{ color: 'var(--kch-canal-blue)', textDecoration: 'none', fontWeight: 600 }}>Profile</Link>
      </nav>
      <div style={{ color: 'var(--kch-text-sub)', fontSize: '12px', borderTop: '1px solid var(--kch-border-color, #e2e8f0)', paddingTop: '16px' }}>
        &copy; {new Date().getFullYear()} KCH Collective. All updates local.
      </div>
    </footer>
  );
}
