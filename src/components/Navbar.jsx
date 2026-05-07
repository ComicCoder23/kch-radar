import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const navLinkStyle = {
    textDecoration: 'none',
    color: '#64748b',
    fontWeight: 600,
    fontSize: '14px',
    transition: 'color 0.2s'
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            background: '#0f172a', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '18px'
          }}>K</div>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0f172a', letterSpacing: '-0.02em' }}>
            Kirky Hub <span style={{ color: '#2563eb', fontWeight: 500, fontSize: '0.9rem', marginLeft: '4px' }}>// G66 Area</span>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '24px', marginLeft: '12px' }}>
          <Link to="/" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = '#0f172a'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Dashboard</Link>
          <Link to="/signals" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = '#0f172a'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Signals</Link>
          <Link to="/submit" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = '#0f172a'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Submit</Link>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <SignedOut>
          <SignInButton mode="modal">
            <button style={{
              padding: '0.625rem 1.25rem',
              background: '#0f172a',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.1)'
            }}>
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/profile" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = '#0f172a'} onMouseOut={(e) => e.target.style.color = '#64748b'}>My Profile</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
