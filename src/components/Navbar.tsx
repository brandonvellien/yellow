import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="topbar" aria-label="Navigation principale">
      <Link href="#offers">Offers</Link>
      <Link href="#talks">Talks</Link>
      <Link href="#team">Team</Link>
      <Link href="#contact">Contact</Link>
      <Link href="/studio" className="studio-link" title="Ouvrir le backoffice Sanity">
        Studio
      </Link>
    </nav>
  );
}
