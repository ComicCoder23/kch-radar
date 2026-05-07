export default function FeaturedNow({ items = [], sourceLabel = '', onItemClick }) {
  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--secondary)', fontWeight: 700 }}>
            <span className="status-indicator"></span> Active Scan
          </div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px', fontWeight: 800 }}>Featured Now</h2>
        </div>
        <div className="mono" style={{ color: 'var(--muted)', fontSize: '13px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {items.map((item) => (
          <article 
            key={item.id} 
            className="radar-card" 
            onClick={() => onItemClick && onItemClick(item)}
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <div className="badge-radar">{item.category}</div>
              {item.badge ? <div className="badge-radar" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>{item.badge}</div> : null}
            </div>
            <h3 style={{ margin: '0 0 12px', fontSize: '24px', fontWeight: 800, lineHeight: 1.2, color: '#fff' }}>{item.title}</h3>
            <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontSize: '13px', marginBottom: '16px' }}>
               <span style={{ fontWeight: 600 }}>{item.town}</span>
               <span style={{ opacity: 0.5 }}>//</span>
               <span>{item.date}</span>
            </div>
            <p style={{ margin: '0 0 24px', color: '#94a3b8', fontSize: '15px', lineHeight: 1.6, flex: 1 }}>{item.note}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                display: 'inline-block',
                padding: '12px 20px',
                background: 'var(--primary)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >{item.ctaText || 'INTERCEPT'}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
