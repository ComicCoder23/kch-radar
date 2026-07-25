const scenicPoints = [
  { name: 'Town Hall', lat: 55.94107, lon: -4.15753, tone: 'Civic', note: 'Start at the gate of the town.' },
  { name: 'Auld Kirk Museum', lat: 55.94094, lon: -4.15998, tone: 'Heritage', note: 'One of the oldest buildings in the story.' },
  { name: 'Peel Park / Roman fort', lat: 55.94091, lon: -4.15968, tone: 'Roman', note: 'The Antonine Wall cuts through the ground here.' },
  { name: 'War memorial gate', lat: 55.9411, lon: -4.1589, tone: 'Memory', note: 'A monument threshold into the park.' },
  { name: 'Cowgate & library', lat: 55.9424, lon: -4.1545, tone: 'Town', note: 'The route returns through the living centre.' },
  { name: 'Luggie Water', lat: 55.9442, lon: -4.1487, tone: 'Stream', note: 'A hidden waterline at the edge of the town.' },
  { name: 'Canal towpath', lat: 55.9456, lon: -4.1398, tone: 'Canal', note: 'The Forth & Clyde opens the landscape wide.' },
  { name: 'Strathkelvin Railway Path', lat: 55.9489, lon: -4.1294, tone: 'Trail', note: 'A traffic-free passage to the wider realm.' },
  { name: 'Campsie Fells view', lat: 55.9532, lon: -4.114, tone: 'Hills', note: 'A bright northern ridge beyond the roofs.' },
  { name: 'Bar Hill / Twechar', lat: 55.9607, lon: -4.0736, tone: 'Roman', note: 'The higher Roman country on the outer edge.' },
  { name: 'Auchinstarry Marina', lat: 55.96796, lon: -4.05, tone: 'Waterside', note: 'A final water-gate to the countryside.' },
];

const dayTripRing = [
  { title: 'Mugdock Country Park', desc: 'Deep woods, lochs, and long countryside pauses beyond the town.', tag: 'Wildwood' },
  { title: 'Craigallian Loch', desc: 'A loch-side glow for a bigger sky and quieter water.', tag: 'Loch light' },
  { title: 'Lenzie Moss', desc: 'Boardwalks, bog, and a softer boggy edge to the realm.', tag: 'Fen trail' },
  { title: 'Milton of Campsie Fairy Woods', desc: 'A family-friendly pocket that leans the whole area into storybook mode.', tag: 'Fairy woods' },
];

function mapToCanvas(points, width = 1000, height = 560) {
  const padding = 50;
  const minLat = Math.min(...points.map((p) => p.lat));
  const maxLat = Math.max(...points.map((p) => p.lat));
  const minLon = Math.min(...points.map((p) => p.lon));
  const maxLon = Math.max(...points.map((p) => p.lon));

  const lonSpan = maxLon - minLon || 1;
  const latSpan = maxLat - minLat || 1;

  return points.map((point) => {
    const x = padding + ((point.lon - minLon) / lonSpan) * (width - padding * 2);
    const y = height - padding - ((point.lat - minLat) / latSpan) * (height - padding * 2);
    return { ...point, x, y };
  });
}

const projectedPoints = mapToCanvas(scenicPoints);
const routeLine = projectedPoints
  .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
  .join(' ');

function ScenicCard({ point }) {
  return (
    <article className="radar-card shire-point-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'start' }}>
        <div>
          <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--kch-campsie-green)', fontWeight: 800 }}>
            {point.tone}
          </div>
          <h4 style={{ margin: '6px 0 0', fontSize: '18px', color: 'var(--kch-primary-text)' }}>{point.name}</h4>
        </div>
        <span style={{ padding: '6px 10px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.24)', color: 'var(--kch-text-sub)', fontSize: '12px', fontWeight: 700 }}>
          true-to-life map
        </span>
      </div>
      <p style={{ margin: '10px 0 0', color: 'var(--kch-text-sub)', lineHeight: 1.6, fontSize: '14px' }}>{point.note}</p>
    </article>
  );
}

