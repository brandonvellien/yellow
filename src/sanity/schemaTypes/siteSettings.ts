import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuration Générale & Réseaux",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre du site (SEO)",
      type: "string",
      description: "Apparaît dans l'onglet du navigateur et les moteurs de recherche",
      initialValue: "Yellow — Studio de contenu & stratégie digitale à Paris",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description SEO & Partage (Open Graph)",
      type: "text",
      rows: 3,
      description: "Description affichée sur Google et lors du partage de liens",
      initialValue:
        "Yellow est un studio parisien spécialisé en production de contenu, direction artistique et stratégie digitale (SEO, Google Ads) pour les marques mode, beauté et lifestyle.",
    }),
    defineField({
      name: "contactTitle",
      title: "Titre de la section Contact",
      type: "string",
      description: "Grand titre avant l'adresse email (ex: Let's talk.)",
      initialValue: "Let's talk.",
    }),
    defineField({
      name: "email",
      title: "Email de contact",
      type: "string",
      description: "Adresse email affichée et utilisée pour les demandes de devis",
      initialValue: "hello@yellow.agency",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedinUrl",
      title: "Lien LinkedIn",
      type: "url",
      description: "URL complète du profil ou de la page LinkedIn de l'agence",
      initialValue: "https://www.linkedin.com",
    }),
    defineField({
      name: "instagramUrl",
      title: "Lien Instagram",
      type: "url",
      description: "URL complète du compte Instagram de l'agence",
      initialValue: "https://www.instagram.com",
    }),
    defineField({
      name: "cityAndYear",
      title: "Mention de bas de page (Footer)",
      type: "string",
      description: "Texte à droite dans le pied de page",
      initialValue: "Paris — 2026",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Configuration Générale & Réseaux",
        subtitle: "SEO, Réseaux sociaux & Coordonnées",
      };
    },
  },
});
