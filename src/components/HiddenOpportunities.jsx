function normalizeOpportunity(item, index) {
  return {
    ...item,
    id: item.id || `opportunity-${index}`,
    title: item.title || '',
    note: item.note || '',
    badge: item.badge || '',
    ctaText: item.ctaText || 'INTERCEPT',
    link: item.link || '',
  };
}

export default function HiddenOpportunities({ items = [], sourceLabel = '', onItemClick, loading = false }) {
  const cards = items.map(normalizeOpportunity);

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 700 }}>
             Priority Layer
          </div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px', fontWeight: 800 }}>Hidden Opportunities</h2>
        </div>
        <div className="mono" style={{ color: 'var(--muted)', fontSize: '13px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {loading ? (
          <article className="radar-card" style={{ padding: '30px', textAlign: 'center' }}>
            <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>Scanning for opportunities...</p>
          </article>
        ) : cards.length > 0 ? (
          cards.map((item) => (
            <article 
              key={item.id} 
              className="radar-card" 
              onClick={() => onItemClick && onItemClick(item)}
              style={{ 
                borderColor: 'rgba(245, 158, 11, 0.2)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#fff' }}>{item.title}</h3>
                {item.badge ? <div className="badge-radar" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>{item.badge}</div> : null}
              </div>
              <p style={{ margin: '0 0 20px', color: '#94a3b8', fontSize: '14px', lineHeight: 1.5 }}>{item.note}</p>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mono" 
                  style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '12px' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.ctaText} // ACTIVATE
                </a>
              ) : (
                <span className="mono" style={{ color: 'var(--muted)', fontWeight: 700, fontSize: '12px' }}>{item.ctaText}</span>
              )}
            </article>
          ))
        ) : (
          <article className="radar-card" style={{ padding: '30px', textAlign: 'center', gridColumn: '1 / -1' }}>
            <p style={{ color: 'var(--muted)' }}>No hidden opportunities currently detected.</p>
          </article>
        )}
      </div>
    </section>
  );
}
