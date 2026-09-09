import Image from "next/image";

interface QuoteBannerProps {
  quote: string;
  backgroundImageUrl: string;
}

export default function QuoteBanner({ quote, backgroundImageUrl }: QuoteBannerProps) {
  return (
    <div className="quote-media">
      <Image
        src={backgroundImageUrl}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <p>{quote}</p>
    </div>
  );
}
