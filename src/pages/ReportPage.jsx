import { Link } from 'react-router-dom';
import '../components/Hero.css';

const rows = [
  {
    who: 'New resident or visitor',
    need: 'I want to know what this site is for.',
    KCH: 'A plain-language intro to the local discovery layer and the main things you can do.'
  },
  {
    who: 'Local organiser',
    need: 'I want to share an event or update.',
    KCH: 'A submit flow for signals, notices, and community updates.'
  },
  {
    who: 'Venue or community group',
    need: 'I want to be discovered.',
    KCH: 'Listings, guides, and category browsing so people can find you.'
  },
  {
    who: 'Project owner',
    need: 'I want to know what this is selling.',
    KCH: 'Local discovery and visibility — not a checkout store. The current paid parts are still placeholders.'
  }
];

const checklist = [
  'What KCH is: a local discovery and community visibility layer for Kirkintilloch + G66.',
  'Who it is for: residents, visitors, organisers, venues, and community groups.',
  'What it sells right now: clarity, discovery, and local attention.',
  'What is not finished yet: local photo integration, live monetisation, and a polished data pipeline.',
  'What the user should do first: read this page, then browse the home page or submit an update.'
];

export default function ReportPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>
      <section className="radar-card" style={{ padding: '32px', marginBottom: '24px' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: '12px', fontWeight: 800, color: 'var(--kch-campsie-green)' }}>
          What this is selling
        </p>
        <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.6rem)', lineHeight: 1.05, margin: '12px 0 16px', color: 'var(--kch-primary-text)' }}>
          KCH is a local discovery product for Kirkintilloch and the G66 area.
        </h1>
        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--kch-text-sub)', maxWidth: '72ch', margin: 0 }}>
          It is meant to help people quickly understand what is happening, where to go, and which local places or groups matter.
          This page exists because the product needs to explain itself before it asks anyone to click around.
        </p>
      </section>

      <section className="radar-card" style={{ padding: '28px', marginBottom: '24px' }}>
        <h2 style={{ marginTop: 0, fontSize: '28px' }}>Who it is for</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {rows.map((row) => (
            <article key={row.who} style={{ border: '1px solid var(--kch-border)', borderRadius: '16px', padding: '16px', background: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1.2fr', gap: '16px' }}>
                <strong style={{ color: 'var(--kch-primary-text)' }}>{row.who}</strong>
                <span style={{ color: 'var(--kch-text-sub)' }}>{row.need}</span>
                <span style={{ color: 'var(--kch-text-sub)' }}>{row.KCH}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="radar-card" style={{ padding: '28px', marginBottom: '24px' }}>
        <h2 style={{ marginTop: 0, fontSize: '28px' }}>Short product report</h2>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '10px', color: 'var(--kch-text-sub)', lineHeight: 1.6 }}>
          {checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="radar-card" style={{ padding: '28px', marginBottom: '24px' }}>
        <h2 style={{ marginTop: 0, fontSize: '28px' }}>What the current build can do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            ['Browse local updates', 'See featured items, categories, and recent digest entries.'],
            ['Read guides', 'Open local guide pages for routes, heritage, and community areas.'],
            ['Submit an update', 'Signed-in users can send a signal into the local feed.'],
            ['Open the public site', 'The homepage now explains the product before you need to learn the jargon.'],
          ].map(([title, text]) => (
            <div key={title} style={{ padding: '16px', border: '1px solid var(--kch-border)', borderRadius: '16px', background: '#fff' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '18px' }}>{title}</h3>
              <p style={{ margin: 0, color: 'var(--kch-text-sub)', lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="radar-card" style={{ padding: '28px' }}>
        <h2 style={{ marginTop: 0, fontSize: '28px' }}>Next obvious fixes</h2>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--kch-text-sub)', lineHeight: 1.6, display: 'grid', gap: '8px' }}>
          <li>Add the local photo set back into the homepage.</li>
          <li>Replace placeholder / mock sections with real live content.</li>
          <li>Make the feed hierarchy even clearer for first-time visitors.</li>
          <li>Hook up a true cloud backend if you want to stop relying on your machine for live data.</li>
        </ul>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
          <Link to="/" className="hero-button hero-button-primary">Back to home</Link>
          <Link to="/submit" className="hero-button hero-button-secondary">Submit an update</Link>
        </div>
      </section>
    </main>
  );
}
