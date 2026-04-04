import { useEffect, useMemo, useState } from 'react';
import DiscoveryRadar from './components/DiscoveryRadar';
import FeaturedNow from './components/FeaturedNow';
import HiddenOpportunities from './components/HiddenOpportunities';
import LocalSignalsFeed from './components/LocalSignalsFeed';
import CategoryGrid from './components/CategoryGrid';
import SubmitSignalForm from './components/SubmitSignalForm';
import { mockQueueData } from './data/mockQueueData';

const FEED_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMUTTIvpYHgTtw_ABwX6BNs-KR0I96FG1ZHJfsshTrQR105I7nhFo8FM5zTk8sOl7nuiYp5uObMmez5Una1oT-nGxujohtCaOU1ZEJ1Lxirf1SPmbFefflyHzDF-HRB4A2sw3mXild66KwaxBVhTdku-o9Ue1IThMtvRFQG_VjiofK8UFUpoIhmA6dG6cMncGRUnETK6vr-AnK8n9ElpFSAPAhGVTlEBOUgbZIu_lqZHfHywFXYjUP0dYtwcDkM8v2j1b64Z_Fr1HtTTr5kUnFzjIZZwwQ&lib=MUfpMO9oVaFg0Tp3KTWeHktTQ8ws31GAd';

const pageStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '32px 20px 64px',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#111827',
  lineHeight: 1.5,
};

function normalizeFeedItem(item) {
  return {
    id: `${item.title || 'item'}-${item.date || ''}`,
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

export default function App() {
  const [feedData, setFeedData] = useState(null);
  const [feedError, setFeedError] = useState('');

  useEffect(() => {
    async function loadFeed() {
      try {
        const response = await fetch(FEED_URL, { method: 'GET' });
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

  const featuredSourceLabel = featuredItems.length && liveCards.length
    ? `Live Google Sheet feed · ${featuredItems.length} featured item${featuredItems.length === 1 ? '' : 's'}`
    : feedError
      ? 'Fallback mock data'
      : 'Loading live feed...';

  const categorySourceLabel = liveCards.length
    ? `Live Google Sheet feed · ${liveCards.length} total live card${liveCards.length === 1 ? '' : 's'}`
    : 'Static browse taxonomy';

  const opportunitySourceLabel = liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length
    ? `Live Google Sheet feed · ${liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length} opportunity item${liveCards.filter((card) => card.section === 'Hidden Opportunities' || (card.cardType || '').toLowerCase() === 'opportunity').length === 1 ? '' : 's'}`
    : 'Static opportunity layer';

  const signalSourceLabel = liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length
    ? `Live Google Sheet feed · ${liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length} signal item${liveCards.filter((card) => card.section === 'Local Signals Feed' || (card.cardType || '').toLowerCase() === 'signal').length === 1 ? '' : 's'}`
    : 'Static signal layer';

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <div style={pageStyle}>
        <DiscoveryRadar />
        <FeaturedNow items={featuredItems} sourceLabel={featuredSourceLabel} />
        <HiddenOpportunities items={liveOpportunities} sourceLabel={opportunitySourceLabel} />
        <LocalSignalsFeed items={liveSignals} sourceLabel={signalSourceLabel} />
        <CategoryGrid liveCards={liveCards} sourceLabel={categorySourceLabel} />
        <SubmitSignalForm />
      </div>
    </main>
  );
}
