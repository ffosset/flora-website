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
    // Rotating role word: cycles product design → user experience → research → storytelling → …
    roles: ['product design', 'user experience', 'research', 'storytelling'],
    scroll: 'Scroll',
    // Right-aligned subtitle beside the portrait.
    subhead: 'designer and strategist for work that deserves to be understood.',
    // Kept for back-compat with any old references.
    headline: 'Clarity, designed.',
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
      'I have designed across wildly different sectors. The subject keeps changing; the job stays the same: making tangled things clear.',
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
        image: '/images/projects/cercle.jpg',
        url: 'https://www.histoiredeforest.be/',
        category: ['websites', 'storytelling'],
        tag: 'cultural',
        subtitle: "Cercle d'Histoire de Forest",
        title: 'An association without a digital home.',
        did: 'Built a full Webflow platform — landing page, events listings, a publications archive, and a member program around their tri-annual Forestum revue. Revamped their Facebook, wrote a short communication guide, and moved their files to a shared cloud workspace.',
        result:
          'A scattered analog association is now a real digital presence — found on Google every day, and publishing entirely on their own.',
        awards: [],
      },
      {
        slug: 'minnow-collective',
        image: '/images/projects/minnow.jpg',
        url: 'https://www.minnowcollective.com/',
        category: ['websites', 'platforms', 'data'],
        tag: 'sustainability',
        subtitle: 'Minnow Collective',
        title: 'Bring nature risk into how big companies actually decide.',
        did: 'Co-founded the company. Lead product strategy and design — turning ecological data into tools that fit how procurement and sourcing teams really work, mapping value chains to ecosystem context, and translating outputs into TNFD, SBTN, CSRD, and SFDR reporting.',
        result: '', // pending — Flora to confirm
        awards: [],
      },
      {
        slug: 'soy-de-temporada',
        image: '/images/projects/soy-de-temporada.jpg',
        url: 'https://soydetemporada.es/',
        category: ['platforms', 'data', 'storytelling'],
        tag: 'sustainability',
        subtitle: 'Soy de temporada',
        title: "No simple way to know what's in season.",
        did: 'Designed and launched a platform that shows which fruits and vegetables are in season, wherever you are. A personal project that turned into an everyday tool.',
        result: 'Used by hundreds of people every day, years after launch.',
        awards: [], // pending — Flora to fill with 2 Spanish + 2 international award names + years
      },
      {
        slug: 'rosa-ebilling',
        image: '/images/projects/rosa.jpg',
        url: 'https://pro.rosa.be/en/solutions/rosa-ebilling',
        category: ['platforms', 'data'],
        tag: 'health',
        subtitle: 'Rosa',
        title: 'Belgian specialists need a faster, simpler way to bill.',
        did: 'Led design on Rosa eBilling — a platform that handles electronic care attestations (eAttest) and invoicing (eFact), integrates with the Belgian mutuality system, and is distributed through three partner softwares. Turned a compliance maze into a flow doctors can run in a couple of minutes per consultation.',
        result: '', // pending — Flora to confirm
        awards: [],
      },
      {
        slug: 'oyas-belgique',
        image: '/images/projects/oyas.jpg',
        url: 'https://www.oyas-belgique.be/',
        category: ['storytelling'],
        tag: 'sustainability',
        subtitle: "Oyas Belgique & Les Jardins de l'Hippodrome",
        title: 'Grow a sustainable garden brand into its annual event.',
        did: 'Run social media and lead all communications around their September garden market — voice, calendar, visuals, event comms.',
        result: '+20% followers in four months, in a voice that sounds like them.',
        awards: [],
      },
      {
        slug: 'neighborhood-map',
        image: '/images/projects/neighborhood-map.jpg',
        url: '', // no public URL — card should render unlinked
        category: ['data', 'platforms'],
        tag: 'data',
        subtitle: 'urbanData Analytics',
        title: 'Dense neighborhood data, no easy way to compare.',
        did: 'Led research and design on an interactive map — geolocated demographic and financial insights, browsable rather than buried in spreadsheets.',
        result: '', // pending — Flora to confirm
        awards: [],
      },
      {
        slug: 'couleur-du-peche',
        image: '/images/projects/couleur-du-peche.jpg',
        url: '/work/couleur-du-peche', // INTERNAL link — opens dedicated page on this site
        category: ['storytelling'],
        tag: 'journalism',
        subtitle: '24h01 — revue belge (2016)',
        title: "Une histoire enfouie qui méritait d'être vue.",
        did: 'Wrote and designed a long-form investigation on the métis children of Belgian colonization — forced removal from their African mothers, life inside the church-run institutions, the 1959 displacement to Belgium. Four interwoven testimonies, an interactive map of the colonial timeline, and archival photographs.',
        result:
          "The most-read piece on 24h01 by a wide margin, until the magazine closed. Published three years before Belgium's formal apology for this chapter of its history.",
        awards: [],
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
    location: 'Freelancer between Brussels and Madrid',
  },
};
