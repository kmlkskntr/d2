import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/auth';
import { FeedbackProvider } from './components/Feedback';
import Layout from './components/Layout';
import { Spinner } from './components/ui';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CategoriesPage from './pages/CategoriesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import BrandsPage from './pages/BrandsPage';
import FaqPage from './pages/FaqPage';
import CosmeticsPage from './pages/CosmeticsPage';
import ProductsPage from './pages/ProductsPage';
import HomeSettingsPage from './pages/HomeSettingsPage';
import AboutSettingsPage from './pages/AboutSettingsPage';
import ContactPage from './pages/ContactPage';
import MessagesPage from './pages/MessagesPage';
import DealersPage from './pages/DealersPage';
import LegalPage from './pages/LegalPage';
import SeoPage from './pages/SeoPage';
import MediaPage from './pages/MediaPage';
import UsersPage from './pages/UsersPage';
import AccountPage from './pages/AccountPage';

function Protected({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>;
  if (!user) return <Navigate to="/login" replace />;
  return <Layout>{children}</Layout>;
}

export default function App() {
  return (
    <FeedbackProvider>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Protected><DashboardPage /></Protected>} />
            <Route path="/anasayfa" element={<Protected><HomeSettingsPage /></Protected>} />
            <Route path="/kurumsal" element={<Protected><AboutSettingsPage /></Protected>} />
            <Route path="/urunler" element={<Protected><ProductsPage /></Protected>} />
            <Route path="/kategoriler" element={<Protected><CategoriesPage /></Protected>} />
            <Route path="/teknolojiler" element={<Protected><TechnologiesPage /></Protected>} />
            <Route path="/markalar" element={<Protected><BrandsPage /></Protected>} />
            <Route path="/kozmetik" element={<Protected><CosmeticsPage /></Protected>} />
            <Route path="/sss" element={<Protected><FaqPage /></Protected>} />
            <Route path="/yasal" element={<Protected><LegalPage /></Protected>} />
            <Route path="/mesajlar" element={<Protected><MessagesPage /></Protected>} />
            <Route path="/bayi-basvurulari" element={<Protected><DealersPage /></Protected>} />
            <Route path="/medya" element={<Protected><MediaPage /></Protected>} />
            <Route path="/seo" element={<Protected><SeoPage /></Protected>} />
            <Route path="/iletisim" element={<Protected><ContactPage /></Protected>} />
            <Route path="/kullanicilar" element={<Protected><UsersPage /></Protected>} />
            <Route path="/ayarlar" element={<Protected><AccountPage /></Protected>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </FeedbackProvider>
  );
}
