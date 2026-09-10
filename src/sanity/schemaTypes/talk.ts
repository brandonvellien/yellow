import { defineField, defineType } from "sanity";

export const talk = defineType({
  name: "talk",
  title: "Conférences & Talks",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "Position dans la mosaïque (ex: 1, 2, 3, 4)",
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre de la conférence",
      type: "string",
      description: "Ex: Comprendre les codes de la Génération Z",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Thématique / Catégorie",
      type: "string",
      description: "Ex: Culture & Nouveaux Usages, Prospective, Management",
      initialValue: "Conférence & Décryptage",
    }),
    defineField({
      name: "speakers",
      title: "Intervenante(s)",
      type: "string",
      description: "Ex: Célina Bailly, Madeleine Haddad, ou Duo",
      initialValue: "Célina Bailly",
    }),
    defineField({
      name: "duration",
      title: "Format / Durée",
      type: "string",
      description: "Ex: 45 min + Q&A, Demi-journée, Sur mesure",
      initialValue: "45 min + Q&A",
    }),
    defineField({
      name: "synopsis",
      title: "Résumé complet / Synopsis",
      type: "text",
      rows: 5,
      description: "Texte affiché dans la fenêtre modale lorsqu'un visiteur clique sur le talk",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyPoints",
      title: "Points clés abordés (Bullet points)",
      type: "array",
      description: "Grandes lignes du programme de la conférence",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Photo d'illustration",
      type: "image",
      description: "Image au ratio vertical (4:5)",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageUrl",
      title: "URL de l'image (Fallback ou externe)",
      type: "url",
      description: "Lien de secours ou externe de l'image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      order: "order",
      media: "image",
    },
    prepare({ title, category, order, media }) {
      return {
        title: title || "Talk sans titre",
        subtitle: `${order ? `#${order} ` : ""}${category ? `— ${category}` : ""}`,
        media,
      };
    },
  },
});
