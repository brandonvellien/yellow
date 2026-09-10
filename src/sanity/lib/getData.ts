import { client } from "./client";
import { allPageDataQuery } from "./queries";
import { fallbackData, PageData } from "./fallbackData";
import { urlForImage } from "./image";

export async function getPageData(): Promise<PageData> {
  if (!client) {
    return fallbackData;
  }

  try {
    const data = await client.fetch(allPageDataQuery);
    if (!data) return fallbackData;

    return {
      settings: {
        title: data.settings?.title || fallbackData.settings.title,
        description: data.settings?.description || fallbackData.settings.description,
        contactTitle: data.settings?.contactTitle || fallbackData.settings.contactTitle,
        email: data.settings?.email || fallbackData.settings.email,
        instagramUrl: data.settings?.instagramUrl || fallbackData.settings.instagramUrl,
        linkedinUrl: data.settings?.linkedinUrl || fallbackData.settings.linkedinUrl,
        cityAndYear: data.settings?.cityAndYear || fallbackData.settings.cityAndYear,
        enableGrayscaleFilter: !!data.settings?.enableGrayscaleFilter,
      },
      hero: {
        studioName: data.hero?.studioName || fallbackData.hero.studioName,
        tagline: data.hero?.tagline || fallbackData.hero.tagline,
        heroImageUrl:
          urlForImage(data.hero?.heroImage) ||
          data.hero?.heroImageUrl ||
          fallbackData.hero.heroImageUrl,
        whatWeDoIntro: data.hero?.whatWeDoIntro || fallbackData.hero.whatWeDoIntro,
        celinaName: data.hero?.celinaName || fallbackData.hero.celinaName,
        celinaRole: data.hero?.celinaRole || fallbackData.hero.celinaRole,
        celinaImageUrl:
          urlForImage(data.hero?.celinaImage) ||
          data.hero?.celinaImageUrl ||
          fallbackData.hero.celinaImageUrl,
        madeleineName: data.hero?.madeleineName || fallbackData.hero.madeleineName,
        madeleineRole: data.hero?.madeleineRole || fallbackData.hero.madeleineRole,
        madeleineImageUrl:
          urlForImage(data.hero?.madeleineImage) ||
          data.hero?.madeleineImageUrl ||
          fallbackData.hero.madeleineImageUrl,
        quoteText: data.hero?.quoteText || fallbackData.hero.quoteText,
        quoteBannerImageUrl:
          urlForImage(data.hero?.quoteBannerImage) ||
          data.hero?.quoteBannerImageUrl ||
          fallbackData.hero.quoteBannerImageUrl,
      },
      offers:
        data.offers && data.offers.length > 0
          ? data.offers.map((o: any) => ({
              _id: o._id,
              order: o.order,
              number: o.number,
              name: o.name,
              isHighlighted: o.isHighlighted,
              ctaLabel: o.ctaLabel || "Demander un devis",
              features: o.features || [],
            }))
          : fallbackData.offers,
      talks:
        data.talks && data.talks.length > 0
          ? data.talks.map((t: any, idx: number) => {
              const fallbackTalk = fallbackData.talks[idx] || fallbackData.talks[0];
              return {
                _id: t._id,
                order: t.order ?? (idx + 1),
                title: t.title || fallbackTalk.title,
                category: t.category || fallbackTalk.category,
                speakers: t.speakers || fallbackTalk.speakers,
                duration: t.duration || fallbackTalk.duration,
                synopsis: t.synopsis || fallbackTalk.synopsis,
                keyPoints: t.keyPoints || fallbackTalk.keyPoints,
                imageUrl: urlForImage(t.image) || t.imageUrl || fallbackTalk.imageUrl,
              };
            })
          : fallbackData.talks,
      team:
        data.team && data.team.length > 0
          ? data.team.map((m: any) => ({
              _id: m._id,
              order: m.order,
              name: m.name,
              role: m.role,
              bio: m.bio,
              photoUrl: urlForImage(m.photo) || m.photoUrl || fallbackData.team[0].photoUrl,
            }))
          : fallbackData.team,
    };
  } catch (error) {
    console.warn("Could not fetch from Sanity, falling back to local dataset:", error);
    return fallbackData;
  }
}
