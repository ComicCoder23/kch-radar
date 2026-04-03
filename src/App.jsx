import DiscoveryRadar from './components/DiscoveryRadar';
import FeaturedNow from './components/FeaturedNow';
import HiddenOpportunities from './components/HiddenOpportunities';
import LocalSignalsFeed from './components/LocalSignalsFeed';
import CategoryGrid from './components/CategoryGrid';
import SubmitSignalForm from './components/SubmitSignalForm';

export default function App() {
  return (
    <main>
      <DiscoveryRadar />
      <FeaturedNow />
      <HiddenOpportunities />
      <LocalSignalsFeed />
      <CategoryGrid />
      <SubmitSignalForm />
    </main>
  );
}
