export default function FeaturedNow({ items = [], sourceLabel = '' }) {
  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b7280' }}>Featured</div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px' }}>Featured Now</h2>
        </div>
        <div style={{ color: '#6b7280', fontSize: '14px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        {items.map((item) => (
          <article key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '20px', padding: '18px', background: '#fff', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280' }}>{item.category}</div>
              {item.badge ? <div style={{ fontSize: '12px', fontWeight: 600, color: '#111827', background: '#e5e7eb', padding: '4px 8px', borderRadius: '999px' }}>{item.badge}</div> : null}
            </div>
            <h3 style={{ margin: '10px 0 8px', fontSize: '22px' }}>{item.title}</h3>
            <p style={{ margin: '4px 0', fontWeight: 600 }}>{item.town}</p>
            <p style={{ margin: '4px 0', color: '#374151' }}>{item.date}</p>
            <p style={{ margin: '10px 0 14px', color: '#4b5563' }}>{item.note}</p>
            <a href={item.link} target="_blank" rel="noreferrer" style={{ color: '#111827', fontWeight: 600 }}>{item.ctaText || 'View details'}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
