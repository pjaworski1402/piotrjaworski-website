import {
  Project,
  Experience,
  SkillGroup,
  Service,
  Testimonial,
  ProcessStep,
  FaqItem,
} from './types';
import { Language } from './context/LanguageContext';

export const SITE_CONFIG = {
  region: 'Śląsk',
  phone: '+48 608 423 576',
  phoneHref: 'tel:+48608423576',
  email: 'hello@piotrjaworski.com',
  siteUrl: 'https://piotrjaworski.com',
};

export const getNavLinks = (t: (key: string) => string) => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.contact'), href: '#contact' },
];

export const getSkills = (lang: Language): SkillGroup[] => [
  {
    category: lang === 'pl' ? 'Szybkość i widoczność w Google' : 'Speed & Google visibility',
    skills: lang === 'pl'
      ? ['Błyskawiczne ładowanie', 'Lepsze pozycje w Google']
      : ['Instant page loading', 'Better Google rankings'],
  },
  {
    category: lang === 'pl' ? 'Łatwa edycja treści' : 'Easy content editing',
    skills: lang === 'pl'
      ? ['Panel do zmian tekstów', 'Bez wiedzy technicznej']
      : ['Simple content panel', 'No technical skills needed'],
  },
  {
    category: lang === 'pl' ? 'Niski koszt utrzymania' : 'Low running costs',
    skills: lang === 'pl'
      ? ['Tani hosting', 'Serwer od 395 zł/rok']
      : ['Affordable hosting', 'Server from 395 PLN/year'],
  },
];

export const getSkillTooltipKey = (skill: string): string => {
  const skillMap: Record<string, string> = {
    'Błyskawiczne ładowanie': 'skills.tooltip.speed',
    'Lepsze pozycje w Google': 'skills.tooltip.seo',
    'Instant page loading': 'skills.tooltip.speed',
    'Better Google rankings': 'skills.tooltip.seo',
    'Panel do zmian tekstów': 'skills.tooltip.cms',
    'Bez wiedzy technicznej': 'skills.tooltip.cms',
    'Simple content panel': 'skills.tooltip.cms',
    'No technical skills needed': 'skills.tooltip.cms',
    'Tani hosting': 'skills.tooltip.hosting',
    'Serwer od 395 zł/rok': 'skills.tooltip.server',
    'Affordable hosting': 'skills.tooltip.hosting',
    'Server from 395 PLN/year': 'skills.tooltip.server',
  };
  return skillMap[skill] || '';
};

export const getServices = (lang: Language): Service[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'business-site',
      title: isPl ? 'Strona wizytówka' : 'Business website',
      description: isPl
        ? 'Profesjonalna strona dla firmy lokalnej: usługi, kontakt, mapa. Więcej telefonów od klientów z Google.'
        : 'A professional site for your local business: services, contact, map. More customer calls from Google.',
      icon: 'globe',
    },
    {
      id: 'shop-booking',
      title: isPl ? 'Sklep i rezerwacje online' : 'Shop & online booking',
      description: isPl
        ? 'Sprzedaż produktów lub przyjmowanie zapytań o rezerwacje przez stronę, bez ciągłego odbierania telefonów.'
        : 'Sell products or accept booking inquiries through your site, without constantly answering the phone.',
      icon: 'shopping',
    },
    {
      id: 'audit',
      title: isPl ? 'Audyt i poprawa strony' : 'Site audit & improvements',
      description: isPl
        ? 'Masz już stronę, ale jest wolna lub niewidoczna w Google? Sprawdzę ją i zaproponuję konkretne poprawki.'
        : 'Already have a site that\'s slow or invisible on Google? I\'ll review it and suggest concrete improvements.',
      icon: 'search',
    },
    {
      id: 'cms',
      title: isPl ? 'CMS: edycja treści samodzielnie' : 'CMS: edit content yourself',
      description: isPl
        ? 'Zmieniasz ceny, oferty i teksty sam, bez dzwonienia do programisty za każdą drobnostkę.'
        : 'Update prices, offers and text yourself, without calling a developer for every small change.',
      icon: 'edit',
    },
  ];
};

