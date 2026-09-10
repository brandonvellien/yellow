import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Membres de l'équipe",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "1 = première colonne (gauche), 2 = deuxième colonne (droite)",
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Nom complet",
      type: "string",
      description: "Ex: Célina Bailly, Madeleine Haddad",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rôle / Poste",
      type: "string",
      description: "Ex: Content & Art Direction, Strategy & Acquisition",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Portrait photographique",
      type: "image",
      description: "Portrait haute définition",
      options: { hotspot: true },
    }),
    defineField({
      name: "photoUrl",
      title: "URL de la photo (Fallback ou externe)",
      type: "url",
      description: "Lien de secours ou externe de la photo",
    }),
    defineField({
      name: "bio",
      title: "Biographie / Parcours",
      type: "text",
      rows: 4,
      description: "Présentation de l'expérience et des réalisations clés",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Membre",
        subtitle: subtitle || "Rôle",
        media,
      };
    },
  },
});
