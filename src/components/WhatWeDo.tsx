import Image from "next/image";
import { HeroAndManifestoData } from "@/sanity/lib/fallbackData";

interface WhatWeDoProps {
  data: HeroAndManifestoData;
}

export default function WhatWeDo({ data }: WhatWeDoProps) {
  return (
    <section>
      <h2 className="label">What we do</h2>
      <p
        style={{
          maxWidth: "60ch",
          margin: "0 auto 18px",
          padding: "0 20px",
          textAlign: "center",
          color: "var(--ink-soft)",
          fontSize: "15px",
          lineHeight: 1.6,
        }}
      >
        {data.whatWeDoIntro}
      </p>

      <div className="split-img">
        <div className="cell">
          <Image
            src={data.celinaImageUrl}
            alt={`Production de contenu et direction artistique — ${data.celinaRole}`}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className="cap">
            <div className="who">{data.celinaName || "Célina"}</div>
            <h3>{data.celinaRole}</h3>
          </div>
        </div>

        <div className="cell">
          <Image
            src={data.madeleineImageUrl}
            alt={`Stratégie digitale et acquisition — ${data.madeleineRole}`}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className="cap">
            <div className="who">{data.madeleineName || "Madeleine"}</div>
            <h3>{data.madeleineRole}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
