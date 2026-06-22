import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PrivacyModalProvider } from './context/PrivacyModalContext';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { Skills } from './components/Skills';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { NotFound } from './components/NotFound';

const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));

const getLanguageFromQuery = (search: string): 'en' | 'pl' => {
  const params = new URLSearchParams(search);
  const langParam = params.get('lang');

  if (langParam === 'pl' || langParam === 'en') {
    return langParam as 'en' | 'pl';
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pl')) {
    return 'pl';
  }

  return 'en';
};

const PortfolioContent: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-900/30 selection:text-emerald-200">
      <SeoHead />
      <Background />
      <Navbar />

      <div className="relative z-10">
        <main className="flex flex-col">
          <Hero />
          <Services />
          <Suspense fallback={<div id="projects" className="min-h-[24rem] border-t border-neutral-900" />}>
            <Projects />
          </Suspense>
          <Testimonials />
          <Process />
          <Experience />
          <Skills />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>

      <PrivacyPolicyModal />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <PrivacyModalProvider>
          <Routes>
            <Route path="/" element={<LanguageRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PrivacyModalProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

const LanguageRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentLang = getLanguageFromQuery(location.search);
    if (!location.search.includes('lang=')) {
      const params = new URLSearchParams();
      params.set('lang', currentLang);
      navigate(`/?${params.toString()}${location.hash}`, { replace: true });
    }
  }, [navigate, location]);

  return <PortfolioContent />;
};

export default App;
