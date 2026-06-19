import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero section-wrap">
        <div className="hero-content">
          <p className="eyebrow">
            Product · Recommendation Systems · Cultural Discovery
          </p>

          <h1>
            I build interpretable recommendation systems for culture, taste and
            discovery.
          </h1>

          <p className="hero-copy">
            I am currently developing Soundcovery, a recommendation interface
            for discovering relevant artists within festival line-ups.
          </p>

          <div className="actions">
            <Link href="/about" className="button button-primary">
              About
            </Link>
            <a
              href="https://soundcovery.com"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Visit Soundcovery
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <h2 className="section-label">Current focus</h2>

          <div className="content-column">
            <h3>Soundcovery</h3>
            <p>
              A system that helps festival visitors discover artists they are
              likely to care about — without reducing taste to genres,
              popularity or opaque recommendation scores.
            </p>
            <p>
              The interface combines interpretable dimensions, persistent
              preference profiles and recommendations constrained to actual
              festival line-ups.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <h2 className="section-label">Selected collaborations</h2>

          <div className="content-column">
            <p className="lead">
              I am interested in conversations around explainable
              recommendations, taste modelling, cultural discovery and
              early-stage AI product development.
            </p>

            <a className="text-link" href="mailto:info@deinedomain.de">
              info@deinedomain.de
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
