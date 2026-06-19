import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <article className="page-article">
        <div className="section-wrap split-layout">
          <p className="section-label">
            About
          </p>

          <div className="content-column">
            <p className="page-intro">
              I work at the intersection of recommendation systems,
              product development and cultural discovery.
            </p>

            <div className="prose">
              <p>
                Soundcovery started with a simple question:
                How can people discover the artists they should not miss
                at a festival?
              </p>

              <p>
                To answer that question I developed a multidimensional
                artist model that focuses on interpretable musical
                characteristics instead of conventional labels alone.
              </p>

              <p>
                This work has evolved into a broader interest in
                recommendation systems, taste modelling and
                human-readable AI interfaces.
              </p>
            </div>

            <div className="interests">
              <p className="section-label">
                Areas of interest
              </p>

              <div className="interest-list">
                Explainable recommendations<br />
                Taste modelling<br />
                Cultural discovery<br />
                Product strategy<br />
                Human-readable AI
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}