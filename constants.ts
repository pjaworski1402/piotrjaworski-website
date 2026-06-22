import { Project, Experience, SkillGroup } from './types';
import { Language } from './context/LanguageContext';

export const getNavLinks = (t: (key: string) => string) => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.contact'), href: '#contact' },
  { name: t('nav.experience'), href: '#experience' },
];

export const getSkills = (lang: Language): SkillGroup[] => [
  {
    category: lang === 'pl' ? 'Szybkość i widoczność' : 'Speed & Visibility',
    skills: ['Next.js', 'React']
  },
  {
    category: lang === 'pl' ? 'Łatwa edycja treści' : 'Easy Content Editing',
    skills: ['Directus']
  },
  {
    category: lang === 'pl' ? 'Niski koszt utrzymania' : 'Low Maintenance Cost',
    skills: ['GitHub Pages', 'Mikrus']
  }
];

export const getProjects = (lang: Language): Project[] => {
  const isPl = lang === 'pl';
  return [
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
      link: 'https://deeplomai.com/'
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
      link: 'https://wygoda.ski'
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
      link: 'https://hairstyles-gta5.com'
    },
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
      link: 'https://anubistravel.com/'
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
      status: 'Active'
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
      link: 'https://arktested.com'
    }
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
            'Optymalizacja wydajności i doświadczenia użytkownika dla platform rezerwacyjnych i e-commerce.'
          ]
        : [
            'Developing fast websites and web applications for service businesses and the travel industry.',
            'Integrating content management systems that clients can easily update themselves (Directus, PayloadCMS).',
            'Optimizing performance and user experience for booking platforms and e-commerce solutions.'
          ]
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
            'Kompleksowe zarządzanie produktem od koncepcji do wdrożenia i utrzymania.'
          ]
        : [
            'Building and monetizing an AI-powered SaaS tool from the ground up.',
            'Specializing in Stripe payment integrations and advanced AI workflow implementation.',
            'End-to-end product management from concept to deployment and maintenance.'
          ]
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
            'Zapewnienie responsywnego interfejsu oraz optymalnej funkcjonalności.'
          ]
        : [
            'Designing and developing a blog with gaming information and player guides.',
            'Implementing dedicated tools to support the gaming community.',
            'Ensuring responsive interface and optimal functionality.'
          ]
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
            'Kompleksowa obsługa od projektu po wdrożenie i wsparcie.'
          ]
        : [
            'Building websites for local service businesses.',
            'Focus on business results: more customers, better Google visibility.',
            'Full service from design to deployment and ongoing support.'
          ]
    }
  ];
};

export const getWhyHire = (lang: Language) => {
  const isPl = lang === 'pl';
  return isPl
    ? [
        'Tworzę strony dla małych i średnich firm. Skupiam się na wynikach, które przynoszą Ci więcej klientów.',
        'Więcej telefonów i zapytań dzięki lepszej widoczności w Google.',
        'Taniej niż ciężki WordPress. Nowoczesne narzędzia, bez ukrytych kosztów i płatnych wtyczek.',
        'Strona wizytówka: tani hosting + domena. Sklep lub CMS: serwer od 395 zł/rok. Transparentne koszty.'
      ]
    : [
        'I build websites for small and medium businesses. I focus on results that bring you more customers.',
        'More calls and inquiries through better Google visibility.',
        'Cheaper than heavy WordPress. Modern tools, no hidden costs or paid plugins.',
        'Business card site: affordable hosting + domain. Shop or CMS: server from 395 PLN/year. Transparent costs.'
      ];
};
