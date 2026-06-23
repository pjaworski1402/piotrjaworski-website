import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'pl';

export const seoMeta = {
  pl: {
    title: 'Piotr Jaworski | Strony internetowe dla firm lokalnych',
    description: 'Ultraszybkie strony internetowe dla małych i średnich firm w całej Polsce. Więcej klientów z Google, taniej niż WordPress.',
  },
  en: {
    title: 'Piotr Jaworski | Websites for Local Businesses',
    description: 'Ultra-fast websites for small and medium businesses across Poland. More customers from Google, cheaper than WordPress.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.experience': 'Experience',
    'hero.available': 'Accepting new local clients',
    'hero.headline': 'Get more customers online for your business.',
    'hero.desc': 'Ultra-fast, easy-to-manage websites that rank on Google. A professional solution at a price that won\'t break your budget.',
    'hero.contactMe': 'Contact me and get customers',
    'hero.callMe': 'Call now',
    'hero.viewProjects': 'See my work',
    'hero.whyHire': 'Why work with me?',
    'hero.author': 'Piotr Jaworski, local web expert',
    'hero.bio': 'I build websites for local businesses across Poland. 8+ years of experience.',
    'hero.location': 'Working with businesses across Poland. Phone, email and remote collaboration.',
    'hero.benefit1': 'More calls from customers',
    'hero.benefit2': 'Better visibility on Google',
    'hero.benefit3': 'Cheaper than heavy WordPress',
    'services.title': 'What I offer',
    'services.subtitle': 'Clear services for local businesses. No jargon, no hidden costs.',
    'projects.title': 'My Work',
    'projects.subtitle': 'Real websites and online tools I built for clients and my own projects. Click a card to see the live site.',
    'projects.visit': 'View live site',
    'projects.preview': 'Click to preview',
    'testimonials.title': 'What clients say',
    'testimonials.subtitle': 'Feedback from business owners I\'ve worked with.',
    'process.title': 'How it works',
    'process.subtitle': 'Simple process from first contact to a live website.',
    'skills.title': 'Why your site will be fast and reliable',
    'skills.subtitle': 'Modern technology working for your profits. I handle the tech side, you grow your business.',
    'experience.title': 'Professional Journey',
    'contact.title': 'Contact me and get customers online',
    'contact.desc': 'Reach out to an expert who helps businesses across Poland get more customers online. Fill out the form. I\'ll respond quickly and together we\'ll figure out how to grow your profits.',
    'contact.vat': 'I issue VAT invoices',
    'contact.audit': 'Already have a website? Send the link in your message and I\'ll send you a free speed audit!',
    'contact.footer': 'Poland. Working with businesses across the country.',
    'contact.subject.newSite': 'New website',
    'contact.subject.audit': 'Existing site audit',
    'contact.subject.other': 'Other',
    'contact.messagePlaceholder': 'Tell me about your business. If you have a website, paste the link here...',
    'contact.phoneLabel': 'Phone',
    'contact.phonePlaceholder': '+48 123 456 789',
    'contact.privacyConsent': 'I agree to the processing of my data to respond to my inquiry.',
    'contact.privacyLink': 'Privacy policy',
    'contact.privacyRequired': 'Please accept the privacy policy to send the form.',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Common questions from local business owners.',
    '404.title': 'Page Not Found',
    '404.message': 'It looks like the page you\'re looking for doesn\'t exist or has been moved.',
    '404.home': 'Back to Home',
    '404.back': 'Go Back',
    'privacy.title': 'Privacy Policy',
    'privacy.close': 'Close',
    'skills.tooltip.speed': 'Fast-loading pages rank better on Google and keep customers on your site.',
    'skills.tooltip.seo': 'Technical optimization so local customers find you when searching online.',
    'skills.tooltip.cms': 'A simple panel to change text, prices and photos. No developer needed for every update.',
    'skills.tooltip.hosting': 'Affordable, reliable hosting without expensive monthly subscriptions.',
    'skills.tooltip.server': 'Server tailored to your needs, from 395 PLN/year. No overpaying.',
  },
  pl: {
    'nav.about': 'O mnie',
    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.contact': 'Kontakt',
    'nav.experience': 'Doświadczenie',
    'hero.available': 'Przyjmuję nowych klientów lokalnych',
    'hero.headline': 'Zdobądź więcej klientów online dla Twojego biznesu.',
    'hero.desc': 'Ultraszybkie, proste w obsłudze strony internetowe, które pozycjonują się w Google. Profesjonalne rozwiązanie w cenie, która nie zrujnuje Twojego budżetu.',
    'hero.contactMe': 'Skontaktuj się i zyskaj klientów',
    'hero.callMe': 'Zadzwoń',
    'hero.viewProjects': 'Zobacz realizacje',
    'hero.whyHire': 'Dlaczego warto?',
    'hero.author': 'Piotr Jaworski, lokalny ekspert od stron',
    'hero.bio': 'Tworzę strony dla firm lokalnych na terenie całej Polski. 8+ lat doświadczenia',
    'hero.location': 'Współpraca z firmami z całej Polski. Kontakt telefoniczny, mailowy i zdalnie.',
    'hero.benefit1': 'Więcej telefonów od klientów',
    'hero.benefit2': 'Lepsza widoczność w Google',
    'hero.benefit3': 'Taniej niż ciężki WordPress',
    'services.title': 'Co oferuję',
    'services.subtitle': 'Jasne usługi dla firm lokalnych. Bez żargonu i ukrytych kosztów.',
    'projects.title': 'Moje realizacje',
    'projects.subtitle': 'Prawdziwe strony i narzędzia online, które stworzyłem dla klientów i własnych projektów. Kliknij kartę, aby zobaczyć stronę na żywo.',
    'projects.visit': 'Zobacz stronę',
    'projects.preview': 'Kliknij, aby podejrzeć',
    'testimonials.title': 'Co mówią klienci',
    'testimonials.subtitle': 'Opinie właścicieli firm, z którymi współpracowałem.',
    'process.title': 'Jak to działa',
    'process.subtitle': 'Prosty proces od pierwszego kontaktu do działającej strony.',
    'skills.title': 'Dlaczego Twoja strona będzie szybka i niezawodna',
    'skills.subtitle': 'Nowoczesne technologie, które pracują na Twoje zyski. Ja się nimi zajmuję, Ty rozwijasz firmę.',
    'experience.title': 'Doświadczenie',
    'contact.title': 'Skontaktuj się i zyskaj klientów online',
    'contact.desc': 'Skontaktuj się z ekspertem, który pomaga firmom z całej Polski zdobywać klientów online. Wypełnij formularz. Odezwę się szybko i wspólnie ustalimy, jak zwiększyć Twoje zyski.',
    'contact.vat': 'Wystawiam faktury VAT',
    'contact.audit': 'Masz już stronę? Prześlij link w wiadomości, a prześlę Ci darmowy audyt jej szybkości!',
    'contact.footer': 'Polska. Współpraca z firmami z całej Polski.',
    'contact.subject.newSite': 'Nowa strona internetowa',
    'contact.subject.audit': 'Audyt istniejącej strony',
    'contact.subject.other': 'Inne',
    'contact.messagePlaceholder': 'Opisz swój biznes. Jeśli masz stronę, wklej link tutaj...',
    'contact.phoneLabel': 'Telefon',
    'contact.phonePlaceholder': '+48 123 456 789',
    'contact.privacyConsent': 'Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie.',
    'contact.privacyLink': 'Polityka prywatności',
    'contact.privacyRequired': 'Zaakceptuj politykę prywatności, aby wysłać formularz.',
    'faq.title': 'Najczęściej zadawane pytania',
    'faq.subtitle': 'Typowe pytania od właścicieli lokalnych firm.',
    '404.title': 'Strona nie znaleziona',
    '404.message': 'Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona.',
    '404.home': 'Powrót do strony głównej',
    '404.back': 'Wstecz',
    'privacy.title': 'Polityka prywatności',
    'privacy.close': 'Zamknij',
    'skills.tooltip.speed': 'Szybkie strony lepiej rankują w Google i zatrzymują klientów na witrynie.',
    'skills.tooltip.seo': 'Optymalizacja techniczna, dzięki której lokalni klienci znajdą Cię w internecie.',
    'skills.tooltip.cms': 'Prosty panel do zmiany tekstów, cen i zdjęć. Bez programisty przy każdej drobnostce.',
    'skills.tooltip.hosting': 'Tani, niezawodny hosting bez drogich abonamentów.',
    'skills.tooltip.server': 'Serwer dopasowany do potrzeb, od 395 zł/rok. Bez przepłacania.',
  },
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
    navigate(`${location.pathname}?${params.toString()}${location.hash}`, { replace: true });
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
