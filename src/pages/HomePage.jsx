import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ShireJourney from '../components/ShireJourney';
import ShireMap from '../components/ShireMap';
import NeighbourhoodHighlights from '../components/NeighbourhoodHighlights';
import FeaturedNow from '../components/FeaturedNow';
import HiddenOpportunities from '../components/HiddenOpportunities';
import LocalSignalsFeed from '../components/LocalSignalsFeed';
import CategoryGrid from '../components/CategoryGrid';
import LocalGuides from '../components/LocalGuides';
import WeeklyDigest from '../components/WeeklyDigest';
import SubmitSignalForm from '../components/SubmitSignalForm';
import { mockQueueData } from '../data/mockQueueData';

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');
const FEED_URL = API_BASE ? `${API_BASE}/api/signals` : '';
const FALLBACK_FEED_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMUTTIvpYHgTtw_ABwX6BNs-KR0I96FG1ZHJfsshTrQR105I7nhFo8FM5zTk8sOl7nuiYp5uObMmez5Una1oT-nGxujohtCaOU1ZEJ1Lxirf1SPmbFefflyHzDF-HRB4A2sw3mXild66KwaxBVhTdku-o9Ue1IThMtvRFQG_VjiofK8UFUpoIhmA6dG6cMncGRUnETK6vr-AnK8n9ElpFSAPAhGVTlEBOUgbZIu_lqZHfHywFXYjUP0dYtwcDkM8v2j1b64Z_Fr1HtTTr5kUnFzjIZZwwQ&lib=MUfpMO9oVaFg0Tp3KTWeHktTQ8ws31GAd';

const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 24px 80px',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#111827',
  lineHeight: 1.5,
};

const quickStartCards = [
  {
    to: '/report',
    title: 'Start here',
    text: 'Read the plain-English report that explains what KCH is, who it is for, and what it is selling.',
  },
  {
    to: '/signals',
    title: 'Browse updates',
    text: 'See current local items and what is happening right now.',
  },
  {
    to: '/submit',
    title: 'Add an update',
    text: 'If you are signed in, send a local signal into the feed.',
  },
];

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
        if (FEED_URL) {
          const localResponse = await fetch(FEED_URL);
          if (localResponse.ok) {
            const localData = await localResponse.json();
            if (localData && localData.length > 0) {
              setFeedData({ cards: localData });
              setIsLiveLocal(true);
              return;
            }
          }
        }

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

      <section className="radar-card" style={{ marginTop: '24px', padding: '28px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-campsie-green)', fontWeight: 700, marginBottom: '8px' }}>Start here</div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 16px', color: 'var(--kch-primary-text)' }}>Choose your next step</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {quickStartCards.map((card) => (
            <Link key={card.to} to={card.to} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '100%', padding: '18px', border: '1px solid var(--kch-border)', borderRadius: '18px', background: '#fff' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '18px', color: 'var(--kch-primary-text)' }}>{card.title}</h3>
                <p style={{ margin: 0, color: 'var(--kch-text-sub)', lineHeight: 1.6 }}>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ShireJourney />
      <ShireMap />
      <NeighbourhoodHighlights />
      <FeaturedNow items={featuredItems} sourceLabel={featuredSourceLabel} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginTop: '40px' }}>
        <HiddenOpportunities items={liveOpportunities} sourceLabel={opportunitySourceLabel} />
        <LocalSignalsFeed items={liveSignals} sourceLabel={signalSourceLabel} />
      </div>
      <CategoryGrid liveCards={liveCards} sourceLabel={categorySourceLabel} />
      <LocalGuides />
      <WeeklyDigest />
      
      <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <SubmitSignalForm />
        
        <div className="radar-card">
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--kch-campsie-green)', fontWeight: 700, marginBottom: '12px' }}>Network Node</div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: 'var(--kch-primary-text)' }}>G66 Community Pulse</h3>
          <p style={{ color: 'var(--kch-text-sub)', marginBottom: '32px', fontSize: '18px', maxWidth: '700px', lineHeight: '1.6' }}>
            Connect with local creatives, organisers, and sober-friendly groups in real-time. 
            Join our Slack-powered community hub to chat, collaborate, and share live intel.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            {['Alan', 'Tamsin', 'Mark', 'Sarah', 'KCH Admin'].map((name) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(0,0,0,0.03)', borderRadius: '30px', border: '1px solid var(--kch-border)' }}>
                <div style={{ width: '24px', height: '24px', background: 'var(--kch-canal-blue)', color: 'white', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{name[0]}</div>
                <span className="mono" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--kch-primary-text)' }}>{name}</span>
                <div className="status-indicator" style={{ width: '6px', height: '6px', marginLeft: '4px' }}></div>
              </div>
            ))}
            <div className="mono" style={{ padding: '8px 16px', color: 'var(--kch-text-sub)', fontSize: '12px' }}>+ 142 others online</div>
          </div>

          <a href="#" style={{ 
            display: 'inline-block',
            padding: '16px 32px',
            background: 'var(--kch-canal-blue)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '16px',
            letterSpacing: '0.1em',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>JOIN THE COMMUNITY SLACK</a>
        </div>
      </div>
    </div>
  );
}
