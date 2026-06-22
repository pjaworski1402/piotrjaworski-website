import { useEffect } from 'react';
import { useLanguage, seoMeta } from '../context/LanguageContext';
import { SITE_CONFIG } from '../constants';

const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

export const SeoHead: React.FC = () => {
  const { language } = useLanguage();
  const meta = seoMeta[language];
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

  useEffect(() => {
    document.documentElement.lang = language === 'pl' ? 'pl' : 'en';
    document.title = meta.title;

    setMetaTag('name', 'title', meta.title);
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:locale', language === 'pl' ? 'pl_PL' : 'en_US');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);

    const alternateLang = language === 'pl' ? 'en' : 'pl';

    setMetaTag('property', 'og:locale:alternate', alternateLang === 'pl' ? 'pl_PL' : 'en_US');

    let hreflangPl = document.querySelector('link[hreflang="pl"]') as HTMLLinkElement | null;
    let hreflangEn = document.querySelector('link[hreflang="en"]') as HTMLLinkElement | null;

    if (!hreflangPl) {
      hreflangPl = document.createElement('link');
      hreflangPl.rel = 'alternate';
      hreflangPl.hreflang = 'pl';
      document.head.appendChild(hreflangPl);
    }
    hreflangPl.href = `${SITE_CONFIG.siteUrl}/?lang=pl`;

    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.rel = 'alternate';
      hreflangEn.hreflang = 'en';
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.href = `${SITE_CONFIG.siteUrl}/?lang=en`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Piotr Jaworski | strony internetowe',
      url: SITE_CONFIG.siteUrl,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      areaServed: [
        { '@type': 'AdministrativeArea', name: SITE_CONFIG.region },
        { '@type': 'Country', name: 'Poland' },
      ],
      description: meta.description,
      priceRange: '$$',
      availableLanguage: ['Polish', 'English'],
    };

    let script = document.getElementById('json-ld-service') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-service';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [language, meta.description, meta.title]);

  useEffect(() => {
    if (!gaId || document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.id = 'ga-inline';
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(inline);
  }, [gaId]);

  return null;
};
