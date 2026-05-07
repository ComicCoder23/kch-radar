function normalizeSignal(item, index) {
  return {
    ...item,
    id: item.id || `signal-${index}`,
    title: item.title || 'Untitled Signal',
    note: item.note || '',
    badge: item.badge || 'Signal',
    date: item.date || 'Just now',
    ctaText: item.ctaText || 'INTERCEPT',
    link: item.link || '',
  };
}

export default function LocalSignalsFeed({ items = [], sourceLabel = '', onItemClick, loading = false }) {
  const cards = items.map(normalizeSignal);

  return (
    <section style={{ padding: '24px 16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-text-sub)', fontWeight: 600 }}>
             Local Discovery
        </div>
        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>Signals Feed</h2>
        <div style={{ color: 'var(--kch-text-sub)', fontSize: '13px' }}>{sourceLabel}</div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {loading ? (
          <div className="radar-card" style={{ padding: '40px', textAlign: 'center' }}>
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '140px', opacity: 0.3 }}>Loading...</div>
          </div>
        ) : cards.length > 0 ? (
          cards.map((item) => (
            <article 
              key={item.id} 
              className="radar-card" 
              onClick={() => onItemClick && onItemClick(item)}
              style={{ 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="image-placeholder" style={{ marginBottom: '16px', height: '140px' }}>{item.title.substring(0, 4)}</div>

              <div style={{ marginBottom: '8px' }}>
                <span className={`badge ${item.badge.toLowerCase().includes('canal') ? 'badge-canal' : item.badge.toLowerCase().includes('campsie') ? 'badge-campsie' : item.badge.toLowerCase().includes('sandstone') ? 'badge-sandstone' : ''}`}>{item.badge}</span>
              </div>

              <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 700, color: 'var(--kch-primary-text)' }}>{item.title}</h3>

              <div style={{ color: 'var(--kch-text-sub)', fontSize: '12px', marginBottom: '16px', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.date}
              </div>

              <p style={{ margin: '0 0 20px', color: 'var(--kch-text-sub)', fontSize: '14px', lineHeight: 1.6, flexGrow: 1 }}>{item.note}</p>

              <button 
                className="btn-primary"
                style={{ 
                  alignSelf: 'start', 
                  fontSize: '12px',
                  padding: '8px 16px'
                }}
                onClick={(e) => { e.stopPropagation(); item.link && window.open(item.link, '_blank'); }}
              >
                {item.ctaText}
              </button>
            </article>
          ))
        ) : (
          <div className="radar-card" style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1' }}>
            <p style={{ color: 'var(--kch-text-sub)' }}>No signals available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
}
