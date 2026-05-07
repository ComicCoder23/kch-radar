function normalizeSignal(item, index) {
  return {
    ...item,
    id: item.id || `signal-${index}`,
    title: item.title || '',
    note: item.note || '',
    badge: item.badge || '',
    ctaText: item.ctaText || 'INTERCEPT',
    link: item.link || '',
  };
}

export default function LocalSignalsFeed({ items = [], sourceLabel = '', onItemClick }) {
  const cards = items.map(normalizeSignal);

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-text-sub)', fontWeight: 600 }}>
             Local Discovery
          </div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px', fontWeight: 800 }}>Signals Feed</h2>
        </div>
        <div style={{ color: 'var(--kch-text-sub)', fontSize: '13px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {cards.map((item) => (
          <article 
            key={item.id} 
            onClick={() => onItemClick && onItemClick(item)}
            style={{ 
              cursor: 'pointer',
              backgroundColor: 'var(--kch-card-bg)',
              border: '1px solid var(--kch-border)',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'var(--kch-sandstone)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'var(--kch-border)';
            }}
          >
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '120px' }}>KCH</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--kch-primary-text)' }}>{item.title}</h3>
              {item.badge ? (
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  backgroundColor: 'rgba(212, 163, 115, 0.1)',
                  color: 'var(--kch-sandstone)',
                  textTransform: 'uppercase'
                }}>
                  {item.badge}
                </span>
              ) : null}
            </div>
            <p style={{ margin: '0 0 20px', color: 'var(--kch-text-sub)', fontSize: '14px', lineHeight: 1.6 }}>{item.note}</p>
            {item.link ? (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: 'var(--kch-canal-blue)', fontWeight: 600, textDecoration: 'none', fontSize: '13px' }}
                onClick={(e) => e.stopPropagation()}
              >
                {item.ctaText} →
              </a>
            ) : (
              <span style={{ color: 'var(--kch-text-sub)', fontWeight: 600, fontSize: '13px' }}>{item.ctaText}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
