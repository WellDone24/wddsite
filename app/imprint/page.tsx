import PageShell from "@/components/PageShell";

export default function ImprintPage() {
  return (
    <PageShell>
      <article className="page-article">
        <div className="section-wrap split-layout">
          <p className="section-label">
            Imprint
          </p>

          <div className="legal-copy">
            <section>
              <h2>Information according to § 5 DDG</h2>

              <p>
                Patrick [Nachname]
                <br />
                Straße
                <br />
                PLZ Ort
                <br />
                Germany
              </p>
            </section>

            <section>
              <h2>Contact</h2>

              <p>
                <a href="mailto:info@deinedomain.de">
                  info@deinedomain.de
                </a>
              </p>
            </section>

            <section>
              <h2>Liability for content</h2>

              <p>
                The content of this website has been created with care.
                However, no guarantee can be given for completeness,
                correctness or timeliness.
              </p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}