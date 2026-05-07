import { useState, useMemo } from 'react';
import seedSignals from '../data/seed-signals.json';

function normalizeSignal(item, index) {
  return {
    ...item,
    id: item.id || `signal-${index}`,
    title: item.title || 'Untitled Signal',
    note: item.description || '',
    badge: item.category || 'Signal',
    trustLevel: item.trustLevel || 'Verified',
    freshnessLevel: item.freshnessLevel || 'Just now',
    date: item.freshnessLevel || 'Just now',
    ctaText: 'INTERCEPT',
    link: '#',
  };
}

export default function LocalSignalsFeed({ items = seedSignals, sourceLabel = 'KCH Seed Database', onItemClick, loading = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(items.map(item => item.category || 'Uncategorized'));
    return ['All', ...Array.from(cats)];
  }, [items]);

  const filteredCards = useMemo(() => {
    let result = items.map(normalizeSignal);
    
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.note.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (categoryFilter !== 'All') {
      result = result.filter(item => item.badge === categoryFilter);
    }
    
    return result;
  }, [items, searchTerm, categoryFilter]);

  return (
    <section style={{ padding: '24px 16px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-text-sub)', fontWeight: 600 }}>
             Local Discovery
        </div>
        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>Signals Feed</h2>
        <div style={{ color: 'var(--kch-text-sub)', fontSize: '13px' }}>{sourceLabel}</div>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <input 
                type="text" 
                placeholder="Search signals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--kch-border)', background: 'transparent', color: 'white' }}
            />
            <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--kch-border)', background: 'transparent', color: 'white' }}
            >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px'
      }}>
        {loading ? (
          <div className="radar-card" style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1' }}>
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Signals...</div>
          </div>
        ) : filteredCards.length > 0 ? (
          filteredCards.map((item) => (
            <article 
              key={item.id} 
              className="radar-card" 
              onClick={() => onItemClick && onItemClick(item)}
              style={{ 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="image-placeholder" style={{ marginBottom: '16px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.title.substring(0, 4)}</div>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span className={`badge ${item.badge.toLowerCase().includes('canal') ? 'badge-canal' : item.badge.toLowerCase().includes('campsie') ? 'badge-campsie' : item.badge.toLowerCase().includes('sandstone') ? 'badge-sandstone' : ''}`}>{item.badge}</span>
                <span className="badge" style={{ fontSize: '10px' }}>{item.trustLevel}</span>
                <span className="badge" style={{ fontSize: '10px' }}>{item.freshnessLevel}</span>
              </div>

              <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 700, color: 'var(--kch-primary-text)' }}>{item.title}</h3>

              <div style={{ color: 'var(--kch-text-sub)', fontSize: '12px', marginBottom: '16px', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.date}
              </div>

              <p style={{ margin: '0 0 20px', color: 'var(--kch-text-sub)', fontSize: '14px', lineHeight: 1.6, flexGrow: 1 }}>{item.note}</p>

              <button 
                className="btn-primary"
                style={{ 
                  alignSelf: 'start', 
                  fontSize: '12px',
                  padding: '8px 16px'
                }}
                onClick={(e) => { e.stopPropagation(); item.link && window.open(item.link, '_blank'); }}
              >
                {item.ctaText}
              </button>
            </article>
          ))
        ) : (
          <div className="radar-card" style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1' }}>
            <div className="image-placeholder" style={{ marginBottom: '16px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>NO SIGNALS</div>
            <p style={{ color: 'var(--kch-text-sub)' }}>No signals matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
