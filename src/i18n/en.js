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
    work: 'projects',
    about: 'about me',
    contact: "let's chat",
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
    statement: "You know your work. Let's make sure everyone else does too.",
    statementSub:
      "I'm a designer who helps small teams explain what they do. Then I build the website, platform, or story that does the explaining.",
    sectionTitle: 'What I do',
    problems: [
      {
        title: "You can't explain what you do.",
        body: 'Most people inside your business get it, but newcomers glaze over. I find the version that clicks, and build the website or story that delivers it.',
      },
      {
        title: 'Your website is confusing clients.',
        body: 'Too many menus, too much text, no clear next step. I redesign so the right action is obvious.',
      },
      {
        title: 'Your idea is buried in a mess of data.',
        body: 'Spreadsheets, half-built tools, a process only you understand. I turn it into something your team and your customers can actually use.',
      },
    ],
    howIWorkTitle: 'How I work',
    howIWorkBody:
      'Most teams hire a designer, a writer, and a developer, then try to stitch them together. I see the whole thing at once: the story, the design, and the working product, because my path ran through journalism, data, design, and building companies.',
  },
  work: {
    sectionTitle: 'selected projects',
    intro:
      'Local heritage, seasonal food, sustainable gardening, urban data, property finance, media — I have designed across wildly different sectors. The subject keeps changing; the job stays the same: making tangled things clear.',
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
      'I started out as a data journalist, turning datasets into gripping stories. That curiosity about how to make complicated things land turned into a career: information design, then product design, then product management. Today I freelance from Brussels and Madrid, and I co-run a startup called Minnow that puts environmental risk into the systems companies use to make real decisions.',
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
    sectionTitle: 'Tell me about your project',
    subhead:
      "Send a few lines about you or your company: what it is, who it's for, what's stuck. I read every message and reply within a few days.",
    emailLabel: 'Email',
    email: 'flora@fosset.co',
    linkedinLabel: 'LinkedIn',
    linkedin: 'https://www.linkedin.com/in/florafosset/',
  },
  footer: {
    rights: '© Flora Fosset',
    location: 'Brussels · Madrid',
  },
};
