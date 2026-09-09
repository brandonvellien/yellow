import Link from "next/link";
import { OfferData } from "@/sanity/lib/fallbackData";

interface OffersProps {
  offers: OfferData[];
}

export default function Offers({ offers }: OffersProps) {
  return (
    <section id="offers">
      <h2 className="label">Offers</h2>
      <div className="offers-container">
        <div className="offers">
          {offers.map((offer) => (
            <div
              key={offer._id || offer.number}
              className={`offer ${offer.isHighlighted ? "mid" : ""}`}
            >
              <div>
                <div className="n">{offer.number}</div>
                <h3>{offer.name}</h3>
                <Link
                  href={`#contact`}
                  className="cta-quote"
                >
                  {offer.ctaLabel || "Demander un devis"}
                </Link>
              </div>

              <ul>
                {offer.features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
