export interface SiteSettingsData {
  title: string;
  description: string;
  contactTitle?: string;
  email: string;
  instagramUrl: string;
  linkedinUrl: string;
  cityAndYear: string;
  enableGrayscaleFilter?: boolean;
}

export interface HeroAndManifestoData {
  studioName: string;
  tagline: string;
  heroImageUrl: string;
  whatWeDoIntro: string;
  celinaName?: string;
  celinaRole: string;
  celinaImageUrl: string;
  madeleineName?: string;
  madeleineRole: string;
  madeleineImageUrl: string;
  quoteText: string;
  quoteBannerImageUrl: string;
}

export interface OfferData {
  _id: string;
  order: number;
  number: string;
  name: string;
  isHighlighted?: boolean;
  ctaLabel: string;
  features: string[];
}

export interface TalkData {
  _id: string;
  order: number;
  title: string;
  category?: string;
  speakers?: string;
  duration?: string;
  synopsis: string;
  keyPoints?: string[];
  imageUrl: string;
}

export interface TeamMemberData {
  _id: string;
  order: number;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export interface PageData {
  settings: SiteSettingsData;
  hero: HeroAndManifestoData;
  offers: OfferData[];
  talks: TalkData[];
  team: TeamMemberData[];
}

export const fallbackData: PageData = {
  settings: {
    title: "Yellow — Studio de contenu & stratégie digitale à Paris",
    description:
      "Yellow est un studio parisien spécialisé en production de contenu, direction artistique et stratégie digitale (SEO, Google Ads) pour les marques mode, beauté et lifestyle.",
    contactTitle: "Let's talk.",
    email: "hello@yellow.agency",
    instagramUrl: "https://www.instagram.com",
    linkedinUrl: "https://www.linkedin.com",
    cityAndYear: "Paris — 2026",
  },
  hero: {
    studioName: "YELLOW",
    tagline: "Content & Digital Agency Studio",
    heroImageUrl: "https://picsum.photos/seed/traitt-hero/1800/1400?grayscale",
    whatWeDoIntro:
      "Yellow réunit deux expertises complémentaires : la création de contenu qui capte l'attention, et la stratégie digitale qui la transforme en clients.",
    celinaName: "Célina",
    celinaRole: "Content & Art Direction",
    celinaImageUrl: "https://picsum.photos/seed/traitt-content-img/900/1000?grayscale",
    madeleineName: "Madeleine",
    madeleineRole: "Strategy & Acquisition",
    madeleineImageUrl: "https://picsum.photos/seed/traitt-strategy-img/900/1000?grayscale",
    quoteText: "La visibilité ne vend rien. Le ciblage, si.",
    quoteBannerImageUrl: "https://picsum.photos/seed/traitt-quote/1800/1200?grayscale",
  },
  offers: [
    {
      _id: "offer-1",
      order: 1,
      number: "01",
      name: "Essentiel",
      isHighlighted: false,
      ctaLabel: "Demander un devis",
      features: [
        "Réseaux sociaux, 1 plateforme",
        "Calendrier mensuel",
        "SEO/Ads en option",
      ],
    },
    {
      _id: "offer-2",
      order: 2,
      number: "02",
      name: "Croissance",
      isHighlighted: true,
      ctaLabel: "Demander un devis",
      features: [
        "Multi-formats, 2-3 plateformes",
        "Reels & shootings",
        "SEO ou Ads inclus",
      ],
    },
    {
      _id: "offer-3",
      order: 3,
      number: "03",
      name: "Signature",
      isHighlighted: false,
      ctaLabel: "Demander un devis",
      features: [
        "Production complète",
        "SEO + Ads combinés",
        "Pilotage business",
      ],
    },
  ],
  talks: [
    {
      _id: "talk-1",
      order: 1,
      title: "Comprendre les codes de la Génération Z",
      category: "Culture & Nouveaux Usages",
      speakers: "Célina Bailly",
      duration: "45 min + 15 min Q&A",
      synopsis:
        "Une immersion sans filtre dans les dynamiques visuelles et sociologiques qui animent la Génération Z. De TikTok aux esthétiques de niche, nous décryptons leur langage, leur rejet viscéral du marketing traditionnel et leurs réflexes d'achat. Une intervention concrète pour comprendre comment capter leur attention sans trahir votre identité de marque.",
      keyPoints: [
        "Déconstruction des mythes marketing sur la Gen Z",
        "Esthétiques brutes, humour absurde et formats verticaux",
        "L'authenticité radicale comme condition sine qua non de conversion",
        "Exemples concrets de marques qui réussissent ou échouent",
      ],
      imageUrl: "https://picsum.photos/seed/tt1/700/900?grayscale",
    },
    {
      _id: "talk-2",
      order: 2,
      title: "Megatrends — anticipation culturelle",
      category: "Prospective & Stratégie",
      speakers: "Célina Bailly & Madeleine Haddad",
      duration: "1h + échange",
      synopsis:
        "Comment anticiper les mutations culturelles et sociétales à un horizon de 2 à 5 ans ? Cette conférence dévoile les méthodologies issues des bureaux de tendance et du planning stratégique pour identifier les signaux faibles, filtrer le bruit ambiant et transformer les intuitions en leviers de croissance commerciale mesurables.",
      keyPoints: [
        "Cartographie et hiérarchisation des signaux faibles",
        "L'impact des crises écologiques et économiques sur les désirs de consommation",
        "Passer de l'observation passive à la feuille de route actionnable",
        "Études de cas : mode, beauté et lifestyle",
      ],
      imageUrl: "https://picsum.photos/seed/tt2/700/900?grayscale",
    },
    {
      _id: "talk-3",
      order: 3,
      title: "Ce que la Gen Z change",
      category: "Management & Société",
      speakers: "Madeleine Haddad",
      duration: "45 min + débat",
      synopsis:
        "Au-delà de leur comportement de consommateurs, la Gen Z bouscule en profondeur le monde du travail, le rapport à l'autorité et la quête de sens. Une session stratégique qui analyse comment cette génération redéfinit les modèles organisationnels, la communication interne et la fidélisation des talents créatifs.",
      keyPoints: [
        "Refonte des attentes professionnelles : flexibilité, transparence, impact",
        "La fin du management vertical face aux digital natives",
        "Fidéliser et engager les créateurs de demain",
        "Aligner promesse employeur et réalité quotidienne",
      ],
      imageUrl: "https://picsum.photos/seed/tt3/700/900?grayscale",
    },
    {
      _id: "talk-4",
      order: 4,
      title: "Sur mesure, en entreprise",
      category: "Workshop & Masterclass",
      speakers: "L'équipe Yellow",
      duration: "Demi-journée ou journée complète",
      synopsis:
        "Un format interactif taillé sur-mesure pour vos équipes de direction créative, marketing ou produit. Nous analysons spécifiquement votre secteur, auditons votre présence actuelle et animons des ateliers d'idéation pour concevoir ensemble les concepts de demain.",
      keyPoints: [
        "Audit préalable et benchmark sur votre secteur d'activité",
        "Atelier collaboratif d'idéation et de direction artistique",
        "Définition d'un plan d'activation de contenu à 6 mois",
        "Livrable complet remis à l'issue de la masterclass",
      ],
      imageUrl: "https://picsum.photos/seed/tt4/700/900?grayscale",
    },
  ],
  team: [
    {
      _id: "team-1",
      order: 1,
      name: "Célina Bailly",
      role: "Content & Art Direction",
      bio: "15 ans de direction créative mode. Ex-Head of Design chez Promostyl. A dirigé plus de 20 trend books et accompagné des marques comme Asics, Umbro et Etam.",
      photoUrl: "https://picsum.photos/seed/traitt-celina/900/1200",
    },
    {
      _id: "team-2",
      order: 2,
      name: "Madeleine Haddad",
      role: "Strategy & Acquisition",
      bio: "20 ans de marketing, dont 10 en stratégie numérique. Spécialiste du marketing générationnel depuis 2015.",
      photoUrl: "https://picsum.photos/seed/traitt-madeleine/900/1200",
    },
  ],
};
