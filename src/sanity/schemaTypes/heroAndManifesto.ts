import { defineField, defineType } from "sanity";

export const heroAndManifesto = defineType({
  name: "heroAndManifesto",
  title: "Hero, Expertises & Manifeste",
  type: "document",
  fieldsets: [
    { name: "hero", title: "1. En-tête & Image Principale (Hero)" },
    { name: "whatWeDo", title: "2. Section 'What we do' (Expertises)" },
    { name: "manifesto", title: "3. Bannière Citation (Manifeste)" },
  ],
  fields: [
    // --- HERO ---
    defineField({
      name: "studioName",
      title: "Nom du Studio",
      type: "string",
      fieldset: "hero",
      description: "Grand titre typographique (ex: YELLOW)",
      initialValue: "YELLOW",
    }),
    defineField({
      name: "tagline",
      title: "Sous-titre / Slogan",
      type: "string",
      fieldset: "hero",
      description: "Texte affiché sous le nom du studio",
      initialValue: "Content & Digital Agency Studio",
    }),
    defineField({
      name: "heroImage",
      title: "Grande image Hero",
      type: "image",
      fieldset: "hero",
      description: "Photographie principale pleine largeur affichée en haut du site",
      options: { hotspot: true },
    }),

    // --- WHAT WE DO ---
    defineField({
      name: "whatWeDoIntro",
      title: "Paragraphe d'introduction",
      type: "text",
      rows: 3,
      fieldset: "whatWeDo",
      description: "Court texte explicatif centré sous le label 'What we do'",
      initialValue:
        "Yellow réunit deux expertises complémentaires : la création de contenu qui capte l'attention, et la stratégie digitale qui la transforme en clients.",
    }),
    defineField({
      name: "celinaName",
      title: "Nom Carte 1",
      type: "string",
      fieldset: "whatWeDo",
      initialValue: "Célina",
    }),
    defineField({
      name: "celinaRole",
      title: "Intitulé Carte 1",
      type: "string",
      fieldset: "whatWeDo",
      initialValue: "Content & Art Direction",
    }),
    defineField({
      name: "celinaImage",
      title: "Photo Carte 1",
      type: "image",
      fieldset: "whatWeDo",
      description: "Photo d'ambiance ou de création pour Célina",
      options: { hotspot: true },
    }),
    defineField({
      name: "madeleineName",
      title: "Nom Carte 2",
      type: "string",
      fieldset: "whatWeDo",
      initialValue: "Madeleine",
    }),
    defineField({
      name: "madeleineRole",
      title: "Intitulé Carte 2",
      type: "string",
      fieldset: "whatWeDo",
      initialValue: "Strategy & Acquisition",
    }),
    defineField({
      name: "madeleineImage",
      title: "Photo Carte 2",
      type: "image",
      fieldset: "whatWeDo",
      description: "Photo d'ambiance ou de stratégie pour Madeleine",
      options: { hotspot: true },
    }),

    // --- MANIFESTO QUOTE ---
    defineField({
      name: "quoteText",
      title: "Citation / Punchline du manifeste",
      type: "string",
      fieldset: "manifesto",
      description: "Texte monumental affiché au centre de la bannière",
      initialValue: "La visibilité ne vend rien. Le ciblage, si.",
    }),
    defineField({
      name: "quoteBannerImage",
      title: "Image de fond de la bannière citation",
      type: "image",
      fieldset: "manifesto",
      description: "Image sombre de fond pour la citation",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "studioName",
      subtitle: "tagline",
      media: "heroImage",
    },
    prepare(selection) {
      return {
        title: selection.title || "YELLOW",
        subtitle: selection.subtitle || "Hero & Manifeste",
        media: selection.media,
      };
    },
  },
});
