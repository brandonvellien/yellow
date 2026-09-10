import React, { useState } from "react";
import { Tool, useClient } from "sanity";
import { fallbackData } from "../lib/fallbackData";

function SeedToolComponent() {
  const client = useClient({ apiVersion: "2024-03-01" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSeed = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Site Settings
      await client.createOrReplace({
        _id: "siteSettings",
        _type: "siteSettings",
        title: fallbackData.settings.title,
        description: fallbackData.settings.description,
        contactTitle: fallbackData.settings.contactTitle || "Let's talk.",
        email: fallbackData.settings.email,
        linkedinUrl: fallbackData.settings.linkedinUrl,
        instagramUrl: fallbackData.settings.instagramUrl,
        cityAndYear: fallbackData.settings.cityAndYear,
      });

      // 2. Hero & Manifesto
      await client.createOrReplace({
        _id: "heroAndManifesto",
        _type: "heroAndManifesto",
        studioName: fallbackData.hero.studioName,
        tagline: fallbackData.hero.tagline,
        heroImageUrl: fallbackData.hero.heroImageUrl,
        whatWeDoIntro: fallbackData.hero.whatWeDoIntro,
        celinaName: fallbackData.hero.celinaName || "Célina",
        celinaRole: fallbackData.hero.celinaRole,
        celinaImageUrl: fallbackData.hero.celinaImageUrl,
        madeleineName: fallbackData.hero.madeleineName || "Madeleine",
        madeleineRole: fallbackData.hero.madeleineRole,
        madeleineImageUrl: fallbackData.hero.madeleineImageUrl,
        quoteText: fallbackData.hero.quoteText,
        quoteBannerImageUrl: fallbackData.hero.quoteBannerImageUrl,
      });

      // 3. Offers
      for (const o of fallbackData.offers) {
        await client.createOrReplace({
          _id: o._id,
          _type: "offer",
          order: o.order,
          number: o.number,
          name: o.name,
          isHighlighted: !!o.isHighlighted,
          ctaLabel: o.ctaLabel || "Demander un devis",
          features: o.features || [],
        });
      }

      // 4. Talks
      for (const t of fallbackData.talks) {
        await client.createOrReplace({
          _id: t._id,
          _type: "talk",
          order: t.order,
          title: t.title,
          category: t.category || "Conférence & Décryptage",
          speakers: t.speakers || "Célina Bailly",
          duration: t.duration || "45 min + Q&A",
          synopsis: t.synopsis,
          keyPoints: t.keyPoints || [],
          imageUrl: t.imageUrl,
        });
      }

      // 5. Team Members
      for (const m of fallbackData.team) {
        await client.createOrReplace({
          _id: m._id,
          _type: "teamMember",
          order: m.order,
          name: m.name,
          role: m.role,
          bio: m.bio,
          photoUrl: m.photoUrl,
        });
      }

      setSuccess(true);
    } catch (err: any) {
      console.error("Seeding error:", err);
      setError(err?.message || "Une erreur est survenue lors de l'importation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px 24px", maxWidth: "760px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "32px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontSize: "28px" }}>⚡</span>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700" }}>
            Initialisation des Contenus du Site
          </h2>
        </div>

        <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
          Votre base de données Sanity Cloud est actuellement vierge. En cliquant sur le bouton ci-dessous,
          l&apos;ensemble des contenus réels du site seront instantanément importés dans votre backoffice :
        </p>

        <ul style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "28px", paddingLeft: "20px" }}>
          <li><strong>🎙️ Les 4 Conférences &amp; Talks</strong> (avec synopsis complets, durées, intervenants et points clés)</li>
          <li><strong>👥 L&apos;Équipe Fondatrice</strong> (Célina Bailly &amp; Madeleine Haddad avec photos et biographies)</li>
          <li><strong>🏷️ Les 3 Offres tarifaires</strong> (Essentiel, Croissance, Signature)</li>
          <li><strong>🖼️ La section Hero &amp; Manifeste</strong> (titres, images d&apos;ambiance, citation)</li>
          <li><strong>⚙️ Les Paramètres généraux</strong> (email, réseaux sociaux, mentions légales)</li>
        </ul>

        {success ? (
          <div
            style={{
              padding: "16px 20px",
              background: "#E8F5E9",
              color: "#2E7D32",
              borderRadius: "6px",
              marginBottom: "20px",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            ✅ Les 11 documents ont été créés avec succès dans votre projet Sanity !
            <div style={{ marginTop: "8px", fontWeight: "normal", fontSize: "14px", color: "#1B5E20" }}>
              Vous pouvez désormais vous rendre dans l&apos;onglet <strong>« Structure »</strong> à gauche pour éditer,
              modifier et publier tous les textes, photos et réglages à votre convenance.
            </div>
          </div>
        ) : null}

        {error ? (
          <div
            style={{
              padding: "16px 20px",
              background: "#FFEBEE",
              color: "#C62828",
              borderRadius: "6px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            ❌ Erreur : {error}
          </div>
        ) : null}

        <button
          onClick={handleSeed}
          disabled={loading}
          style={{
            background: loading ? "#888" : "#111",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "14px 28px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {loading ? "Importation des contenus en cours..." : "📥 Importer tous les contenus dans Sanity"}
        </button>
      </div>
    </div>
  );
}

export const seedTool = (): Tool => ({
  name: "seed",
  title: "⚡ Initialiser les contenus",
  component: SeedToolComponent,
});
