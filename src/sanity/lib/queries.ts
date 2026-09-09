import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const heroAndManifestoQuery = groq`*[_type == "heroAndManifesto"][0]`;

export const offersQuery = groq`*[_type == "offer"] | order(order asc)`;

export const talksQuery = groq`*[_type == "talk"] | order(order asc)`;

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc)`;

export const allPageDataQuery = groq`{
  "settings": *[_type == "siteSettings"][0],
  "hero": *[_type == "heroAndManifesto"][0],
  "offers": *[_type == "offer"] | order(order asc),
  "talks": *[_type == "talk"] | order(order asc),
  "team": *[_type == "teamMember"] | order(order asc)
}`;
