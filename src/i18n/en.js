// English — source of truth.
// All UI text lives here. Components must never hardcode strings.
// fr.js and es.js mirror these keys exactly (empty strings fall back to English).

export default {
  meta: {
    title: 'Flora Fosset · design, technology, strategy',
    description:
      'Senior designer bridging design, technology, and strategy, from one-page sites to complex data platforms.',
  },
  nav: {
    services: 'services',
    work: 'projects',
    about: 'about me',
    contact: 'contact',
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
      { name: 'Apps & platforms', desc: 'Already have a site, app, or tool that isn’t working the way it should? From a usability audit to redesigning the whole thing, I find what’s tripping your users up and fix it.' },
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
      product: 'Apps & platforms',
      storytelling: 'Storytelling',
    },
    prev: 'Previous projects',
    next: 'Next projects',
    visit: 'Visit page',
    readMore: 'Read more',
    readLess: 'Read less',
    otherCategories: 'Other categories',
    seeMore: 'Load more',
    seeLess: 'Show less',
    // Per-card CTA labels; Work.astro's DESIGN map picks one by key.
    ctas: {
      website: 'Visit website',
      platform: 'Visit platform',
      read: 'Read',
      opensource: 'Open source',
    },
    projects: [
      {
        slug: 'cercle-histoire-forest',
        image: '/images/projects/cercle.jpg',
        alt: 'Antique engraving of the Abbey of Forest seen from above, with its church, walled gardens and surrounding houses',
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
        alt: 'Screenshot of the Minnow platform: a terrain map with a circular study area and labelled location markers',
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
        alt: 'Circular chart of what fruit and vegetables are in season, beside hand-drawn illustrations of a peach, a pepper and a carrot',
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
          { label: 'Shortlisted in the Information is Beautiful Awards in 2018', url: 'https://www.informationisbeautifulawards.com/showcase/2779-what-s-in-season' },
        ],
      },
      {
        slug: 'rosa-ebilling',
        image: '/images/projects/rosa-browser.gif',
        alt: 'Screenshot of the Rosa eBilling dashboard: an accounting table of patient invoices with an income summary above',
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
        alt: 'Promotional banner for the Brussels plant festival, over a sunlit glass-roofed pavilion',
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
        alt: 'Screenshot of the property investment simulator: a panel with asking price and gross-yield sliders beside a cashflow chart',
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
        alt: 'Illustration of a fish shouting through a megaphone beside a mock headline stamped “Clickbait!”',
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
        alt: 'Two older men sitting side by side by a window, one in a blue sweater and one in a yellow polo shirt',
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
        alt: 'Placeholder image for a project coming soon',
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
      {
        slug: 'dime-cuanto-cobras',
        image: '/images/projects/alquilarenelcentro.png',
        alt: 'A man lying on a stone ledge beneath two “for rent” estate-agent signs on a Madrid façade, with a bar chart overlaid',
        url: 'https://github.com/ffosset/dime-cuanto-cobras',
        category: 'landing',
        tag: 'Data journalism',
        subtitle: 'Self-initiated',
        title: 'Can you afford your rent?',
        year: '2017',
        did: 'Built at a Medialab-Prado data-journalism workshop in Madrid — an interactive map cross-referencing rents across the city against local salaries.',
        result: 'Visited +10K times the month it was launched. Later published by the Spanish newspaper El País.',
        keywords: ['Data investigation', 'Interactive map'],
        awards: [{ label: 'First prize of the data journalism contest of Madrid in 2017' }],
      },
    ],
  },
  about: {
    sectionTitle: 'about',
    headline: 'Product leader and expert in bridging design, <br class="ttl-br" />technology, and business strategy.',
    // Photo annotation callouts (desktop/tablet) + mobile summary chip.
    tags: { me: 'me', cat1: 'cat 1', cat2: 'cat 2', cat3: 'cat 3', cast: 'find the 3 cats in the picture' },
    photoCaption: 'Photographed at home in Brussels — with me and three cats.',
    // Three text blocks beside the photo.
    blocks: [
      {
        title: 'how I work',
        body: 'Based between Brussels and Madrid, I am fluent in English, French, and Spanish. I work remotely and can come to your office for ad-hoc meetings.',
      },
      {
        title: 'what I bring',
        body: 'Nine years across design, product, and strategy means you get one person who handles the whole thing, from the first idea to the finished site.',
      },
      {
        title: 'who I am',
        body: 'Curious and enthusiastic by nature, I like to take on projects working toward a better world: greener, fairer, more inclusive.',
      },
    ],
    pathTitle: 'journey',
    pathHeadline: 'More than one string to my bow',
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
    privacy: 'Privacy',
  },
  // Standalone privacy page (/privacy/). Paragraphs may carry inline <a> and
  // are rendered with set:html, mirroring the About section's pattern.
  privacy: {
    title: 'Privacy',
    updated: 'Last updated: 9 July 2026',
    back: '← Flora Fosset',
    intro:
      "This site doesn't track you. No cookies, no analytics, no advertising. Here's the full picture.",
    sections: [
      {
        heading: "Who's responsible",
        paras: [
          'This site is run by Flora Fosset. Any question about this page, or about your data: <a href="mailto:flora@fosset.co">flora@fosset.co</a>.',
        ],
      },
      {
        heading: 'What this site stores on your device',
        paras: [
          "One thing, and only if you ask for it. If you use the language switcher, that choice is saved in your browser's local storage so the site remembers it next time. It stays in your browser and is never sent anywhere. You can clear it at any time in your browser settings.",
          'Nothing else. No cookies are set.',
        ],
      },
      {
        heading: 'What happens when you visit',
        paras: [
          'This site is hosted on GitHub Pages, run by GitHub, Inc. (United States). Like any web host, GitHub receives your IP address in order to send you the page and keeps it in server logs for security. I have no access to those logs and no way to identify you from them.',
          "I use no analytics. I don't know who visits this site, which sections they read, or where they came from.",
        ],
      },
      {
        heading: 'When you write to me',
        paras: [
          'If you email <a href="mailto:flora@fosset.co">flora@fosset.co</a>, I keep your message and your address for as long as it takes to reply and to keep a record of our exchange. My email is hosted by Namecheap, Inc. (United States). The legal basis is my legitimate interest in answering people who contact me, and, where relevant, taking steps before a contract.',
        ],
      },
      {
        heading: 'Links to other sites',
        paras: [
          "The project links on this site lead to pages I don't control. Once you're there, their own rules apply.",
        ],
      },
      {
        heading: 'Your rights',
        paras: [
          'Under the GDPR you can ask to see, correct, or delete the data I hold about you, or object to my holding it. Since that data amounts to your emails and nothing else, these are usually short conversations. Write to <a href="mailto:flora@fosset.co">flora@fosset.co</a>.',
          'If you think I\'ve handled your data badly, you can complain to the Belgian Data Protection Authority: <a href="https://autoriteprotectiondonnees.be" target="_blank" rel="noopener">autoriteprotectiondonnees.be</a>.',
        ],
      },
    ],
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
