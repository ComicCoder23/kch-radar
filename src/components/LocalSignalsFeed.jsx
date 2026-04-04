function normalizeSignal(item, index) {
  if (item.note && !item.title) {
    return {
      id: item.id || `signal-${index}`,
      title: item.title || '',
      note: item.note || '',
    };
  }

  return {
    id: item.id || `signal-${index}`,
    title: item.title || '',
    note: item.note || '',
  };
}

export default function LocalSignalsFeed({ items = [], sourceLabel = '' }) {
  const cards = items.map(normalizeSignal);

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b7280' }}>Signal Intake</div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px' }}>Local Signals Feed</h2>
        </div>
        <div style={{ color: '#6b7280', fontSize: '14px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {cards.map((item) => (
          <article key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '18px', padding: '16px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
