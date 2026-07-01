// English — source of truth.
// All UI text lives here. Components must never hardcode strings.
// fr.js and es.js mirror these keys exactly (empty strings fall back to English).

export default {
  meta: {
    title: 'Flora Fosset · Product & Design',
    description:
      'Senior product designer bridging design, tech, and strategy. From landing pages to complex data platforms.',
  },
  nav: {
    services: 'services',
    work: 'projects',
    about: 'about me',
    contact: "let's chat",
  },
  hero: {
    nameWord: 'flora',
    roleWord: 'designer',
    // Rotating role word: cycles user experience → user research → product management → storytelling → product design → …
    roles: ['user experience', 'user research', 'product management', 'storytelling', 'product design'],
    scroll: 'Scroll',
    // Right-aligned subtitle beside the portrait.
    subhead: "let's chat",
    // Bottom-right tagline, justified right.
    tagline: 'I bring your web projects to life',
    // Kept for back-compat with any old references.
    headline: 'Clarity, designed.',
    cta: "Let's talk",
  },
  services: {
    // Small orange eyebrow above the heading.
    sectionTitle: 'services',
    // Large bold statement under the eyebrow (the section's lead line).
    sectionSubtitle: 'I turn ideas into online finished projects',
    viewProjects: 'View projects',
    items: [
      { name: 'Landing pages', desc: 'From a simple one-pager to a full CMS, we decide together what fits. Then I handle both the design and the build.' },
      { name: 'Product design', desc: 'My strength is designing complex flows for enterprise users and collaborating with tech teams.' },
      { name: 'Storytelling', desc: 'Telling stories is what I love. You bring the need and we shape it together (social content, a blog, videos...)' },
    ],
  },
  whatIDo: {
    statement: "You know your work. Let's make sure everyone else does too.",
    statementSub:
      "I'm a designer who helps small teams explain what they do. Then I build the website, platform, or story that does the explaining.",
    // Deliverables that light up one after another around the statement.
    deliverables: ['Landing page', 'Slide deck', 'Data viz', 'UX audit', 'Roadmap', 'Prototype', 'Rebranding'],
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
    sectionTitle: 'projects',
    sectionSubtitle: 'A decade working across every kind of web project, from one-pagers to data platforms.',
    intro:
      'I have designed across wildly different sectors. The subject keeps changing; the job stays the same: making tangled things clear.',
    counterSeparator: '/',
    filters: {
      landing: 'Landing page',
      product: 'Product design',
      storytelling: 'Storytelling',
    },
    prev: 'Previous projects',
    next: 'Next projects',
    visit: 'Visit page',
    readMore: 'Read more',
    otherCategories: 'Other categories',
    seeMore: 'Load more',
    seeLess: 'Show less',
    // Per-card CTA labels; Work.astro's DESIGN map picks one by key.
    ctas: {
      website: 'Visit website',
      platform: 'Visit platform',
      read: 'Read',
      code: 'View code',
    },
    projects: [
      {
        slug: 'cercle-histoire-forest',
        image: '/images/projects/cercle.jpg',
        url: 'https://www.histoiredeforest.be/',
        category: 'landing',
        tag: 'Culture & Heritage',
        subtitle: "Cercle d'Histoire de Forest",
        title: 'Give a long time association its rightful presence on the web',
        year: '2025',
        did: 'Built a full Webflow platform with landing page, databases, and a member program around their magazine. Revamped their Facebook page and moved their files to a shared cloud workspace.',
        result: 'Now found online 40+ times a month.',
        keywords: ['CMS', 'Accessibility', 'Branding'],
        awards: [],
      },
      {
        slug: 'minnow-collective',
        image: '/images/projects/minnow.png',
        url: 'https://www.minnowcollective.com/',
        category: 'product',
        tag: 'Nature Tech',
        subtitle: 'Minnow Collective',
        title: 'Help companies visualize their exposure to nature risk',
        year: '2024–present',
        did: 'Co-founded the company and currently leading product strategy and design. We’re turning ecological data into tools that fit how procurement and sourcing teams really work.',
        result: 'Bootstrapping a complex data platform for enterprise users.',
        keywords: ['Enterprise UX/UI', 'Strategy'],
        awards: [],
      },
      {
        slug: 'soy-de-temporada',
        image: '/images/projects/soydetemporada.png',
        url: 'https://soydetemporada.es/',
        category: 'landing',
        tag: 'Food & Sustainability',
        subtitle: 'Self-initiated',
        title: "Find what's in season in a couple clicks",
        year: '2016–2018',
        did: 'Designed and launched a platform that shows which fruits and vegetables are in season. A personal project that became an everyday tool for many people.',
        result: '500 daily users, six years after launch.',
        keywords: ['Research', 'Accessibility'],
        awards: [
          { label: 'Shortlisted in the Information is Beautiful Awards', url: 'https://www.informationisbeautifulawards.com/showcase/2779-what-s-in-season' },
          { label: "Winner of EJC's Contest, March 2018" },
        ],
      },
      {
        slug: 'rosa-ebilling',
        image: '/images/projects/rosa-browser.gif',
        url: 'https://pro.rosa.be/en/solutions/rosa-ebilling',
        category: 'product',
        tag: 'Healthtech',
        subtitle: 'Rosa ASBL',
        title: "Designing through Belgium's medical billing maze",
        year: '2022–2024',
        did: 'Design lead on Rosa eBilling (eAttest & eFact software) integrated with the Belgian mutuality system INAMI. Turned a compliance maze into a flow doctors run in a couple of minutes per consultation.',
        result: 'Used daily by 3 partner platforms for ophthalmologists',
        keywords: ['Enterprise UX/UI', 'Integrations'],
        awards: [],
      },
      {
        slug: 'oyas-belgique',
        image: '/images/projects/oyas-drohme.png',
        url: 'https://www.oyas-belgique.be/',
        category: 'storytelling',
        tag: 'sustainability',
        subtitle: 'Oyas Belgique & Drohme Park',
        title: 'Grow the audience for a new sustainable garden fair in Brussels',
        year: '2026',
        did: 'Run social media and lead all communications around their September garden market — voice, calendar, visuals, event comms.',
        result: 'Targeting 5,000 visitors in its first year (September 2026).',
        keywords: ['PR', 'Social media', 'Branding'],
        awards: [],
      },
      {
        slug: 'investment-simulator',
        image: '/images/projects/simulator.png',
        url: 'https://www.accumin.com/es/intelligence/productos/pulse-asset',
        category: 'product',
        tag: 'Real estate',
        subtitle: 'urbanData Analytics',
        title: 'Simulate a property investment before you buy',
        year: '2020',
        did: 'Ran user research then designed a simulator that turns purchase price, rent and mortgage into a clear read on a deal. Led the sprints, functional acceptance, and the rollout to users.',
        result: 'Design still in use 6 years and 2 ownership changes later.',
        keywords: ['Research', 'Design system', 'PM'],
        awards: [],
      },
      {
        slug: 'free-the-fish',
        image: '/images/projects/freethefish.png',
        url: 'https://github.com/CodingCarlos/freethefish-chrome',
        category: 'product',
        tag: 'Journalism',
        subtitle: 'Self-initiated',
        title: 'Protect readers from clickbait and bot-written articles',
        year: '2019',
        did: 'A solo UX / product-design master’s project — an “adblock” for clickbait — later co-built into an open-source browser-extension beta with a developer team at Google Campus.',
        result: 'Later developed by a team at Google Campus Madrid.',
        keywords: ['Open-source', 'Integrations'],
        awards: [],
      },
      {
        slug: 'couleur-du-peche',
        image: '/images/projects/couleur-du-peche.jpg',
        url: '/work/couleur-du-peche', // INTERNAL link — opens dedicated page on this site
        category: 'storytelling',
        tag: 'Slow journalism',
        subtitle: '24h01 · revue belge',
        title: "Investigate the hard story of kids born during Belgium's colonial past",
        year: '2016',
        did: 'Wrote and designed a long-form investigation on the métis children of Belgian colonization. Four interwoven testimonies, an interactive colonial-timeline map, and archival photographs.',
        result:
          'The most-read piece on 24h01 website by a wide margin, until the magazine closed.',
        keywords: ['Investigation', 'Slow journalism'],
        awards: [],
      },
      {
        slug: 'rosen',
        image: '/images/projects/placeholder.svg', // TODO: real project image
        url: '',
        category: 'landing',
        tag: 'Coming soon',
        subtitle: 'New project',
        title: 'A new landing page in the works',
        year: '',
        did: '',
        result: 'In progress — coming soon.',
        awards: [],
      },
    ],
  },
  about: {
    sectionTitle: 'about',
    headline: 'Product leader and expert in bridging design, technology, and business strategy.',
    facts: [
      '9+ years experience as a designer',
      'Comfortable leading and collaborating across teams',
      'Fluent in English, French, and Spanish',
      'Splitting time between Brussels and Madrid',
    ],
    howIWorkTitle: 'how I work',
    howIWorkBody:
      'Most teams hire a designer, a writer, and a developer, then stitch them together. My path ran through all of it, so I work across the seams.',
    valuesTitle: 'who I work with',
    values:
      "I take on work that supports a greener, fairer, more inclusive world. I'm enthusiastic and naturally curious.",
    pathTitle: 'work path',
    // Career timeline, animated in order. `current` marks the latest step.
    path: [
      {
        label: 'data journalism',
        year: '2015',
        sub: 'Trained as a journalist at <a href="https://www.ihecs.be/" target="_blank" rel="noopener noreferrer">IHECS</a>, then led data projects at <a href="https://www.medialab-matadero.es/personal/flora-fosset" target="_blank" rel="noopener noreferrer">Medialab-Prado</a> (ES) bridging investigation and data. Published along the way in <a href="https://www.wilfriedmag.be/auteur/flora-fosset/" target="_blank" rel="noopener noreferrer">Wilfried</a> magazine (BE).',
      },
      {
        label: 'design',
        year: '2017',
        sub: 'Discovered product design and lean methodologies. Switched from blog writing to the product team at <a href="https://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer">urbanData Analytics</a>, and started my designer path.',
      },
      {
        label: 'product management',
        year: '2019',
        sub: "Owned products end-to-end at <a href='https://www.urbandataanalytics.com/' target='_blank' rel='noopener noreferrer'>urbanData</a> and <a href='https://rosa.be' target='_blank' rel='noopener noreferrer'>ROSA</a>: research, roadmap, design, QA.",
      },
      {
        label: 'business owner',
        year: '2024',
        current: true,
        sub: 'Co-founded <a href="https://www.minnowcollective.com/" target="_blank" rel="noopener noreferrer">Minnow Collective</a> and launched my own design consultancy.',
      },
      {
        label: 'a project with you, maybe?',
        year: 'TODAY',
      },
    ],
  },
  contact: {
    sectionTitle: "Let's chat",
    subhead: 'Send me a few lines about you or your company.',
    note: 'I read every message and reply within a few days.',
    emailLabel: 'Email',
    email: 'flora@fosset.co',
    linkedinLabel: 'LinkedIn',
    linkedin: 'https://www.linkedin.com/in/florafosset/',
  },
  footer: {
    rights: '© Flora Fosset',
  },
  // Screen-reader-only labels (aria-label / sr-only text).
  a11y: {
    mainNav: 'Main',
    homeLink: 'Flora Fosset — home',
    openMenu: 'Open menu',
    getInTouch: 'Get in touch',
    aboutMe: 'About me',
    newTab: 'opens in new tab',
  },
};
