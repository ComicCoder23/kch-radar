import React, { useEffect } from 'react';

export default function SignalDetailModal({ signal, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!signal) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '40px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            transition: 'all 0.2s',
          }}
          className="hover-bright"
        >
          &times;
        </button>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {signal.category && <div className="badge-radar">{signal.category}</div>}
            {signal.badge && (
              <div className="badge-radar" style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                color: 'var(--primary)', 
                borderColor: 'rgba(59, 130, 246, 0.2)' 
              }}>
                {signal.badge}
              </div>
            )}
            {signal.priority && (
              <div className="badge-radar" style={{ 
                background: 'rgba(245, 158, 11, 0.1)', 
                color: 'var(--accent)', 
                borderColor: 'rgba(245, 158, 11, 0.2)' 
              }}>
                {signal.priority} Priority
              </div>
            )}
          </div>
          
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 800, 
            color: '#fff', 
            margin: '0 0 16px',
            lineHeight: 1.2
          }}>
            {signal.title}
          </h2>

          {(signal.town || signal.date) && (
            <div className="mono" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--secondary)', 
              fontSize: '14px',
              marginBottom: '24px',
              padding: '12px 16px',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.1)'
            }}>
               {signal.town && <span style={{ fontWeight: 600 }}>{signal.town}</span>}
               {signal.town && signal.date && <span style={{ opacity: 0.5 }}>//</span>}
               {signal.date && <span>{signal.date}</span>}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 className="mono" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px', letterSpacing: '0.1em' }}>Intel / Description</h4>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '16px', 
            lineHeight: 1.7, 
            margin: 0,
            whiteSpace: 'pre-wrap'
          }}>
            {signal.note || signal.shortCopy || 'No further details available.'}
          </p>
        </div>

        {signal.tags && signal.tags.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <h4 className="mono" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px', letterSpacing: '0.1em' }}>Tags</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {signal.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '12px', 
                  padding: '4px 10px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '4px', 
                  color: '#cbd5e1',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
          {signal.link && (
            <a 
              href={signal.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                flex: 1,
                display: 'inline-block',
                padding: '16px 24px',
                background: 'var(--primary)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              {signal.ctaText?.toUpperCase() || 'VIEW SOURCE'}
            </a>
          )}
          <button 
            onClick={onClose}
            style={{ 
              flex: signal.link ? 0.5 : 1,
              padding: '16px 24px',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
