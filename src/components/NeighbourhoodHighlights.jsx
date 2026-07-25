const highlights = [
  {
    title: 'Forth & Clyde Canal towpath',
    badge: 'Walk',
    meta: 'Flat, easy, waterside',
    text: 'A gentle canal walk that links Kirkintilloch with Bishopbriggs and Kilsyth, with long straight stretches and easy orientation.',
  },
  {
    title: 'Kirkintilloch & Waterside Trail',
    badge: 'Town loop',
    meta: 'Starts at the Town Hall',
    text: 'A town-centre meander that begins at Kirkintilloch Town Hall, passes Cowgate and the library, and returns through the centre.',
  },
  {
    title: 'Antonine Wall line',
    badge: 'History',
    meta: 'Roman frontier',
    text: 'The old Roman frontier runs through the local landscape, giving the neighbourhood its historic edge and a strong sense of place.',
  },
  {
    title: 'Auld Kirk Museum',
    badge: 'Heritage',
    meta: 'One of the oldest sites',
    text: 'Auld Kirk is one of the finest and oldest sites in Kirkintilloch and a strong anchor for exhibitions and local memory.',
  },
  {
    title: 'Kirkintilloch Town Hall',
    badge: 'Civic',
    meta: 'Events and gatherings',
    text: 'A public building for festivals, conferences, weddings, music nights, community groups, and larger local moments.',
  },
  {
    title: 'Auchinstarry Marina',
    badge: 'Nature',
    meta: 'Leisure stop',
    text: 'A canal-side base close to nature with a restaurant, art space, and easy access for walks, rides, and water activity.',
  },
];

const routeStops = [
  'Town Hall',
  'Auld Kirk',
  'Canal Street',
  'Antonine Wall',
  'Auchinstarry Marina',
];

export default function NeighbourhoodHighlights() {
  return (
    <section style={{ padding: '28px 0 8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'end', marginBottom: '18px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--kch-campsie-green)', fontWeight: 800 }}>
            Quaint local landmarks
          </div>
          <h2 style={{ margin: '6px 0 0', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 850, color: 'var(--kch-primary-text)' }}>
            Landmarks & walking tracks
          </h2>
        </div>
        <div className="mono" style={{ color: 'var(--kch-text-sub)', fontSize: '13px' }}>
          Kirkintilloch · canal · heritage · riverside
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '20px' }}>
        <article className="radar-card" style={{ padding: '24px', background: 'linear-gradient(180deg, #fffdf8 0%, #f5fbff 100%)', borderColor: '#eadfc8' }}>
          <div style={{
            height: '270px',
            borderRadius: '24px',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            background: 'linear-gradient(180deg, rgba(213, 240, 255, 0.92), rgba(255, 248, 235, 0.98))',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)'
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)', backgroundSize: '26px 26px', opacity: 0.45 }} />
            <svg viewBox="0 0 900 320" width="100%" height="100%" style={{ position: 'relative' }} aria-hidden="true">
              <defs>
                <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
              <path d="M120 210 C190 175, 210 175, 270 195 S360 245, 425 215 S545 150, 615 160 S715 220, 790 185" stroke="url(#routeLine)" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {[
                [120, 210, 'Town Hall'],
                [265, 196, 'Auld Kirk'],
                [425, 215, 'Canal Street'],
                [615, 160, 'Antonine Wall'],
                [790, 185, 'Marina'],
              ].map(([x, y, label]) => (
                <g key={label}>
                  <circle cx={x} cy={y} r="16" fill="#fff" stroke="#2563eb" strokeWidth="6" />
                  <text x={x} y={y - 24} textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">{label}</text>
                </g>
              ))}
            </svg>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
            {routeStops.map((stop) => (
              <span key={stop} style={{ padding: '8px 12px', borderRadius: '999px', background: 'rgba(37, 99, 235, 0.08)', color: '#1e40af', fontWeight: 700, fontSize: '13px' }}>{stop}</span>
            ))}
          </div>

          <p style={{ margin: '16px 0 0', color: 'var(--kch-text-sub)', lineHeight: 1.65 }}>
            This section gives the site a real neighbourhood feel: a soft route map, names people actually recognise,
            and a few easy ways to orient yourself before you click around.
          </p>
        </article>

        <div style={{ display: 'grid', gap: '14px' }}>
          {highlights.map((item) => (
            <article key={item.title} className="radar-card" style={{ padding: '18px', borderColor: 'rgba(15, 23, 42, 0.08)', background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'start', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2563eb', fontWeight: 800 }}>{item.badge}</div>
                  <h3 style={{ margin: '6px 0 0', fontSize: '18px', color: 'var(--kch-primary-text)' }}>{item.title}</h3>
                </div>
                <span style={{ whiteSpace: 'nowrap', padding: '7px 10px', borderRadius: '999px', background: 'rgba(15, 23, 42, 0.05)', color: 'var(--kch-text-sub)', fontSize: '12px', fontWeight: 700 }}>{item.meta}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--kch-text-sub)', fontSize: '14px', lineHeight: 1.6 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