export const getTestimonials = (lang: Language): Testimonial[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'anubis',
      quote: isPl
        ? 'Strona pokazuje nasze wycieczki przejrzyście. Klienci od razu widzą ofertę i dzwonią z konkretnymi pytaniami.'
        : 'The site presents our tours clearly. Customers immediately see the offers and call with specific questions.',
      role: isPl ? 'Właściciel biura podróży' : 'Travel agency owner',
      project: 'Anubis Travel',
    },
    {
      id: 'wygoda',
      quote: isPl
        ? 'Klienci przeglądają wyjazdy o każdej porze. Mniej telefonów z pytaniem „co macie w ofercie?", więcej konkretnych rezerwacji.'
        : 'Customers browse trips at any time. Fewer calls asking "what do you offer?", more concrete booking inquiries.',
      role: isPl ? 'Organizator wyjazdów narciarskich' : 'Ski trip organizer',
      project: 'Wygoda.ski',
    },
    {
      id: 'helen',
      quote: isPl
        ? 'Materiały promocyjne wyglądają spójnie i profesjonalnie. Lokalne oddziały mają gotowe grafiki do social mediów.'
        : 'Promotional materials look consistent and professional. Local branches have ready graphics for social media.',
      role: isPl ? 'Koordynator marketingu, szkoła językowa' : 'Marketing coordinator, language school',
      project: 'Helen Doron',
    },
  ];
};

export const getProcessSteps = (lang: Language): ProcessStep[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'consultation',
      title: isPl ? 'Bezpłatna rozmowa' : 'Free consultation',
      description: isPl
        ? 'Opowiesz o swojej firmie i celach. Jeśli masz stronę, zrobię darmowy audyt szybkości.'
        : 'Tell me about your business and goals. If you have a site, I\'ll run a free speed audit.',
    },
    {
      id: 'quote',
      title: isPl ? 'Wycena indywidualna' : 'Individual quote',
      description: isPl
        ? 'Przygotuję ofertę dopasowaną do Twoich potrzeb i budżetu, bez ukrytych kosztów.'
        : 'I\'ll prepare an offer tailored to your needs and budget, with no hidden costs.',
    },
    {
      id: 'build',
      title: isPl ? 'Projekt i wdrożenie' : 'Design & launch',
      description: isPl
        ? 'Tworzę stronę, pokazuję postępy i wdrażam po Twojej akceptacji.'
        : 'I build the site, show progress and launch after your approval.',
    },
    {
      id: 'support',
      title: isPl ? 'Wsparcie po starcie' : 'Post-launch support',
      description: isPl
        ? 'Pomagam z hostingiem, domeną i pierwszymi zmianami treści po uruchomieniu.'
        : 'I help with hosting, domain and initial content updates after launch.',
    },
  ];
};

export const getFaqItems = (lang: Language): FaqItem[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'timeline',
      question: isPl ? 'Ile trwa stworzenie strony?' : 'How long does it take to build a site?',
      answer: isPl
        ? 'Prosta wizytówka zwykle od 2 do 4 tygodni. Sklep, rezerwacje albo więcej podstron to dłuższy termin. Ustalamy go na początku, zanim zaczniemy.'
        : 'A simple business site usually takes 2 to 4 weeks. A shop, booking system or larger site takes longer. We agree on a timeline before we start.',
    },
    {
      id: 'price',
      question: isPl ? 'Ile kosztuje strona?' : 'How much does a website cost?',
      answer: isPl
        ? 'Każdy projekt wyceniam osobno po krótkiej rozmowie. Wizytówka, sklep i audyt istniejącej strony to różne zakresy pracy. Napisz lub zadzwoń, a dostaniesz konkretną ofertę bez zobowiązań.'
        : 'I quote each project individually after a short conversation. A business site, shop and site audit are different scopes. Get in touch and I\'ll send a clear offer with no obligation.',
    },
    {
      id: 'cms',
      question: isPl ? 'Czy sam będę mógł zmieniać teksty?' : 'Can I update the text myself?',
      answer: isPl
        ? 'Tak. Dodaję prosty panel do edycji treści. Sam zmieniasz teksty, ceny i zdjęcia, bez wołania programisty przy każdej drobnostce.'
        : 'Yes. I add a simple content panel. You update text, prices and photos yourself, without calling a developer for every small change.',
    },
    {
      id: 'hosting',
      question: isPl ? 'Co z hostingiem i domeną?' : 'What about hosting and domain?',
      answer: isPl
        ? 'Pomogę wybrać domenę i hosting oraz wszystko skonfiguruję. Przy prostej wizytówce roczny koszt utrzymania jest niski. Przy sklepie lub panelu do edycji treści serwer od 395 zł/rok.'
        : 'I\'ll help you choose a domain and hosting and set everything up. A simple business site has low annual running costs. A shop or content panel needs a server from 395 PLN/year.',
    },
    {
      id: 'existing-site',
      question: isPl ? 'Mam już stronę. Czy muszę robić nową?' : 'I already have a website. Do I need a new one?',
      answer: isPl
        ? 'Nie zawsze. Prześlij link w formularzu, a zrobię darmowy audyt szybkości. Powiem wprost, czy wystarczy poprawić obecną stronę, czy lepiej postawić nową.'
        : 'Not always. Send me the link in the contact form and I\'ll run a free speed audit. I\'ll tell you straight whether your current site is worth fixing or if a new one makes more sense.',
    },
  ];
};

