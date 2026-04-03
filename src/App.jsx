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
    note: item.shortCopy || item.notes || '',
    link: item.mainLink || '',
  };
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

  const featuredItems = useMemo(() => {
    if (feedData?.featured?.length) {
      return feedData.featured.map(normalizeFeedItem);
    }
    return mockQueueData.featured;
  }, [feedData]);

  const featuredSourceLabel = feedData?.featured?.length
    ? `Live Google Sheet feed · ${feedData.featured.length} featured item${feedData.featured.length === 1 ? '' : 's'}`
    : feedError
      ? 'Fallback mock data'
      : 'Loading live feed...';

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <div style={pageStyle}>
        <DiscoveryRadar />
        <FeaturedNow items={featuredItems} sourceLabel={featuredSourceLabel} />
        <HiddenOpportunities />
        <LocalSignalsFeed />
        <CategoryGrid />
        <SubmitSignalForm />
      </div>
    </main>
  );
}
