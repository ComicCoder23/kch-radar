import { mockQueueData } from '../data/mockQueueData';

function buildLiveCategoryCards(liveCards) {
  const grouped = new Map();

  liveCards.forEach((card) => {
    const key = card.category || 'Uncategorised';
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(card);
  });

  return Array.from(grouped.entries()).map(([title, cards]) => {
    const towns = [...new Set(cards.map((card) => card.town).filter(Boolean))].slice(0, 3);
    const count = cards.length;
    const townText = towns.length ? ` // ${towns.join(', ')}` : '';

    return {
      id: title,
      title,
      intro: `${count} INTERCEPTS${townText}`,
    };
  });
}

export default function CategoryGrid({ liveCards = [], sourceLabel = '' }) {
  const cards = liveCards.length ? buildLiveCategoryCards(liveCards) : mockQueueData.categories;

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)', fontWeight: 700 }}>
             Sector Map
          </div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px', fontWeight: 800 }}>Browser Taxonomy</h2>
        </div>
        <div className="mono" style={{ color: 'var(--muted)', fontSize: '13px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {cards.map((item) => (
          <article key={item.id} className="radar-card">
            <span className="badge badge-sandstone" style={{ marginBottom: '12px', display: 'inline-block' }}>{item.title}</span>
            <p className="mono" style={{ margin: 0, color: 'var(--muted)', fontSize: '11px' }}>{item.intro}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
