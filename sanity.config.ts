import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/env";

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
            S.documentTypeListItem("offer").title("🏷️ Offres & Packs Tarifaires"),
            S.documentTypeListItem("talk").title("🎙️ Conférences & Talks"),
            S.documentTypeListItem("teamMember").title("👥 Membres de l'Équipe"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
