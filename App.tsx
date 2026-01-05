import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';

const getLanguageFromPath = (pathname: string): 'en' | 'pl' => {
  const pathLang = pathname.split('/')[1];
  if (pathLang === 'en' || pathLang === 'pl') {
    return pathLang as 'en' | 'pl';
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
      <Background />
      
      <Navbar />
      
      <div className="relative z-10">
        <main className="flex flex-col">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
};

const LanguageRoute: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  
  if (lang !== 'pl' && lang !== 'en') {
    return (
      <LanguageProvider>
        <NotFound />
      </LanguageProvider>
    );
  }
  
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length > 1) {
    return (
      <LanguageProvider>
        <NotFound />
      </LanguageProvider>
    );
  }
  
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lang" element={<LanguageRoute />} />
        <Route path="/:lang/*" element={<LanguageRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

const LanguageRedirect: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
      return;
    }
    
    const lang = getLanguageFromPath(window.location.pathname);
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);
  
  return null;
};

export default App;