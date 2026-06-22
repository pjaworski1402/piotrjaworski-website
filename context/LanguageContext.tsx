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
    'nav.projects': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.experience': 'Experience',
    'hero.available': 'Accepting new local clients',
    'hero.headline': 'Get more customers online for your business.',
    'hero.desc': 'Ultra-fast, easy-to-manage websites that rank on Google. A professional solution at a price that won\'t break your budget.',
    'hero.contactMe': 'Contact me and get customers',
    'hero.viewProjects': 'See my work',
    'hero.whyHire': 'Why work with me?',
    'hero.author': 'Piotr Jaworski, local web expert',
    'hero.benefit1': 'More calls from customers',
    'hero.benefit2': 'Better visibility on Google',
    'hero.benefit3': 'Cheaper than heavy WordPress',
    'projects.title': 'My Work',
    'projects.subtitle': 'Real websites and online tools I built for clients and my own projects. Click a card to see the live site.',
    'projects.visit': 'View live site',
    'projects.preview': 'Click to preview',
    'skills.title': 'Technical Foundation. Your Guarantee of Speed and Security',
    'skills.subtitle': 'Modern technology working for your profits. I handle the tech side, you grow your business.',
    'experience.title': 'Professional Journey',
    'contact.title': 'Contact me and get customers online',
    'contact.desc': 'Reach out to a local expert who will help you gain customers online. Fill out the form. I\'ll respond quickly and together we\'ll figure out how to grow your profits.',
    'contact.vat': 'I issue VAT invoices',
    'contact.audit': 'Already have a website? Send the link in your message and I\'ll send you a free speed audit!',
    'contact.footer': 'Based in Poland.',
    'contact.subject.newSite': 'New website',
    'contact.subject.audit': 'Existing site audit',
    'contact.subject.other': 'Other',
    'contact.messagePlaceholder': 'Tell me about your business. If you have a website, paste the link here...',
    '404.title': 'Page Not Found',
    '404.message': 'It looks like the page you\'re looking for doesn\'t exist or has been moved.',
    '404.home': 'Back to Home',
    '404.back': 'Go Back',
    'skills.tooltip.nextjs': 'Future-proof technologies ensuring ultra-fast pages and better Google rankings.',
    'skills.tooltip.react': 'Future-proof technologies ensuring ultra-fast pages and better Google rankings.',
    'skills.tooltip.directus': 'A modern, easy-to-use system that lets you change website content quickly, no technical knowledge needed.',
    'skills.tooltip.githubPages': 'Affordable, reliable hosting, without expensive subscriptions.',
    'skills.tooltip.mikrus': 'Server tailored to your needs, from 395 PLN/year, no overpaying.',
  },
  pl: {
    'nav.about': 'O mnie',
    'nav.projects': 'Realizacje',
    'nav.contact': 'Kontakt',
    'nav.experience': 'Doświadczenie',
    'hero.available': 'Przyjmuję nowych klientów lokalnych',
    'hero.headline': 'Zdobądź więcej klientów online dla Twojego biznesu.',
    'hero.desc': 'Ultraszybkie, proste w obsłudze strony internetowe, które pozycjonują się w Google. Profesjonalne rozwiązanie w cenie, która nie zrujnuje Twojego budżetu.',
    'hero.contactMe': 'Skontaktuj się i zyskaj klientów',
    'hero.viewProjects': 'Zobacz realizacje',
    'hero.whyHire': 'Dlaczego warto?',
    'hero.author': 'Piotr Jaworski, lokalny ekspert od stron',
    'hero.benefit1': 'Więcej telefonów od klientów',
    'hero.benefit2': 'Lepsza widoczność w Google',
    'hero.benefit3': 'Taniej niż ciężki WordPress',
    'projects.title': 'Moje realizacje',
    'projects.subtitle': 'Prawdziwe strony i narzędzia online, które stworzyłem dla klientów i własnych projektów. Kliknij kartę, aby zobaczyć stronę na żywo.',
    'projects.visit': 'Zobacz stronę',
    'projects.preview': 'Kliknij, aby podejrzeć',
    'skills.title': 'Zaplecze techniczne. Twoja gwarancja szybkości i bezpieczeństwa',
    'skills.subtitle': 'Nowoczesne technologie, które pracują na Twoje zyski. Ja się nimi zajmuję, Ty rozwijasz firmę.',
    'experience.title': 'Doświadczenie',
    'contact.title': 'Skontaktuj się i zyskaj klientów online',
    'contact.desc': 'Skontaktuj się z lokalnym ekspertem, który pomoże Ci zyskać klientów online. Wypełnij formularz. Odezwę się szybko i wspólnie ustalimy, jak możemy zwiększyć Twoje zyski.',
    'contact.vat': 'Wystawiam faktury VAT',
    'contact.audit': 'Masz już stronę? Prześlij link w wiadomości, a prześlę Ci darmowy audyt jej szybkości!',
    'contact.footer': 'Polska.',
    'contact.subject.newSite': 'Nowa strona internetowa',
    'contact.subject.audit': 'Audyt istniejącej strony',
    'contact.subject.other': 'Inne',
    'contact.messagePlaceholder': 'Opisz swój biznes. Jeśli masz stronę, wklej link tutaj...',
    '404.title': 'Strona nie znaleziona',
    '404.message': 'Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona.',
    '404.home': 'Powrót do strony głównej',
    '404.back': 'Wstecz',
    'skills.tooltip.nextjs': 'Technologie przyszłości zapewniające ultraszybkość Twojej strony i lepsze pozycjonowanie w Google.',
    'skills.tooltip.react': 'Technologie przyszłości zapewniające ultraszybkość Twojej strony i lepsze pozycjonowanie w Google.',
    'skills.tooltip.directus': 'Nowoczesny i prosty system. Błyskawicznie zmienisz treści na stronie bez technicznej wiedzy.',
    'skills.tooltip.githubPages': 'Tani, niezawodny hosting, bez drogich abonamentów.',
    'skills.tooltip.mikrus': 'Serwer dopasowany do potrzeb, od 395 zł/rok, bez przepłacania.',
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
