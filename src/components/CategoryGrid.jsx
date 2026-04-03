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
    const townText = towns.length ? ` · ${towns.join(', ')}` : '';

    return {
      id: title,
      title,
      intro: `${count} live item${count === 1 ? '' : 's'}${townText}`,
    };
  });
}

export default function CategoryGrid({ liveCards = [], sourceLabel = '' }) {
  const cards = liveCards.length ? buildLiveCategoryCards(liveCards) : mockQueueData.categories;

  return (
    <section style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '16px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b7280' }}>Browse</div>
          <h2 style={{ margin: '6px 0 0', fontSize: '32px' }}>Categories</h2>
        </div>
        <div style={{ color: '#6b7280', fontSize: '14px' }}>{sourceLabel}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        {cards.map((item) => (
          <article key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '18px', padding: '16px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#4b5563' }}>{item.intro}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