export default function ShireMap() {
  return (
    <section className="shire-atlas-section">
      <div className="shire-atlas-header">
        <div>
          <div className="section-eyebrow">Shire atlas</div>
          <h2>Town centre, canal, hills, and Roman lore</h2>
        </div>
        <p className="shire-atlas-kicker">
          Built from open trail sources and real places: the town hall loop, Peel Park, the canal towpath, the Strathkelvin path,
          Bar Hill, and the waterside run to Auchinstarry.
        </p>
      </div>

      <div className="shire-atlas-grid">
        <article className="radar-card shire-atlas-map-card">
          <div className="shire-map-frame">
            <div className="shire-map-haze" aria-hidden="true" />
            <svg viewBox="0 0 1000 560" role="img" aria-label="Stylised map of Kirkintilloch and nearby routes">
              <defs>
                <linearGradient id="shireWater" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <linearGradient id="shireHill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#bef264" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
                <linearGradient id="shireParchment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fff7d6" />
                  <stop offset="100%" stopColor="#ead8b0" />
                </linearGradient>
                <radialGradient id="shireGlow" cx="50%" cy="45%" r="65%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width="1000" height="560" fill="url(#shireParchment)" />
              <rect x="0" y="0" width="1000" height="560" fill="url(#shireGlow)" opacity="0.42" />
              <path d="M0 416 C 120 360, 240 435, 360 398 S 600 330, 760 370 S 900 455, 1000 405 L 1000 560 L 0 560 Z" fill="#bfe9cf" opacity="0.94" />
              <path d="M40 338 C 140 320, 220 360, 300 332 C 390 302, 500 294, 595 320 C 690 346, 760 388, 840 362 C 890 344, 930 332, 965 340" stroke="url(#shireWater)" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.88" />
              <path d="M150 120 C 240 72, 350 68, 460 98 C 560 126, 665 120, 760 92 C 838 70, 910 68, 980 92" stroke="url(#shireHill)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.7" />
              <path d="M80 170 C 150 140, 210 156, 290 176 S 430 225, 520 210 S 660 164, 740 184 S 860 220, 930 198" stroke="#8b5e34" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="2 14" opacity="0.7" />
              <path d="M70 70 L160 100 L112 174 L55 118 Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.25)" />
              <path d="M854 92 L910 140 L844 174 L798 122 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.15)" />

              <path d={routeLine} stroke="#7c2d12" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d={routeLine} stroke="#fef3c7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.82" />

              {projectedPoints.map((point) => (
                <g key={point.name}>
                  <circle cx={point.x} cy={point.y} r="15" fill="#fff" stroke="#14532d" strokeWidth="6" />
                  <circle cx={point.x} cy={point.y} r="4" fill="#14532d" />
                  <circle cx={point.x} cy={point.y} r="33" fill="rgba(255,255,255,0.0)" stroke="rgba(245, 208, 72, 0.34)" strokeWidth="1.8" />
                  <text x={point.x} y={point.y - 22} textAnchor="middle" fontSize="18" fontWeight="800" fill="#1f2937">
                    {point.name}
                  </text>
                </g>
              ))}

              {[...Array(24)].map((_, i) => {
                const x = 90 + (i * 39) % 820;
                const y = 92 + (i * 71) % 380;
                return <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.6 : 1.8} fill="rgba(255,255,255,0.9)" />;
              })}

              <g opacity="0.9">
                <text x="74" y="58" fontSize="20" fill="#172554" fontWeight="800">Kirkintilloch & surrounding routes</text>
                <text x="74" y="84" fontSize="14" fill="#334155" fontWeight="600">Open-map sketch of the town centre, canal, hills, and Roman frontier</text>
                <text x="910" y="50" textAnchor="end" fontSize="16" fill="#334155" fontWeight="700">N</text>
                <path d="M910 58 L910 94" stroke="#334155" strokeWidth="3" />
                <path d="M900 72 L910 58 L920 72" fill="none" stroke="#334155" strokeWidth="3" />
              </g>
            </svg>
          </div>

          <div className="shire-map-caption">
            <p>
              The map is deliberately storybook, but the route order follows real places and real trail lines.
              It gives the site a shire mood without losing Kirkintilloch itself.
            </p>
          </div>
        </article>

        <div className="shire-atlas-side">
          {projectedPoints.map((point) => (
            <ScenicCard key={point.name} point={point} />
          ))}
        </div>
      </div>

      <div className="shire-ring-grid">
        {dayTripRing.map((item) => (
          <article key={item.title} className="radar-card shire-ring-card">
            <div className="journey-tone" style={{ marginBottom: '8px' }}>{item.tag}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
