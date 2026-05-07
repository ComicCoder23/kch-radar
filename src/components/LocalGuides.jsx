import './LocalGuides.css';

const guides = [
  { title: 'Marina & Canal', badge: 'badge-canal', desc: 'Explore the Forth & Clyde Canal pathways and marina life.' },
  { title: 'Antonine Wall', badge: 'badge-sandstone', desc: 'Step back in time along the UNESCO World Heritage Roman frontier.' },
  { title: 'Campsie Hills', badge: 'badge-campsie', desc: 'Panoramic views and challenging trails for outdoor enthusiasts.' },
  { title: 'Venues & Spaces', badge: 'badge-sandstone', desc: 'Discover community halls, art spaces, and local event hubs.' }
];

export default function LocalGuides() {
  return (
    <section style={{ padding: '24px 16px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>Local Explorer Guides</h2>
      <p style={{ color: 'var(--kch-text-sub)', marginBottom: '24px' }}>Curated pathways through Kirkintilloch.</p>
      <div className="local-guides-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px'
      }}>
        {guides.map((guide, idx) => (
          <article key={idx} className="radar-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '120px' }}>KCH</div>
            <div style={{ marginBottom: '8px' }}>
              <span className={`badge ${guide.badge}`}>Guide</span>
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 700 }}>{guide.title}</h3>
            <p style={{ margin: 0, color: 'var(--kch-text-sub)', fontSize: '14px', lineHeight: 1.6 }}>{guide.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
