import './WeeklyDigest.css';

const digestItems = [
  { title: 'Town Hall Revamp', category: 'Project', date: 'May 2' },
  { title: 'Canal Cleanup Results', category: 'Community', date: 'May 1' },
  { title: 'New Artist Studio Space', category: 'Opportunity', date: 'Apr 30' }
];

export default function WeeklyDigest({ items = digestItems }) {
  return (
    <section className="weekly-digest-section" style={{ padding: '40px 0', borderTop: '1px solid var(--kch-border)', marginTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>This week</h2>
          <p style={{ color: 'var(--kch-text-sub)', margin: '4px 0 0', fontSize: '14px' }}>A short round-up of current local items.</p>
        </div>
        <span className="badge badge-canal" style={{ fontSize: '10px' }}>RECENTLY VERIFIED</span>
      </div>
      
      <div className="digest-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {items.map((item, idx) => (
          <div key={idx} className="digest-item" style={{ 
            padding: '16px', 
            background: 'white', 
            borderRadius: '8px', 
            border: '1px solid var(--kch-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ width: '4px', height: '40px', background: 'var(--kch-canal-blue)', borderRadius: '2px' }}></div>
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: '15px' }}>{item.title}</h4>
              <div style={{ fontSize: '12px', color: 'var(--kch-text-sub)' }}>
                {item.category} • {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
