// English — source of truth.
// All UI text lives here. Components must never hardcode strings.
// fr.js and es.js mirror these keys exactly (empty strings fall back to English).

export default {
  meta: {
    title: 'Flora Fosset · Designer',
    description:
      'Designer and strategist who turns complicated ideas — products, platforms, stories — into something people instantly understand.',
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
    // Rotating role word: cycles product design → user experience → user research → storytelling → graphic design → …
    roles: ['product design', 'user experience', 'user research', 'storytelling', 'graphic design'],
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
    sectionSubtitle: 'I help you realize your online projects and support you with the message and platform choice',
    viewProjects: 'View projects',
    items: [
      { name: 'Landing pages', desc: 'for organisations and people who need a presence online' },
      { name: 'Product design', desc: 'for product teams that need senior design and UX expertise' },
      { name: 'Storytelling', desc: 'for companies who need to create visual content' },
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
    sectionSubtitle: '9 years of experience led me from simple landing pages to complex data platforms',
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
    seeMore: 'See more',
    seeLess: 'See less',
    // Per-card CTA labels; Work.astro's DESIGN map picks one by key.
    ctas: {
      website: 'Visit website',
      platform: 'Visit platform',
      read: 'Read',
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
        year: '2025–2026',
        did: 'Built a full Webflow platform with landing page, databases, and a member program around their magazine. Revamped their Facebook page and moved their files to a shared cloud workspace.',
        result: 'They are searched and found online +40 times per month.',
        keywords: ['Webflow platform', 'Databases', 'Online publications'],
        awards: [],
      },
      {
        slug: 'minnow-collective',
        image: '/images/projects/minnow-browser.png',
        url: 'https://www.minnowcollective.com/',
        category: 'product',
        tag: 'Nature Tech',
        subtitle: 'Minnow Collective',
        title: 'Allow companies to visualize their nature exposure',
        year: '2024–present',
        did: 'Co-founded the company and currently leading product strategy and design. We’re turning ecological data into tools that fit how procurement and sourcing teams really work.',
        result: 'Cofounded a platform to help companies map supply chains based on ecological context.',
        keywords: ['Product strategy', 'Advanced B2B users', 'Complex data'],
        awards: [],
      },
      {
        slug: 'soy-de-temporada',
        image: '/images/projects/soy-de-temporada.jpg',
        url: 'https://soydetemporada.es/',
        category: 'landing',
        tag: 'Food & Sustainability',
        subtitle: 'Soy de temporada',
        title: 'Find out what products are in season in two clicks',
        year: '2016–2018',
        did: 'Designed and launched a platform that shows which fruits and vegetables are in season. A personal project that became an everyday tool for many people.',
        result: '+500 daily users, six years after the platform launch.',
        keywords: ['Platform design', 'Seasonal data', 'Personal project'],
        awards: [], // pending — Flora to fill with 2 Spanish + 2 international award names + years
      },
      {
        slug: 'rosa-ebilling',
        image: '/images/projects/rosa-browser.gif',
        url: 'https://pro.rosa.be/en/solutions/rosa-ebilling',
        category: 'product',
        tag: 'Healthtech',
        subtitle: 'Rosa ASBL',
        title: 'Designing through the maze of medical billing in Belgium',
        year: '2022–2024',
        did: 'Design lead on Rosa eBilling (eAttest & eFact software) integrated with the Belgian mutuality system INAMI. Turned a compliance maze into a flow doctors run in a couple of minutes per consultation.',
        result: 'Used daily by 3 partner softwares for ophtalmologists.',
        keywords: ['Design lead', 'eHealth billing', 'INAMI integration'],
        awards: [],
      },
      {
        slug: 'oyas-belgique',
        image: '/images/projects/oyas.jpg',
        url: 'https://www.oyas-belgique.be/',
        category: 'storytelling',
        tag: 'sustainability',
        subtitle: 'Oyas Belgique & Drohme Park',
        title: 'Grow audience for a new sustainable garden fair in Brussels',
        did: 'Run social media and lead all communications around their September garden market — voice, calendar, visuals, event comms.',
        result: '+20% followers in four months, in a voice that sounds like them.',
        keywords: ['Social media', 'Event comms', 'Brand voice'],
        awards: [],
      },
      {
        slug: 'neighborhood-map',
        image: '/images/projects/neighborhood-map.jpg',
        url: 'https://www.urbandataanalytics.com/pulse',
        category: 'product',
        tag: 'Fintech',
        subtitle: 'urbanData Analytics',
        title: 'Will this property pay off?',
        year: '2018–2019',
        did: 'Ran user research then designed a simulator that turns purchase price, rent and mortgage into a clear read on a deal. Led the sprints, functional acceptance, and the rollout to users.',
        result: 'Used by +10 Real Estate corporations like Liberbank, ReMax, Centry 21…',
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
        keywords: ['Long-form writing', 'Interactive map', 'Archival design'],
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
      '+9 years experience as a designer',
      'Comfortable with leadership, collaboration',
      'Perfectly fluent in English, French, and Spanish',
      'Based between Brussels & Madrid',
    ],
    howIWorkTitle: 'how I work',
    howIWorkBody:
      'Most teams hire a designer, a writer, and a developer, then stitch them together. My path ran through all of it, so I work across the seams.',
    valuesTitle: 'value driven',
    values:
      "I take on work that supports a greener, fairer, more inclusive world. I'm enthusiastic, naturally curious, and an active listener.",
    pathTitle: 'my path',
    // Career timeline, animated in order. `current` marks the latest step.
    path: [
      {
        label: 'data journalism',
        year: '2015',
        sub: 'Trained as a journalist at <a href="https://www.ihecs.be/" target="_blank" rel="noopener noreferrer">IHECS</a>, then led data projects at <a href="https://www.medialab-matadero.es/personal/flora-fosset" target="_blank" rel="noopener noreferrer">Medialab-Prado</a> (ES) bridging investigation and numbers. Published along the way in <a href="https://www.wilfriedmag.be/auteur/flora-fosset/" target="_blank" rel="noopener noreferrer">Wilfried</a> magazine (BE).',
      },
      {
        label: 'design',
        year: '2017',
        sub: 'At <a href="https://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer">urbanData Analytics</a>, design stopped being decoration and became a system: branding, layouts, and the visual standards that made dense analytics digestible.',
      },
      {
        label: 'product management',
        year: '2019',
        sub: "Owned products end-to-end at <a href='https://www.urbandataanalytics.com/' target='_blank' rel='noopener noreferrer'>urbanData</a> and <a href='https://rosa.be' target='_blank' rel='noopener noreferrer'>ROSA</a>: research, roadmap, and trade-offs between what users want and what's buildable.",
      },
      {
        label: 'business owner',
        year: '2024',
        current: true,
        sub: 'Co-founded <a href="https://www.minnowcollective.com/" target="_blank" rel="noopener noreferrer">Minnow Collective</a>, a nature-tech startup. Took it from zero to leading a small team.',
      },
    ],
  },
  contact: {
    sectionTitle: "Let's chat",
    subhead: 'Send me a few lines about you or your company',
    note: 'I read every message and reply within a few days.',
    emailLabel: 'Email',
    email: 'flora@fosset.co',
    linkedinLabel: 'LinkedIn',
    linkedin: 'https://www.linkedin.com/in/florafosset/',
  },
  footer: {
    rights: '© Flora Fosset',
    location: 'Belgian freelancer',
  },
  // Screen-reader-only labels (aria-label / sr-only text).
  a11y: {
    mainNav: 'Main',
    homeLink: 'Flora Fosset — home',
    openMenu: 'Open menu',
    getInTouch: 'Get in touch',
    aboutMe: 'About me',
    filterProjects: 'Filter projects',
    showProjects: 'Show {name} projects',
    newTab: 'opens in new tab',
  },
};
