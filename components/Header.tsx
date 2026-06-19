import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-semibold text-white">
          Patrick [Nachname]
        </Link>

        <nav className="flex items-center gap-6 text-xs font-semibold text-white/55">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <a
            href="https://soundcovery.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Soundcovery
          </a>

          <Link href="/imprint" className="transition hover:text-white">
            Imprint
          </Link>
        </nav>
      </div>
    </header>
  );
}