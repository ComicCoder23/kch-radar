import { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero';
import FeaturedNow from '../components/FeaturedNow';
import HiddenOpportunities from '../components/HiddenOpportunities';
import LocalSignalsFeed from '../components/LocalSignalsFeed';
import CategoryGrid from '../components/CategoryGrid';
import SubmitSignalForm from '../components/SubmitSignalForm';
import { mockQueueData } from '../data/mockQueueData';

const FEED_URL = 'http://localhost:5000/api/signals';
const FALLBACK_FEED_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMUTTIvpYHgTtw_ABwX6BNs-KR0I96FG1ZHJfsshTrQR105I7nhFo8FM5zTk8sOl7nuiYp5uObMmez5Una1oT-nGxujohtCaOU1ZEJ1Lxirf1SPmbFefflyHzDF-HRB4A2sw3mXild66KwaxBVhTdku-o9Ue1IThMtvRFQG_VjiofK8UFUpoIhmA6dG6cMncGRUnETK6vr-AnK8n9ElpFSAPAhGVTlEBOUgbZIu_lqZHfHywFXYjUP0dYtwcDkM8v2j1b64Z_Fr1HtTTr5kUnFzjIZZwwQ&lib=MUfpMO9oVaFg0Tp3KTWeHktTQ8ws31GAd';

const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 24px 80px',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#111827',
  lineHeight: 1.5,
};

function normalizeFeedItem(item) {
  return {
    id: item.id || `${item.title || 'item'}-${item.date || ''}`,
    category: item.category || '',
    title: item.title || '',
    town: item.town || '',
    date: item.date || '',
    note: item.shortCopy || item.notes || item.note || '',
    link: item.mainLink || item.link || '',
    cardType: item.cardType || '',
    section: item.section || '',
    sortOrder: Number(item.sortOrder || 9999),
    badge: item.badge || '',
    ctaText: item.ctaText || 'View details',
    activeFrom: item.activeFrom || '',
    activeUntil: item.activeUntil || '',
  };
}

function sortByOrder(items) {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder);
}

function isActive(item) {
  const today = new Date().toISOString().slice(0, 10);
  const startsOk = !item.activeFrom || item.activeFrom <= today;
  const endsOk = !item.activeUntil || item.activeUntil >= today;
  return startsOk && endsOk;
}

export default function HomePage() {
  const [feedData, setFeedData] = useState(null);
  const [feedError, setFeedError] = useState('');
  const [isLiveLocal, setIsLiveLocal] = useState(false);

  useEffect(() => {
    async function loadFeed() {
      try {
        // Try local DB first
        const localResponse = await fetch(FEED_URL);
        if (localResponse.ok) {
          const localData = await localResponse.json();
          if (localData && localData.length > 0) {
            setFeedData({ cards: localData });
            setIsLiveLocal(true);
            return;
          }
        }

        // Fallback to Google Sheets
        const response = await fetch(FALLBACK_FEED_URL, { method: 'GET' });
        if (!response.ok) {
          throw new Error(`Feed request failed with ${response.status}`);
        }
        const data = await response.json();
        setFeedData(data);
      } catch (error) {
        setFeedError(error.message || 'Unable to load live feed');
      }
    }

    loadFeed();
  }, []);

  const liveCards = useMemo(() => {
    if (feedData?.cards?.length) {
      return feedData.cards.map(normalizeFeedItem).filter(isActive);
    }
    return [];
  }, [feedData]);

  const featuredItems = useMemo(() => {
    const bySection = sortByOrder(liveCards.filter((card) => card.section === 'Featured Now'));
    if (bySection.length) return bySection;
    if (feedData?.featured?.length) return feedData.featured.map(normalizeFeedItem);
    return mockQueueData.featured;
  }, [feedData, liveCards]);

  const liveOpportunities = useMemo(() => {
    const filtered = sortByOrder(liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity'));
    if (filtered.length) return filtered;
    return mockQueueData.opportunities;
  }, [liveCards]);

  const liveSignals = useMemo(() => {
    const filtered = sortByOrder(liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal'));
    if (filtered.length) return filtered;
    return mockQueueData.localSignals;
  }, [liveCards]);

  const sourcePrefix = isLiveLocal ? 'Local Database' : 'Google Sheets';

  const featuredSourceLabel = featuredItems.length && liveCards.length
    ? `${sourcePrefix} feed · ${featuredItems.length} featured item${featuredItems.length === 1 ? '' : 's'}`
    : feedError
      ? 'Fallback mock data'
      : 'Loading live feed...';

  const categorySourceLabel = liveCards.length
    ? `${sourcePrefix} feed · ${liveCards.length} total live card${liveCards.length === 1 ? '' : 's'}`
    : 'Static browse taxonomy';

  const opportunitySourceLabel = liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length
    ? `${sourcePrefix} feed · ${liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length} opportunity item${liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length === 1 ? '' : 's'}`
    : 'Static opportunity layer';

  const signalSourceLabel = liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length
    ? `${sourcePrefix} feed · ${liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length} signal item${liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length === 1 ? '' : 's'}`
    : 'Static signal layer';

  return (
    <div style={pageStyle}>
      <Hero />
      <FeaturedNow items={featuredItems} sourceLabel={featuredSourceLabel} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginTop: '40px' }}>
        <HiddenOpportunities items={liveOpportunities} sourceLabel={opportunitySourceLabel} />
        <LocalSignalsFeed items={liveSignals} sourceLabel={signalSourceLabel} />
      </div>
      <CategoryGrid liveCards={liveCards} sourceLabel={categorySourceLabel} />
      
      <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <SubmitSignalForm />
        
        <div className="radar-card" style={{ borderStyle: 'solid', borderColor: 'var(--secondary)', background: 'rgba(16, 185, 129, 0.05)' }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--secondary)', fontWeight: 700, marginBottom: '12px' }}>Network Node</div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>G66 Community Pulse</h3>
          <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '18px', maxWidth: '700px', lineHeight: '1.6' }}>
            Connect with local creatives, organisers, and sober-friendly groups in real-time. 
            Join our Slack-powered community hub to chat, collaborate, and share live intel.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            {['Alan', 'Tamsin', 'Mark', 'Sarah', 'KCH Admin'].map((name) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{name[0]}</div>
                <span className="mono" style={{ fontSize: '12px', fontWeight: 600 }}>{name}</span>
                <div className="status-indicator" style={{ width: '6px', height: '6px', marginLeft: '4px' }}></div>
              </div>
            ))}
            <div className="mono" style={{ padding: '8px 16px', color: 'var(--muted)', fontSize: '12px' }}>+ 142 others online</div>
          </div>

          <a href="#" style={{ 
            display: 'inline-block',
            padding: '16px 32px',
            background: 'var(--secondary)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '16px',
            letterSpacing: '0.1em',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>JOIN THE COMMUNITY SLACK</a>
        </div>
      </div>
    </div>
  );
}
