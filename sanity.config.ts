import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/env";
import { seedTool } from "./src/sanity/plugins/seedTool";

export default defineConfig({
  basePath: "/studio",
  name: "yellow_studio",
  title: "Yellow Studio CMS",
  projectId: projectId || "4m785qwh",
  dataset: dataset || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu du Studio Yellow")
          .items([
            S.listItem()
              .title("⚙️ Configuration Générale & Réseaux")
              .id("siteSettingsSingleton")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("🖼️ Hero, Expertises & Manifeste")
              .id("heroAndManifestoSingleton")
              .child(
                S.document()
                  .schemaType("heroAndManifesto")
                  .documentId("heroAndManifesto")
              ),
            S.divider(),
            S.listItem()
              .title("🏷️ Offres & Packs Tarifaires")
              .schemaType("offer")
              .child(
                S.documentTypeList("offer")
                  .title("Offres & Packs Tarifaires")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
            S.listItem()
              .title("🎙️ Conférences & Talks")
              .schemaType("talk")
              .child(
                S.documentTypeList("talk")
                  .title("Conférences & Talks")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
            S.listItem()
              .title("👥 Membres de l'Équipe")
              .schemaType("teamMember")
              .child(
                S.documentTypeList("teamMember")
                  .title("Membres de l'Équipe")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
          ]),
    }),
    seedTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
