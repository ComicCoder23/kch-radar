import { mockQueueData } from '../data/mockQueueData';

export default function HiddenOpportunities() {
  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b7280' }}>Opportunity Layer</div>
      <h2 style={{ margin: '6px 0 16px', fontSize: '32px' }}>Hidden Opportunities</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        {mockQueueData.opportunities.map((item) => (
          <article key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '18px', padding: '16px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
