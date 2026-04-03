import DiscoveryRadar from './components/DiscoveryRadar';
import FeaturedNow from './components/FeaturedNow';
import HiddenOpportunities from './components/HiddenOpportunities';
import LocalSignalsFeed from './components/LocalSignalsFeed';
import CategoryGrid from './components/CategoryGrid';
import SubmitSignalForm from './components/SubmitSignalForm';

const pageStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '32px 20px 64px',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#111827',
  lineHeight: 1.5,
};

export default function App() {
  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <div style={pageStyle}>
        <DiscoveryRadar />
        <FeaturedNow />
        <HiddenOpportunities />
        <LocalSignalsFeed />
        <CategoryGrid />
        <SubmitSignalForm />
      </div>
    </main>
  );
}
