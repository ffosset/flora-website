// Copy for the Fête des plantes project page, one entry per locale. Layout and
// styles live in src/components/work/FeteDesPlantes.astro. The press titles
// are the outlets' real (French) headlines, so they stay in French everywhere.

// Shared, language-independent data.
export const shared = {
  instagramUrl: 'https://www.instagram.com/fetedesplantesbxl/',
  websiteUrl: 'https://www.fetedesplantes.be',
  press: [
    { name: 'RTBF', image: 'rtbf.jpg', date: '2026-09-05', format: 'article', title: 'À Bruxelles, une nouvelle fête des plantes veut reconnecter les citadins à la nature', featured: true, url: 'https://www.rtbf.be/article/a-bruxelles-une-nouvelle-fete-des-plantes-veut-reconnecter-les-citadins-a-la-nature-11772180' },
    { name: 'So Soir', image: 'sosoir.jpg', date: '2026-09-03', format: 'article', title: '1 000 m² de jardinage : la toute première foire aux plantes débarque à Bruxelles', featured: true, url: 'https://sosoir.lesoir.be/768814/article/2026-09-03/1-000-m2-de-jardinage-la-toute-premiere-foire-aux-plantes-debarque-bruxelles' },
    { name: 'Le Bonbon', image: 'le-bonbon.jpg', date: '2026-08-31', format: 'article', title: 'La première grande fête des plantes débarque à Bruxelles ce week-end... et c’est gratuit !', featured: true, url: 'https://www.lebonbon.be/bruxelles/loisirs/premiere-grande-fete-plantes-bruxelles-gratuit/' },
    { name: 'BX1', image: 'bx1.jpg', date: '2026-09-30', format: 'tv', title: 'Les Jardins de l’HippoDrohme, 1ère édition', url: 'https://youtu.be/nSaFr2Hc_Ko' },
    { name: 'BXFM', image: 'bxfm.jpg', date: '2026-09-25', format: 'radio', title: 'La Fête des plantes à l’hypodrome de boisfort 26 et 27-09', url: 'https://open.spotify.com/episode/6mrJmU7kOdV7mA8d3pIw5f' },
    { name: 'Bruxelles Secrète', image: 'bruxelles-secrete.jpg', date: '2026-09-04', format: 'article', title: 'Plantes rares, conseils et découvertes : ce nouveau rendez-vous bruxellois arrive juste à temps pour ceux qui veulent verdir leur intérieur', url: 'https://bruxellessecrete.com/fete-des-plantes-hippodrome-de-boitsfort/' },
    { name: 'Bruxelles Today', image: 'bruxelles-today.jpg', format: 'article', title: 'La première grande fête des plantes de Bruxelles', url: 'https://www.bruxellestoday.be/que-faire/la-premiere-grande-fete-des-plantes-de-bruxelles-26-27-sept-15192854.html' },
  ],
  // Quote text is per locale (copy.quotes), in this same order.
  testimonials: [
    { name: 'Isa', company: 'La Pazcualisa', url: 'https://www.lapazcualisa.com/' },
    { name: 'Cléo', company: 'Compostez-moi !', url: 'https://compostez-moi.be/' },
    { name: 'Julie', company: 'MOOS Deco Design', url: 'https://moos-decodesign.com/' },
  ],
};

