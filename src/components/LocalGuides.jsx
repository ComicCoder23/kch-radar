import './LocalGuides.css';

const guides = [
  { title: 'Marina & Canal', badge: 'badge-canal', desc: 'Explore the Forth & Clyde Canal pathways and marina life.' },
  { title: 'Antonine Wall', badge: 'badge-sandstone', desc: 'Step back in time along the UNESCO World Heritage Roman frontier.' },
  { title: 'Campsie Hills', badge: 'badge-campsie', desc: 'Panoramic views and challenging trails for outdoor enthusiasts.' },
  { title: 'Venues & Spaces', badge: 'badge-sandstone', desc: 'Discover community halls, art spaces, and local event hubs.' }
];

export default function LocalGuides() {
  return (
    <section>
      <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>Local Explorer Guides</h2>
      <p style={{ color: 'var(--kch-text-sub)', marginBottom: '24px' }}>Curated pathways through Kirkintilloch.</p>
      <div className="local-guides-grid">
        {guides.map((guide, idx) => (
          <article key={idx} className="guide-card">
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '120px' }}>KCH</div>
            <div className="guide-header">
              <h3>{guide.title}</h3>
              <span className={`badge ${guide.badge}`}>Guide</span>
            </div>
            <p>{guide.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