export const getProjects = (lang: Language): Project[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'anubis',
      title: 'Anubis Travel',
      category: isPl ? 'Biuro podróży' : 'Travel Agency',
      description: isPl
        ? 'Strona biura podróży z aktualną ofertą wycieczek. Klienci od razu widzą dostępne wyjazdy i mogą się skontaktować.'
        : 'Travel agency website with up-to-date tour offers. Customers immediately see available trips and can get in touch.',
      features: isPl
        ? ['Czytelna prezentacja ofert', 'Wygodna na telefonie', 'Szybkie ładowanie', 'Łatwa aktualizacja wycieczek']
        : ['Clear offer presentation', 'Mobile-friendly', 'Fast loading', 'Easy trip updates'],
      status: 'Live',
      link: 'https://anubistravel.com/',
    },
    {
      id: 'wygoda-ski',
      title: 'Wygoda.ski',
      category: isPl ? 'Rezerwacje online' : 'Online Booking',
      description: isPl
        ? 'Strona rezerwacji wyjazdów narciarskich. Klienci przeglądają oferty i składają zapytania bez dzwonienia.'
        : 'Ski trip booking website. Customers browse offers and send inquiries without picking up the phone.',
      features: isPl
        ? ['Przejrzysta oferta dostępna 24/7', 'Wygodna na telefonie i komputerze', 'Szybkie ładowanie strony', 'Łatwa aktualizacja treści przez właściciela']
        : ['Clear offers available 24/7', 'Works great on phone and desktop', 'Fast page loading', 'Easy content updates for the owner'],
      status: 'Live',
      link: 'https://wygoda.ski',
    },
    {
      id: 'helen-doron',
      title: 'Helen Doron',
      category: isPl ? 'Marketing lokalny' : 'Local Marketing',
      description: isPl
        ? 'Materiały promocyjne i obecność w social media dla lokalnych oddziałów szkoły językowej.'
        : 'Promotional materials and social media presence for local language school branches.',
      features: isPl
        ? ['Spójny wizerunek marki', 'Materiały na social media', 'Profesjonalny wygląd materiałów']
        : ['Consistent brand image', 'Social media materials', 'Professional visual quality'],
      status: 'Active',
    },
    {
      id: 'deeplomai',
      title: 'Deeplomai',
      category: isPl ? 'Platforma online' : 'Online Platform',
      description: isPl
        ? 'Działająca platforma z płatnościami online i rosnącą bazą użytkowników. Realny biznes oparty na subskrypcjach.'
        : 'A live platform with online payments and a growing user base. A real subscription-based business.',
      features: isPl
        ? ['Stałe przychody z subskrypcji', 'Profesjonalny, zaufany wygląd', 'Szybkie i wygodne korzystanie', 'Gotowe do obsługi wielu użytkowników']
        : ['Recurring subscription revenue', 'Professional, trustworthy look', 'Fast and convenient to use', 'Built to handle many users'],
      status: 'Live',
      link: 'https://deeplomai.com/',
    },
    {
      id: 'gta5-hair',
      title: 'GTA5 Hairstyles DB',
      category: isPl ? 'Wyszukiwarka online' : 'Online Search',
      description: isPl
        ? 'Popularna strona z bazą fryzur dla tysięcy użytkowników. Szybkie wyszukiwanie bez zbędnego czekania.'
        : 'Popular hairstyle database used by thousands. Fast search without unnecessary waiting.',
      features: isPl
        ? ['400+ pozycji w przejrzystej bazie', 'Błyskawiczne wyszukiwanie', 'Działa na każdym urządzeniu', 'Stabilna i szybka strona']
        : ['400+ items in a clear database', 'Instant search', 'Works on any device', 'Stable and fast website'],
      status: 'Live',
      link: 'https://hairstyles-gta5.com',
    },
    {
      id: 'ark-tested',
      title: 'ARK Tested',
      category: isPl ? 'Projekt na zlecenie' : 'Client Project',
      description: isPl
        ? 'Strona na zlecenie z kalkulatorami i poradnikami. Kompleksowa baza wiedzy w jednym miejscu dla użytkowników.'
        : 'Client website with calculators and guides. A comprehensive knowledge base in one place for users.',
      features: isPl
        ? ['Zrealizowane na zlecenie klienta', 'Praktyczne narzędzia dla użytkowników', 'Przejrzysta struktura treści', 'Szybki dostęp do informacji']
        : ['Delivered for a client', 'Practical tools for users', 'Clear content structure', 'Quick access to information'],
      status: 'Live',
      link: 'https://arktested.com',
    },
  ];
};

