import { defineField, defineType } from "sanity";

export const offer = defineType({
  name: "offer",
  title: "Offres & Packs Tarifaires",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordre d'apparition",
      type: "number",
      description: "1 = première colonne, 2 = deuxième colonne, etc.",
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "number",
      title: "Numéro affiché (ex: 01, 02, 03)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Nom de l'offre (ex: Essentiel, Croissance, Signature)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isHighlighted",
      title: "Mettre en avant cette offre ?",
      type: "boolean",
      description: "Active un fond contrasté pour guider le choix du client",
      initialValue: false,
    }),
    defineField({
      name: "ctaLabel",
      title: "Texte du bouton d'action",
      type: "string",
      description: "Ex: Demander un devis",
      initialValue: "Demander un devis",
    }),
    defineField({
      name: "features",
      title: "Points forts et prestations incluses",
      type: "array",
      description: "Ajoutez chaque ligne de prestation pour ce pack",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      number: "number",
      name: "name",
      isHighlighted: "isHighlighted",
    },
    prepare({ number, name, isHighlighted }) {
      return {
        title: `${number ? number + " — " : ""}${name || "Offre sans nom"}`,
        subtitle: isHighlighted ? "★ Pack Recommandé / Mis en avant" : "Offre standard",
      };
    },
  },
});
