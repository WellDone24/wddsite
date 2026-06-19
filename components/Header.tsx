import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          Patrick [Nachname]
        </Link>

        <nav className="navigation">
          <Link href="/about">About</Link>

          <a
            href="https://soundcovery.com"
            target="_blank"
            rel="noreferrer"
          >
            Soundcovery
          </a>

          <Link href="/imprint">Imprint</Link>
        </nav>
      </div>
    </header>
  );
}