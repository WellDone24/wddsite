import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell>
      <article className="section-wrap page-article split-layout">
        <h1 className="section-label">About</h1>

        <div className="content-column">
          <p className="page-intro">
            I work at the intersection of product development, recommendation
            systems and cultural discovery.
          </p>

          <div className="prose">
            <p>
              My current project, Soundcovery, started with a simple question:
              How can people discover the artists they should not miss at a
              festival without relying on popularity rankings, genre labels or
              black-box recommendations?
            </p>

            <p>
              To answer that, I developed a multidimensional artist model that
              describes music through interpretable characteristics rather than
              conventional categories alone.
            </p>

            <p>
              Users can actively adjust their preferences, understand why
              recommendations were made and discover suitable artists from a
              constrained catalogue such as a festival line-up.
            </p>

            <p>
              This work has led to a broader interest in systems that model
              taste in a persistent and human-readable way. The underlying
              approach may also be applicable in areas such as fashion, media
              and other domains where subjective preference matters.
            </p>
          </div>

          <section className="interests">
            <h2 className="section-label">Current interests</h2>
            <p className="interest-list">
              Explainable recommendations · Taste modelling · Live-event
              discovery · Human-readable AI · Product validation
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
