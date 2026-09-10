import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import QuoteBanner from "@/components/QuoteBanner";
import Offers from "@/components/Offers";
import Talks from "@/components/Talks";
import Team from "@/components/Team";
import ContactFooter from "@/components/ContactFooter";
import { getPageData } from "@/sanity/lib/getData";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const data = await getPageData();

  return (
    <div className={data.settings.enableGrayscaleFilter ? "grayscale-mode" : ""}>
      <Navbar />
      <Hero data={data.hero} />
      <main>
        <WhatWeDo data={data.hero} />
        <QuoteBanner
          quote={data.hero.quoteText}
          backgroundImageUrl={data.hero.quoteBannerImageUrl}
        />
        <Offers offers={data.offers} />
        <Talks talks={data.talks} />
        <Team team={data.team} />
        <ContactFooter settings={data.settings} />
      </main>
    </div>
  );
}