export const copy = {
  fr: {
    title: 'La fête des plantes de Bruxelles · Flora Fosset',
    shareImageAlt: 'Affiche de la fête des plantes de Bruxelles, les 26 et 27 septembre à l’Hippodrome de Boitsfort',
    description: '4 600 visiteurs et 16 retombées presse pour une première édition au budget pub à trois chiffres : relations presse, identité visuelle et coordination.',
    heroTitle: 'La fête des plantes de Bruxelles',
    heroMeta: 'Oyas Belgique & DROHME Park · septembre 2026',
    back: 'Tous les projets',
    imageLabel: 'Image',
    images: {
      hero: { alt: 'Vue d’en haut de la fête des plantes de Bruxelles : les stands des exposants et les visiteurs dans la cour ensoleillée de l’Hippodrome de Boitsfort', label: 'Photo de l’événement avec du monde' },
      poster: { alt: 'Affiche A3 de la fête des plantes de Bruxelles : le titre en lettres manuscrites vert foncé au-dessus d’une illustration aquarelle de l’Hippodrome de Boitsfort, et les dates du 26 et 27 septembre 2026 sur un bandeau jaune', label: 'Affiche A3' },
      exhibitors: { alt: 'Photo de groupe des exposants et de l’équipe sur la pelouse de l’Hippodrome, avec le message « Merci pour cette fantastique première édition »', label: 'Photo des exposants' },
      team: { alt: 'Marie et Flora côte à côte entre les stands, dans le t-shirt de l’événement', label: 'Photo de Marie et moi' },
    },
    posts: [
      { alt: 'Post Instagram « On s’occupe de vous du petit dej à l’apéro » : une mosaïque de plats et de boissons servis sur place', label: 'Post Instagram' },
      { alt: 'Post Instagram présentant l’exposante Still we glow : de vraies fleurs transformées à la main en bijoux', label: 'Post Instagram' },
      { alt: 'Post Instagram présentant l’exposant Pollen Atelier : fleurs séchées, bouquets et compositions sur mesure', label: 'Post Instagram' },
    ],
    stats: [
      { value: '4 600', label: 'visiteurs' },
      { value: '48', label: 'exposants' },
      { value: '16', label: 'retombées presse' },
      { value: '4 mois', label: 'de préparation' },
    ],
    facts: {
      event: 'Événement',
      website: 'Site web',
      role: 'Mon rôle',
      roleValue: 'Relations presse, direction artistique et identité visuelle, réseaux sociaux, relation exposants, coordination sur place',
      when: 'Quand, où',
      whenValue: '26–27 septembre 2026, Hippodrome de Boitsfort',
    },
    constraint: {
      eyebrow: 'Contrainte',
      title: 'Faire venir du monde sans acheter l’attention',
      body: 'Une première édition part de zéro : pas de public, pas de notoriété, et un format que beaucoup connaissent déjà ailleurs en Europe. Il fallait donner une raison de venir à des gens qui n’avaient jamais entendu parler de l’événement. Le budget pub tenait en trois chiffres ; acheter de la visibilité n’était pas une option.',
    },
    decision: {
      eyebrow: 'Décision',
      title: 'La presse plutôt que la pub',
      body: 'J’ai construit un dossier de presse complet pour que les journalistes aient tout sous la main sans avoir à nous relancer. Puis j’ai proposé à chaque média un angle taillé pour son public, plutôt que d’envoyer le même communiqué à tout le monde. Le résultat : plusieurs couvertures radio et papier avant l’événement, puis la télévision locale sur place.',
    },
    formats: {
      article: { label: 'article', action: 'Lire' },
      radio: { label: 'radio', action: 'Écouter' },
      tv: { label: 'télévision', action: 'Regarder' },
    },
    identity: {
      eyebrow: 'Image de marque',
      title: 'Une identité à contre-courant',
      body: 'Les fêtes des plantes portent en général la même identité : ambiance calme, couleurs douces, codes du jardin. Pour notre première édition, il fallait être repérée au premier coup d’œil. J’ai créé une identité vive et dynamique, qui s’est aussi ressentie sur place lors de l’événement.',
      instagram: 'Voir le compte Instagram',
    },
    team: {
      eyebrow: 'Équipe',
      title: 'Arrivée en renfort, partie co-organisatrice',
      body: 'Marie a lancé et porté le projet. Je l’ai rejointe pour gérer les réseaux sociaux. Au fil des semaines, j’ai pris en charge la presse, l’identité visuelle, la relation avec les exposants, puis la coordination sur place pendant le week-end. À l’arrivée, nous coordonnions l’événement à deux.',
    },
    quotes: [
      '« J’en ai fait des marchés mais celui-ci restera le meilleur ! »',
      '« Ça faisait longtemps qu’on n’avait pas participé à un évènement aussi bien organisé ! »',
      '« Merci Marie et Flora pour l’organisation juste parfaite. »',
    ],
    next: {
      eyebrow: 'Et ensuite',
      body: 'Oyas et DROHME m’ont demandé de revenir pour la deuxième édition, qui se fera en 2027.',
    },
  },

  en: {
    title: 'The Brussels plant festival · Flora Fosset',
    shareImageAlt: 'Poster for the Brussels plant festival, 26 and 27 September at the Boitsfort Hippodrome',
    description: '4,600 visitors and 16 press mentions for a first edition with a three-figure ad budget: press relations, visual identity and coordination.',
    heroTitle: 'The Brussels plant festival',
    heroMeta: 'Oyas Belgique & DROHME Park · September 2026',
    back: 'All projects',
    imageLabel: 'Image',
    images: {
      hero: { alt: 'Aerial view of the Brussels plant festival: exhibitor stalls and visitors in the sunny courtyard of the Hippodrome de Boitsfort', label: 'Photo of the event with crowds' },
      poster: { alt: 'A3 poster for the Brussels plant festival: the title in dark green hand lettering above a watercolour illustration of the Hippodrome de Boitsfort, with the dates 26 and 27 September 2026 on a yellow band', label: 'A3 poster' },
      exhibitors: { alt: 'Group photo of the exhibitors and the team on the Hippodrome lawn, with the message “Thank you for this fantastic first edition”', label: 'Photo of the exhibitors' },
      team: { alt: 'Marie and Flora side by side between the stalls, wearing the event T-shirt', label: 'Photo of Marie and me' },
    },
    posts: [
      { alt: 'Instagram post “We’ve got you covered from breakfast to drinks”: a mosaic of dishes and drinks served on site', label: 'Instagram post' },
      { alt: 'Instagram post introducing the exhibitor Still we glow: real flowers handcrafted into jewellery', label: 'Instagram post' },
      { alt: 'Instagram post introducing the exhibitor Pollen Atelier: dried flowers, bouquets and custom arrangements', label: 'Instagram post' },
    ],
    stats: [
      { value: '4,600', label: 'visitors' },
      { value: '48', label: 'exhibitors' },
      { value: '16', label: 'press mentions' },
      { value: '4', label: 'months of preparation' },
    ],
    facts: {
      event: 'Event',
      website: 'Website',
      role: 'My role',
      roleValue: 'Press relations, art direction and visual identity, social media, exhibitor relations, on-site coordination',
      when: 'When, where',
      whenValue: '26–27 September 2026, Hippodrome de Boitsfort',
    },
    constraint: {
      eyebrow: 'Constraint',
      title: 'Drawing a crowd without buying attention',
      body: 'A first edition starts from zero: no audience, no reputation, and a format many people already know from elsewhere in Europe. We had to give people who had never heard of the event a reason to come. The ad budget ran to three figures; buying visibility was not an option.',
    },
    decision: {
      eyebrow: 'Decision',
      title: 'Press over ads',
      body: 'I built a complete press kit so journalists had everything to hand without having to chase us. Then I pitched each outlet an angle tailored to its audience, rather than sending everyone the same press release. The result: several radio and print features before the event, then local TV on site.',
    },
    formats: {
      article: { label: 'article', action: 'Read' },
      radio: { label: 'radio', action: 'Listen' },
      tv: { label: 'TV', action: 'Watch' },
    },
    identity: {
      eyebrow: 'Brand identity',
      title: 'An identity against the grain',
      body: 'Plant festivals usually share the same look: a calm mood, soft colours, garden codes. For our first edition, we needed to be spotted at a glance. I created a bright, energetic identity that carried through to the event itself.',
      instagram: 'See the Instagram account',
    },
    team: {
      eyebrow: 'Team',
      title: 'Came in to help, left as co-organiser',
      body: 'Marie launched and led the project. I joined her to run social media. Over the weeks, I took on the press, the visual identity and exhibitor relations, then on-site coordination over the weekend. By the end, the two of us were running the event together.',
    },
    quotes: [
      '“I’ve done plenty of markets, but this one will stay the best!”',
      '“It had been a long time since we took part in such a well-organised event!”',
      '“Thank you Marie and Flora for such perfect organisation.”',
    ],
    next: {
      eyebrow: 'What’s next',
      body: 'Oyas and DROHME asked me to come back for the second edition, in 2027.',
    },
  },

  es: {
    title: 'La fiesta de las plantas de Bruselas · Flora Fosset',
    shareImageAlt: 'Cartel de la fiesta de las plantas de Bruselas, el 26 y 27 de septiembre en el Hipódromo de Boitsfort',
    description: '4.600 visitantes y 16 apariciones en prensa para una primera edición con un presupuesto publicitario de tres cifras: relaciones con la prensa, identidad visual y coordinación.',
    heroTitle: 'La fiesta de las plantas de Bruselas',
    heroMeta: 'Oyas Belgique & DROHME Park · septiembre 2026',
    back: 'Todos los proyectos',
    imageLabel: 'Imagen',
    images: {
      hero: { alt: 'Vista aérea de la fiesta de las plantas de Bruselas: los puestos de los expositores y los visitantes en el patio soleado del Hippodrome de Boitsfort', label: 'Foto del evento con gente' },
      poster: { alt: 'Cartel A3 de la fiesta de las plantas de Bruselas: el título en letras manuscritas verde oscuro sobre una ilustración en acuarela del Hippodrome de Boitsfort, con las fechas 26 y 27 de septiembre de 2026 en una franja amarilla', label: 'Cartel A3' },
      exhibitors: { alt: 'Foto de grupo de los expositores y el equipo en el césped del Hippodrome, con el mensaje «Gracias por esta fantástica primera edición»', label: 'Foto de los expositores' },
      team: { alt: 'Marie y Flora una al lado de la otra entre los puestos, con la camiseta del evento', label: 'Foto de Marie y yo' },
    },
    posts: [
      { alt: 'Post de Instagram «Te cuidamos del desayuno al aperitivo»: un mosaico de platos y bebidas servidos en el evento', label: 'Post de Instagram' },
      { alt: 'Post de Instagram que presenta a la expositora Still we glow: flores de verdad convertidas a mano en joyas', label: 'Post de Instagram' },
      { alt: 'Post de Instagram que presenta al expositor Pollen Atelier: flores secas, ramos y composiciones a medida', label: 'Post de Instagram' },
    ],
    stats: [
      { value: '4.600', label: 'visitantes' },
      { value: '48', label: 'expositores' },
      { value: '16', label: 'apariciones en prensa' },
      { value: '4 meses', label: 'de preparación' },
    ],
    facts: {
      event: 'Evento',
      website: 'Sitio web',
      role: 'Mi papel',
      roleValue: 'Relaciones con la prensa, dirección de arte e identidad visual, redes sociales, relación con los expositores, coordinación in situ',
      when: 'Cuándo, dónde',
      whenValue: '26–27 de septiembre de 2026, Hippodrome de Boitsfort',
    },
    constraint: {
      eyebrow: 'Restricción',
      title: 'Atraer público sin comprar atención',
      body: 'Una primera edición parte de cero: sin público, sin notoriedad y con un formato que mucha gente ya conoce de otros países de Europa. Había que dar un motivo para venir a gente que nunca había oído hablar del evento. El presupuesto publicitario era de tres cifras; comprar visibilidad no era una opción.',
    },
    decision: {
      eyebrow: 'Decisión',
      title: 'Prensa en lugar de publicidad',
      body: 'Preparé un dossier de prensa completo para que los periodistas tuvieran todo a mano sin tener que pedirnos nada. Después propuse a cada medio un enfoque pensado para su público, en vez de enviar el mismo comunicado a todos. El resultado: varias apariciones en radio y prensa escrita antes del evento, y luego la televisión local en el propio evento.',
    },
    formats: {
      article: { label: 'artículo', action: 'Leer' },
      radio: { label: 'radio', action: 'Escuchar' },
      tv: { label: 'televisión', action: 'Ver' },
    },
    identity: {
      eyebrow: 'Imagen de marca',
      title: 'Una identidad a contracorriente',
      body: 'Las fiestas de las plantas suelen compartir la misma identidad: ambiente tranquilo, colores suaves, códigos de jardín. Para nuestra primera edición, teníamos que llamar la atención a primera vista. Creé una identidad viva y dinámica, que también se notó en el propio evento.',
      instagram: 'Ver la cuenta de Instagram',
    },
    team: {
      eyebrow: 'Equipo',
      title: 'Llegué como refuerzo, acabé como coorganizadora',
      body: 'Marie lanzó y lideró el proyecto. Me uní para gestionar las redes sociales. Con las semanas, me hice cargo de la prensa, la identidad visual, la relación con los expositores y, después, la coordinación in situ durante el fin de semana. Al final, coordinábamos el evento entre las dos.',
    },
    quotes: [
      '«He hecho muchos mercados, ¡pero este será siempre el mejor!»',
      '«¡Hacía tiempo que no participábamos en un evento tan bien organizado!»',
      '«Gracias, Marie y Flora, por una organización sencillamente perfecta.»',
    ],
    next: {
      eyebrow: 'Y después',
      body: 'Oyas y DROHME me pidieron volver para la segunda edición, que será en 2027.',
    },
  },
};
