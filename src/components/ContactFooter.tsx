import Link from "next/link";
import { SiteSettingsData } from "@/sanity/lib/fallbackData";

interface ContactFooterProps {
  settings: SiteSettingsData;
}

export default function ContactFooter({ settings }: ContactFooterProps) {
  return (
    <>
      <section className="contact" id="contact">
        <h2>{settings.contactTitle || "Let's talk."}</h2>
        <a
          href={`mailto:${settings.email || "hello@yellow.agency"}`}
          className="mail"
        >
          {settings.email || "hello@yellow.agency"}
        </a>
      </section>

      <footer>
        <div>YELLOW</div>
        <div className="socials">
          <Link
            href={settings.linkedinUrl || "https://www.linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </Link>
          <Link
            href={settings.instagramUrl || "https://www.instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm0 5.3a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm4.08-5.42a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM12 3.62c2.4 0 2.69.01 3.64.05.88.04 1.36.19 1.68.31.42.16.72.36 1.03.67.31.31.51.61.67 1.03.12.32.27.8.31 1.68.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.04.88-.19 1.36-.31 1.68-.16.42-.36.72-.67 1.03-.31.31-.61.51-1.03.67-.32.12-.8.27-1.68.31-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-.88-.04-1.36-.19-1.68-.31a2.78 2.78 0 0 1-1.03-.67 2.78 2.78 0 0 1-.67-1.03c-.12-.32-.27-.8-.31-1.68-.04-.95-.05-1.24-.05-3.64s.01-2.69.05-3.64c.04-.88.19-1.36.31-1.68.16-.42.36-.72.67-1.03.31-.31.61-.51 1.03-.67.32-.12.8-.27 1.68-.31.95-.04 1.24-.05 3.64-.05zm0-1.62c-2.44 0-2.75.01-3.71.05-.96.04-1.62.2-2.19.42-.6.23-1.1.55-1.61 1.05-.5.5-.82 1.01-1.05 1.61-.22.58-.38 1.24-.42 2.2-.04.96-.05 1.27-.05 3.71s.01 2.75.05 3.71c.04.96.2 1.62.42 2.2.23.6.55 1.1 1.05 1.61.5.5 1.01.82 1.61 1.05.58.22 1.24.38 2.2.42.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.04 1.62-.2 2.2-.42.6-.23 1.1-.55 1.61-1.05.5-.5.82-1.01 1.05-1.61.22-.58.38-1.24.42-2.2.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.04-.96-.2-1.62-.42-2.2a4.4 4.4 0 0 0-1.05-1.61 4.4 4.4 0 0 0-1.61-1.05c-.58-.22-1.24-.38-2.2-.42-.96-.04-1.27-.05-3.71-.05z" />
            </svg>
          </Link>
        </div>
        <div>{settings.cityAndYear || "Paris — 2026"}</div>
      </footer>
    </>
  );
}
