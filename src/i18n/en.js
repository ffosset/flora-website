// English — source of truth.
// All UI text lives here. Components must never hardcode strings.
// fr.js and es.js mirror these keys exactly (empty strings fall back to English).

export default {
  meta: {
    title: 'Flora Fosset — Designer',
    description:
      'Designer and strategist who turns complicated ideas — products, platforms, stories — into something people instantly understand.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    contact: "Let's talk",
  },
  hero: {
    nameWord: 'flora',
    roleWord: 'designer',
    // Rotating role word: cycles design → investigation → storytelling → product → …
    roles: ['design', 'investigation', 'storytelling', 'product'],
    scroll: 'Scroll',
    // Kept for back-compat with any old references.
    headline: 'Clarity, designed.',
    subhead:
      "I turn complicated ideas — a product, a platform, a story you can't quite explain — into something people instantly get. Then I build it.",
    cta: "Let's talk",
  },
  whatIDo: {
    statement: 'I help companies turn design chaos into clarity',
    statementSub:
      'sharper products, systems that scale, and teams that actually know what "good" looks like.',
    sectionTitle: 'What I do',
    problems: [
      {
        title: "You can't explain what you do",
        body: 'I find the clear version and build the site or story that tells it.',
      },
      {
        title: 'Your website or platform confuses people',
        body: 'I redesign it so it is obvious, and people act.',
      },
      {
        title: 'You have data or an idea but it is a mess',
        body: 'I shape it into something people can actually use and decide with.',
      },
    ],
    howIWorkTitle: 'How I work',
    howIWorkBody:
      'Most teams hire a designer, a writer, and a developer, then try to stitch them together. I see the whole thing at once — the story, the design, and the working product — because my path ran through journalism, data, design, and building companies. One mind, the full picture.',
  },
  work: {
    sectionTitle: 'projects that left a mark',
    intro:
      'Websites, platforms, data tools, stories — different surfaces, same job: taking something tangled and making it clear.',
    counterSeparator: '/',
    filters: {
      all: 'All',
      websites: 'Websites',
      platforms: 'Platforms',
      data: 'Data tools',
      storytelling: 'Storytelling',
    },
    projects: [
      {
        slug: 'cercle-histoire-forest',
        title: 'cercle d’histoire de forest — local history platform',
        image: '',
        category: ['websites', 'storytelling'],
        problem:
          'A local history association with no real web presence and scattered, analog communication.',
        did: 'Built a landing page with a publishing database for events and articles, revamped their Facebook, wrote their communication guidelines, and set up a shared cloud workspace.',
        outcome: 'Now found on Google every day and publishing entirely on their own.',
      },
      {
        slug: 'soy-de-temporada',
        title: 'soy de temporada — seasonal produce platform',
        image: '',
        category: ['platforms', 'data'],
        problem:
          'No simple way to know which fruits and vegetables are actually in season right now.',
        did: 'Designed and launched a platform that shows what is in season at a glance.',
        outcome: 'Still used by hundreds of people every day.',
      },
      {
        slug: 'oyas-belgique',
        title: 'oyas belgique & les jardins de l’hippodrome — brand & social',
        image: '',
        category: ['storytelling'],
        problem:
          'A sustainable-gardening brand and its garden-market event needed to grow online.',
        did: 'Run their social media and all communication around the September garden market.',
        outcome: '+20% followers in four months.',
      },
      {
        slug: 'neighborhood-map',
        title: 'interactive neighborhood map — geolocated insights',
        image: '',
        category: ['data', 'platforms'],
        problem:
          'Dense demographic and financial data made it hard to compare neighborhoods.',
        did: 'Designed and researched an interactive map to explore geolocated insights.',
        outcome: '',
      },
      {
        slug: 'investment-simulator',
        title: 'investment simulator — property decisions made simple',
        image: '',
        category: ['data', 'platforms'],
        problem: 'Deciding whether a property purchase fits your needs is intimidating.',
        did: 'Turned the analysis into a simulator anyone can test in minutes.',
        outcome: '',
      },
      {
        slug: 'free-the-fish',
        title: 'free the fish — a clickbait-defusing plug-in',
        image: '',
        category: ['storytelling'],
        problem: 'Clickbait headlines waste everyone’s attention.',
        did: 'Designed a browser plug-in that defuses clickbait.',
        outcome: '',
      },
    ],
  },
  about: {
    sectionTitle: 'about me',
    bio:
      'I make complicated things clear. Over 8+ years I have moved from data journalism to information design to product design and product management — and now co-founding a company. That path is why I can see a project whole: the story, the design, and the working product.',
    experienceTitle: 'experience.',
    experience: [
      {
        role: 'Co-founder',
        org: 'Minnow',
        note: 'Building tools that put nature-related risk into real business decisions.',
        when: '2024 — present',
      },
      {
        role: 'Product Designer',
        org: 'Rosa',
        note: '',
        when: '2022 — 2024',
      },
      {
        role: 'Product Designer · Data journalist',
        org: 'urbanData Analytics',
        note: '',
        when: '2017 — 2021',
      },
    ],
    valuesTitle: 'value driven',
    values:
      'I choose work that supports a greener, fairer, more inclusive world. If that is the kind of thing you are building, we will get along.',
  },
  contact: {
    sectionTitle: 'tell me what you are trying to make clear',
    emailLabel: 'Email',
    email: 'hello@fosset.co',
    linkedinLabel: 'LinkedIn',
    linkedin: 'https://www.linkedin.com/in/florafosset/',
  },
  footer: {
    rights: '© Flora Fosset',
    location: 'Brussels · Madrid',
  },
};
