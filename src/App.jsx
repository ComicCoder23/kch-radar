import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignalsPage from './pages/SignalsPage';
import GuidesPage from './pages/GuidesPage';
import SubmitPage from './pages/SubmitPage';
import ProfilePage from './pages/ProfilePage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';

export default function App() {
  return (
    <Router>
      <main style={{ minHeight: '100vh', paddingBottom: '100px' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signals" element={<SignalsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
        </Routes>
      </main>
    </Router>
  );
}
