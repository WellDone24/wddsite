import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Imprint",
};

export default function ImprintPage() {
  return (
    <PageShell>
      <article className="section-wrap page-article split-layout">
        <h1 className="section-label">Imprint</h1>

        <div className="content-column legal-copy">
          <section>
            <h2>Information according to § 5 DDG</h2>
            <p>
              Patrick [Nachname]
              <br />
              [Street and number]
              <br />
              [Postal code and city]
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:info@deinedomain.de">info@deinedomain.de</a>
            </p>
          </section>

          <section>
            <h2>Liability for content</h2>
            <p>
              As a service provider, I am responsible for my own content on
              these pages under the general laws. However, I am not obliged to
              monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
          </section>

          <section>
            <h2>Liability for links</h2>
            <p>
              This website may contain links to external third-party websites
              over whose content I have no control. The respective provider or
              operator of the linked pages is responsible for their content.
            </p>
          </section>

          <section>
            <h2>Copyright</h2>
            <p>
              The content and works created by the site operator on these pages
              are subject to German copyright law.
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
