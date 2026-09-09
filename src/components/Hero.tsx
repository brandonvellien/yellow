import Image from "next/image";
import { HeroAndManifestoData } from "@/sanity/lib/fallbackData";

interface HeroProps {
  data: HeroAndManifestoData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <header>
      <div className="logo-hero">
        <h1 className="mark">{data.studioName || "YELLOW"}</h1>
        <p className="tag">{data.tagline || "Content & Digital Agency Studio"}</p>
      </div>

      <div className="hero-img">
        <Image
          src={data.heroImageUrl}
          alt={`${data.studioName} — Direction artistique et stratégie digitale à Paris`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </header>
  );
}
