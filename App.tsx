import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
// import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';

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
      <Background />
      
      <Navbar />
      
      <div className="relative z-10">
        <main className="flex flex-col">
          <Hero />
          <Projects />
          <Contact />
          <Experience />
          {/* <Skills /> */}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
