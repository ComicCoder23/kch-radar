export default function DiscoveryRadar() {
  return (
    <section style={{ padding: '8px 0 24px' }}>
      <div className="radar-container" style={{ 
        background: '#0f172a', 
        color: '#fff', 
        borderRadius: '32px', 
        padding: '48px 40px',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="radar-sweep" style={{ opacity: 0.15 }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            color: '#38bdf8',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              background: '#38bdf8', 
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 10px #38bdf8'
            }}></span>
            Live Radar System
          </div>
          <h1 style={{ 
            fontSize: '56px', 
            margin: '0 0 16px', 
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>KCH Discovery Radar</h1>
          <p style={{ 
            fontSize: '20px', 
            margin: 0, 
            maxWidth: '680px', 
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            What’s happening locally that’s worth your attention? A creative-first radar mapping events, opportunities, signals, and community life in Kirkintilloch and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
