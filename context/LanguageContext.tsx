import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.available': 'Available for new projects',
    'hero.role': 'Web Developer & Website Creator',
    'hero.desc': 'I create modern, fast, and easy-to-manage websites. Available for freelance projects through Useme. I specialize in Strapi CMS - a powerful alternative to WordPress that gives you more control and better performance.',
    'hero.viewWork': 'View Work',
    'hero.contactMe': 'Contact Me',
    'hero.whyHire': 'Why Hire Piotr?',
    'skills.title': 'Technical Arsenal',
    'projects.title': 'Selected Work',
    'projects.subtitle': 'A collection of SaaS products, e-commerce platforms, and specialized databases built for clients and self-founded ventures.',
    'projects.visit': 'Visit Live Site',
    'projects.internal': 'Internal / Client Access',
    'experience.title': 'Professional Journey',
    'contact.title': "Let's Build Something Great",
    'contact.desc': "I'm currently available for freelance projects and full-time opportunities. Specializing in React, Next.js, and high-performance SaaS architecture.",
    'contact.footer': 'Based in Poland.',
  },
  pl: {
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.experience': 'Doświadczenie',
    'nav.contact': 'Kontakt',
    'hero.available': 'Dostępny do nowych projektów',
    'hero.role': 'Twórca Stron Internetowych',
    'hero.desc': 'Tworzę nowoczesne, szybkie i łatwe w zarządzaniu strony internetowe. Dostępny do projektów na zlecenie przez Useme. Specjalizuję się w Strapi CMS - potężnej alternatywie dla WordPress, która daje większą kontrolę i lepszą wydajność.',
    'hero.viewWork': 'Zobacz Projekty',
    'hero.contactMe': 'Skontaktuj się',
    'hero.whyHire': 'Dlaczego warto?',
    'skills.title': 'Technologie',
    'projects.title': 'Wybrane Projekty',
    'projects.subtitle': 'Kolekcja produktów SaaS, platform e-commerce i dedykowanych baz danych stworzonych dla klientów oraz jako własne przedsięwzięcia.',
    'projects.visit': 'Zobacz online',
    'projects.internal': 'Dostęp wewnętrzny / Klienta',
    'experience.title': 'Doświadczenie',
    'contact.title': 'Stwórzmy coś wyjątkowego',
    'contact.desc': 'Jestem dostępny do projektów freelance oraz stałej współpracy. Specjalizuję się w React, Next.js i wydajnej architekturze SaaS.',
    'contact.footer': 'Polska.',
  }
};

const getLanguageFromPath = (pathname: string): Language => {
  const pathLang = pathname.split('/')[1];
  if (pathLang === 'en' || pathLang === 'pl') {
    return pathLang as Language;
  }
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pl')) {
    return 'pl';
  }
  
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>(() => getLanguageFromPath(location.pathname));

  useEffect(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    if (currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|pl)/, '') || '/';
    navigate(`/${lang}${pathWithoutLang}`);
  };

  const t = (key: string) => {
    const keys = key as keyof typeof translations['en'];
    return translations[language][keys] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};