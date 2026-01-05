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
    '404.title': 'Page Not Found',
    '404.message': 'It looks like the page you\'re looking for doesn\'t exist or has been moved.',
    '404.home': 'Back to Home',
    '404.back': 'Go Back',
    'skills.tooltip.openai': 'Advanced AI models for text generation, analysis, and automation',
    'skills.tooltip.gemini': 'Multimodal AI model for content generation and analysis',
    'skills.tooltip.customAgents': 'Automated workflows and intelligent task processing',
    'skills.tooltip.rag': 'AI systems that use external knowledge sources',
    'skills.tooltip.promptEngineering': 'Optimizing AI inputs for better outputs',
    'skills.tooltip.n8n': 'Workflow automation platform for connecting services and APIs',
    'skills.tooltip.webhooks': 'Real-time event notifications between applications',
    'skills.tooltip.react': 'JavaScript library for building user interfaces',
    'skills.tooltip.nextjs': 'React framework with server-side rendering and routing',
    'skills.tooltip.typescript': 'Typed JavaScript for safer and more maintainable code',
    'skills.tooltip.tailwind': 'Utility-first CSS framework for rapid UI development',
    'skills.tooltip.framerMotion': 'Animation library for React components',
    'skills.tooltip.figma': 'Design tool for creating and prototyping user interfaces',
    'skills.tooltip.nodejs': 'JavaScript runtime for building server-side applications',
    'skills.tooltip.postgresql': 'Powerful open-source relational database',
    'skills.tooltip.payload': 'Headless CMS built with TypeScript and React',
    'skills.tooltip.strapi': 'Open-source headless CMS for managing content',
    'skills.tooltip.stripe': 'Payment processing for e-commerce and subscriptions',
    'skills.tooltip.serverless': 'Cloud functions that scale automatically',
    'skills.tooltip.vercel': 'Platform for deploying and hosting web applications',
    'skills.tooltip.git': 'Version control and collaboration platform',
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
    '404.title': 'Strona nie znaleziona',
    '404.message': 'Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona.',
    '404.home': 'Powrót do strony głównej',
    '404.back': 'Wstecz',
    'skills.tooltip.openai': 'Zaawansowane modele AI do generowania tekstu, analizy i automatyzacji',
    'skills.tooltip.gemini': 'Wielomodalny model AI do generowania treści i analizy',
    'skills.tooltip.customAgents': 'Zautomatyzowane workflow i inteligentne przetwarzanie zadań',
    'skills.tooltip.rag': 'Systemy AI wykorzystujące zewnętrzne źródła wiedzy',
    'skills.tooltip.promptEngineering': 'Optymalizacja wejść AI dla lepszych wyników',
    'skills.tooltip.n8n': 'Platforma automatyzacji workflow do łączenia serwisów i API',
    'skills.tooltip.webhooks': 'Powiadomienia o zdarzeniach w czasie rzeczywistym między aplikacjami',
    'skills.tooltip.react': 'Biblioteka JavaScript do budowania interfejsów użytkownika',
    'skills.tooltip.nextjs': 'Framework React z renderowaniem po stronie serwera i routingiem',
    'skills.tooltip.typescript': 'Typowany JavaScript dla bezpieczniejszego i łatwiejszego w utrzymaniu kodu',
    'skills.tooltip.tailwind': 'Framework CSS oparty na utility classes do szybkiego rozwoju UI',
    'skills.tooltip.framerMotion': 'Biblioteka animacji dla komponentów React',
    'skills.tooltip.figma': 'Narzędzie do projektowania interfejsów użytkownika',
    'skills.tooltip.nodejs': 'Środowisko uruchomieniowe JavaScript do budowania aplikacji serwerowych',
    'skills.tooltip.postgresql': 'Potężna relacyjna baza danych open-source',
    'skills.tooltip.payload': 'Headless CMS zbudowany w TypeScript i React',
    'skills.tooltip.strapi': 'Headless CMS open-source do zarządzania treścią',
    'skills.tooltip.stripe': 'Przetwarzanie płatności dla e-commerce i subskrypcji',
    'skills.tooltip.serverless': 'Funkcje w chmurze skalujące się automatycznie',
    'skills.tooltip.vercel': 'Platforma do wdrażania i hostowania aplikacji webowych',
    'skills.tooltip.git': 'System kontroli wersji i platforma współpracy',
  }
};

const getLanguageFromQuery = (search: string): Language => {
  const params = new URLSearchParams(search);
  const langParam = params.get('lang');
  
  if (langParam === 'pl' || langParam === 'en') {
    return langParam as Language;
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
  const [language, setLanguageState] = useState<Language>(() => getLanguageFromQuery(location.search));

  useEffect(() => {
    const currentLang = getLanguageFromQuery(location.search);
    if (currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [location.search, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const params = new URLSearchParams(location.search);
    params.set('lang', lang);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
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