function normalizeOpportunity(item, index) {
  return {
    id: item.id || `opportunity-${index}`,
    title: item.title || '',
    note: item.note || '',
    badge: item.badge || '',
    ctaText: item.ctaText || 'Explore',
    link: item.link || '',
  };
}

export default function HiddenOpportunities({ items = [], sourceLabel = '' }) {
  const cards = items.map(normalizeOpportunity);

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b7280' }}>Opportunity Layer</div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px' }}>Hidden Opportunities</h2>
        </div>
        <div style={{ color: '#6b7280', fontSize: '14px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        {cards.map((item) => (
          <article key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '18px', padding: '16px', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{item.title}</h3>
              {item.badge ? <div style={{ fontSize: '12px', fontWeight: 600, color: '#111827', background: '#e5e7eb', padding: '4px 8px', borderRadius: '999px' }}>{item.badge}</div> : null}
            </div>
            <p style={{ margin: '0 0 12px', color: '#4b5563' }}>{item.note}</p>
            {item.link ? <a href={item.link} target="_blank" rel="noreferrer" style={{ color: '#111827', fontWeight: 600 }}>{item.ctaText}</a> : <span style={{ color: '#6b7280', fontWeight: 600 }}>{item.ctaText}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
