import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="section-wrap">
          <div className="hero-content">
            <img
              src="/logo.png"
              alt="WellDone"
              className="hero-logo"
            />

            <p className="eyebrow">
              Product · Recommendation Systems · Cultural Discovery
            </p>

            <h1>
              I build systems for better discovery.
            </h1>

            <p className="hero-copy">
              I work on recommendation systems, product concepts and interfaces
              for domains where taste, context and subjective preference matter.
            </p>

            <p className="hero-copy">
              My current project is Soundcovery, a discovery system for festival
              line-ups.
            </p>

            <div className="actions">
              <Link
                href="/about"
                className="button button-primary"
              >
                About
              </Link>

              <a
                href="https://soundcovery.com"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Soundcovery
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <p className="section-label">
            Current project
          </p>

          <div className="content-column">
            <h3>Soundcovery</h3>

            <p>
              Soundcovery helps festival visitors identify artists they are
              likely to care about — based on interpretable musical
              characteristics instead of popularity, generic genre labels or
              opaque recommendation scores.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <p className="section-label">
            Open to conversations
          </p>

          <div className="content-column">
            <p className="lead">
              Explainable recommendation systems, taste modelling, cultural
              discovery and early-stage product development.
            </p>

            <a
              href="mailto:info@deinedomain.de"
              className="text-link"
            >
              info@deinedomain.de
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}