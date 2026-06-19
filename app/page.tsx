import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="section-wrap">
          <div className="hero-content">
            <img
              src="/logo.png"
              alt="WellDone Decisions"
              className="hero-logo"
            />

            <p className="eyebrow">
              Interim Management · Real Estate · Transformation
            </p>

            <h1>
              Clarity in complex situations.
            </h1>

            <p className="hero-copy">
              I help real estate organizations navigate growth, complexity and
              change.
            </p>

            <p className="hero-copy">
              With more than 16 years of experience across workout situations,
              controlling, risk management and transformation projects, I focus
              on understanding problems, setting priorities and driving
              execution.
            </p>

            <div className="actions">
              <a
                href="mailto:info@welldonedecisions.com"
                className="button button-primary"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <p className="section-label">
            Focus
          </p>

          <div className="content-column">
            <p className="lead">
              Growth situations, restructuring, operational improvement and
              pragmatic digitalization.
            </p>

            <p>
              I support organizations that need experienced leadership,
              analytical rigor and a strong focus on implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-wrap split-layout">
          <p className="section-label">
            Experience
          </p>

          <div className="content-column">
            <p className="lead">
              16+ years in real estate.
            </p>

            <p>
              Office and residential portfolios with a combined investment
              volume exceeding €6 billion.
            </p>

            <p>
              I am interested in decision support and AI as an accelerator of
              sound thinking. My side project soundcovery explores this through
              recommendation systems and explainable AI.
            </p>

            <a
              href="mailto:get.it.well.done@welldonedecisions.com"
              className="text-link"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}