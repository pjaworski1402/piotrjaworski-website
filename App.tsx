import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

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

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={
          <Navigate to={`/${getLanguageFromPath(window.location.pathname)}`} replace />
        } />
        <Route path="/:lang" element={
          <LanguageProvider>
            <PortfolioContent />
          </LanguageProvider>
        } />
        <Route path="/:lang/*" element={
          <LanguageProvider>
            <PortfolioContent />
          </LanguageProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;