export const getExperience = (lang: Language): Experience[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'bluevendo',
      role: isPl ? 'Frontend developer' : 'Frontend developer',
      company: 'Bluevendo',
      period: isPl ? '2022 - Obecnie' : '2022 - Present',
      description: isPl
        ? [
            'Rozwój szybkich stron i aplikacji webowych dla firm usługowych i branży turystycznej.',
            'Integracja systemów do łatwej edycji treści przez klientów (Directus, PayloadCMS).',
            'Optymalizacja wydajności i doświadczenia użytkownika dla platform rezerwacyjnych i e-commerce.',
          ]
        : [
            'Developing fast websites and web applications for service businesses and the travel industry.',
            'Integrating content management systems that clients can easily update themselves (Directus, PayloadCMS).',
            'Optimizing performance and user experience for booking platforms and e-commerce solutions.',
          ],
    },
    {
      id: 'deeplomai',
      role: isPl ? 'Założyciel & Full-Stack Developer' : 'Founder & Full-Stack Developer',
      company: 'Deeplomai',
      period: isPl ? '2024 - Obecnie' : '2024 - Present',
      description: isPl
        ? [
            'Budowa i monetyzacja narzędzia SaaS opartego na sztucznej inteligencji od zera.',
            'Specjalizacja w integracjach płatności Stripe oraz implementacji zaawansowanych workflow AI.',
            'Kompleksowe zarządzanie produktem od koncepcji do wdrożenia i utrzymania.',
          ]
        : [
            'Building and monetizing an AI-powered SaaS tool from the ground up.',
            'Specializing in Stripe payment integrations and advanced AI workflow implementation.',
            'End-to-end product management from concept to deployment and maintenance.',
          ],
    },
    {
      id: 'chaos-management',
      role: isPl ? 'Web Developer' : 'Web Developer',
      company: 'Chaos Management Paweł Kozubal',
      period: '2021 - 2022',
      description: isPl
        ? [
            'Projektowanie i rozwój bloga z informacjami oraz poradnikami dla graczy.',
            'Implementacja dedykowanych narzędzi wspierających społeczność graczy.',
            'Zapewnienie responsywnego interfejsu oraz optymalnej funkcjonalności.',
          ]
        : [
            'Designing and developing a blog with gaming information and player guides.',
            'Implementing dedicated tools to support the gaming community.',
            'Ensuring responsive interface and optimal functionality.',
          ],
    },
    {
      id: 'firos',
      role: isPl ? 'Founder & Lead Developer' : 'Founder & Lead Developer',
      company: 'FIROS',
      period: isPl ? '2018 - Obecnie' : '2018 - Present',
      description: isPl
        ? [
            'Tworzenie stron internetowych dla lokalnych firm usługowych.',
            'Skupienie na wynikach biznesowych: więcej klientów, lepsza widoczność w Google.',
            'Kompleksowa obsługa od projektu po wdrożenie i wsparcie.',
          ]
        : [
            'Building websites for local service businesses.',
            'Focus on business results: more customers, better Google visibility.',
            'Full service from design to deployment and ongoing support.',
          ],
    },
  ];
};

export const getWhyHire = (lang: Language) => {
  const isPl = lang === 'pl';
  return isPl
    ? [
        'Tworzę strony dla małych i średnich firm. Skupiam się na wynikach, które przynoszą Ci więcej klientów.',
        'Więcej telefonów i zapytań dzięki lepszej widoczności w Google.',
        'Taniej niż ciężki WordPress. Nowoczesne narzędzia, bez ukrytych kosztów i płatnych wtyczek.',
        'Strona wizytówka: tani hosting + domena. Sklep lub CMS: serwer od 395 zł/rok. Transparentne koszty.',
      ]
    : [
        'I build websites for small and medium businesses. I focus on results that bring you more customers.',
        'More calls and inquiries through better Google visibility.',
        'Cheaper than heavy WordPress. Modern tools, no hidden costs or paid plugins.',
        'Business card site: affordable hosting + domain. Shop or CMS: server from 395 PLN/year. Transparent costs.',
      ];
};
