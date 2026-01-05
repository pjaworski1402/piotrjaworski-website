import { Project, Experience, SkillGroup } from './types';
import { Language } from './context/LanguageContext';

export const getNavLinks = (t: (key: string) => string) => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.contact'), href: '#contact' },
];

export const getSkills = (lang: Language): SkillGroup[] => [
  {
    category: lang === 'pl' ? "AI Engineering & Automatyzacja" : "AI Engineering & Automation",
    skills: ["OpenAI API", "Google Gemini", "Custom AI Agents", "RAG", "Prompt Engineering", "n8n", "Webhooks"]
  },
  {
    category: lang === 'pl' ? "Modern Frontend & UI/UX" : "Modern Frontend & UI/UX",
    skills: ["React", "Next.js 14+", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"]
  },
  {
    category: lang === 'pl' ? "Backend, CMS & Dane" : "Backend, CMS & Data",
    skills: ["Node.js", "PostgreSQL", "PayloadCMS", "Strapi", "Stripe Integration", "Serverless Functions"]
  },
  {
    category: lang === 'pl' ? "DevOps & Narzędzia" : "DevOps & Tools",
    skills: ["Vercel", "Git & GitHub"]
  }
];

export const getProjects = (lang: Language): Project[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'deeplomai',
      title: 'Deeplomai',
      category: 'SaaS',
      description: isPl 
        ? 'Platforma AI wspierająca pisanie prac dyplomowych. Gotowy produkt SaaS z regularnymi przychodami i bazą użytkowników.'
        : 'AI-Powered academic writing assistance platform targeting Polish universities. Production-ready SaaS with recurring revenue.',
      features: isPl 
        ? ['Generowanie struktury prac z Gemini', 'Sugestie AI w czasie rzeczywistym', 'Automatyczne cytowania (APA/MLA)', 'Płatności subskrypcyjne Stripe']
        : ['Gemini content generation for thesis structure', 'Real-time AI suggestions & style verification', 'Automated citations (APA/MLA) & DOI lookup', 'Stripe subscription monetization'],
      techStack: ['Next.js', 'TypeScript', 'Google Gemini', 'Stripe', 'Vercel'],
      status: 'Live',
      isMonetized: true,
      link: 'https://deeplomai.com/'
    },
    {
      id: 'wygoda-ski',
      title: 'Wygoda.ski',
      category: 'E-commerce',
      description: isPl
        ? 'Frontend platformy rezerwacyjnej wyjazdów narciarskich zintegrowany ze Strapi CMS.'
        : 'Frontend for ski trip booking platform integrated with Strapi CMS.',
      features: isPl
        ? ['Frontend w Next.js', 'Integracja ze Strapi CMS', 'Responsywny design', 'Optymalizacja wydajności']
        : ['Next.js frontend', 'Strapi CMS integration', 'Responsive design', 'Performance optimization'],
      techStack: ['Next.js', 'Strapi', 'Performance Optimization'],
      status: 'Live',
      link: 'https://wygoda.ski'
    },
    {
      id: 'gta5-hair',
      title: 'GTA5 Hairstyles DB',
      category: 'Reference DB',
      description: isPl
        ? 'Interaktywny katalog dla społeczności graczy ze zoptymalizowanym wyszukiwaniem.'
        : 'Interactive catalog for the gaming community with optimized search and filtering.',
      features: isPl
        ? ['400+ fryzur w bazie', 'Wyszukiwanie z MeiliSearch', 'Filtrowanie i sortowanie', 'Optymalizacja statyczna']
        : ['400+ searchable hairstyle entries', 'MeiliSearch integration', 'Filterable search & sorting', 'Static content delivery optimization'],
      techStack: ['Next.js', 'MeiliSearch', 'Responsive Design'],
      status: 'Live',
      link: 'https://hairstyles-gta5.com'
    },
    {
      id: 'anubis',
      title: 'Anubis Travel',
      category: 'Booking Platform',
      description: isPl
        ? 'Frontend strony biura podróży z dynamicznym wyświetlaniem ofert.'
        : 'Frontend for travel agency website with dynamic tour package displays.',
      features: isPl
        ? ['Frontend w Next.js', 'Integracja z API', 'Nowoczesne UX', 'Responsywny design']
        : ['Next.js frontend', 'API integration', 'Modern UX patterns', 'Responsive design'],
      techStack: ['Next.js', 'Strapi', 'Responsive Design'],
      status: 'Live',
      link: 'https://anubistravel.com/'
    },
    {
      id: 'helen-doron',
      title: 'Helen Doron',
      category: 'Marketing',
      description: isPl
        ? 'Strategia social media i tworzenie treści wizualnych dla oddziałów Grodzisk Mazowiecki i Pruszków.'
        : 'Social media strategy and visual content creation for Grodzisk Mazowiecki & Pruszkow branches.',
      features: isPl
        ? ['Spójny branding wizualny', 'Strategia social media', 'Materiały promocyjne']
        : ['Cohesive visual branding', 'Social media strategy', 'Promotional material design'],
      techStack: ['Adobe Suite', 'Graphic Design'],
      status: 'Active'
    },
    {
      id: 'ark-tested',
      title: 'ARK Tested',
      category: 'Reference DB',
      description: isPl
        ? 'Baza wiedzy o mechanikach gier survivalowych z kalkulatorami surowcowymi. Projekt na zlecenie - statyczna generacja z plików Markdown bez CMS.'
        : 'Knowledge base for survival game mechanics with resource calculators. Client project - static generation from Markdown files without CMS.',
      features: isPl
        ? ['Kalkulatory surowcowe', 'Statyczna generacja z MD', 'Złożona architektura informacji', 'Projekt na zlecenie']
        : ['Resource calculators', 'Static generation from MD', 'Complex information architecture', 'Client project'],
      techStack: ['Gatsby', 'React', 'Markdown', 'Static Generation'],
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
      role: isPl ? 'Full-Stack Developer' : 'Full-Stack Developer',
      company: 'Bluevendo',
      period: isPl ? '2022 - Obecnie' : '2022 - Present',
      description: isPl
        ? [
            'Rozwój dynamicznych aplikacji webowych w Next.js, w tym wygoda.ski, Anubis Travel oraz OnHolidays.',
            'Implementacja integracji z systemami CMS: PayloadCMS oraz Strapi.',
            'Optymalizacja wydajności i doświadczenia użytkownika dla platform rezerwacyjnych i e-commerce.'
          ]
        : [
            'Developing dynamic web applications in Next.js, including wygoda.ski, Anubis Travel, and OnHolidays.',
            'Implementing CMS integrations with PayloadCMS and Strapi.',
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
      id: 'freelance',
      role: isPl ? 'Freelance Web Developer' : 'Freelance Web Developer',
      company: isPl ? 'Freelance' : 'Freelance',
      period: isPl ? '2018 - Obecnie' : '2018 - Present',
      description: isPl
        ? [
            'Realizacja różnorodnych projektów internetowych, w tym platform e-commerce oraz portfolio.',
            'Dostarczanie nowoczesnych, funkcjonalnych i responsywnych rozwiązań dostosowanych do indywidualnych potrzeb klientów.',
            'Kompleksowa obsługa projektów od koncepcji do wdrożenia.'
          ]
        : [
            'Delivering diverse web projects, including e-commerce platforms and portfolios.',
            'Providing modern, functional, and responsive solutions tailored to individual client needs.',
            'End-to-end project management from concept to deployment.'
          ]
    }
  ];
};

export const getWhyHire = (lang: Language) => {
  const isPl = lang === 'pl';
  return isPl
    ? [
        "Strapi zamiast WordPress - szybsze, bezpieczniejsze i łatwiejsze w zarządzaniu",
        "Nowoczesne strony dostosowane do Twoich potrzeb biznesowych",
        "Kompleksowa obsługa - od projektu do wdrożenia i wsparcia",
        "Dostępny przez Useme - bezpieczna współpraca na zlecenie"
      ]
    : [
        "Strapi instead of WordPress - faster, more secure, easier to manage",
        "Modern websites tailored to your business needs",
        "Full service - from design to deployment and support",
        "Available through Useme - secure freelance collaboration"
      ];
};