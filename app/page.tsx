import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <img
            src="/logo.png"
            alt="WellDone"
            className="mb-10 h-auto w-28 md:w-32"
          />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Product · Recommendation Systems · Cultural Discovery
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-6xl">
            I build systems for better discovery.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
            I work on recommendation systems, product concepts and interfaces
            for domains where taste, context and subjective preference matter.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
            My current project is Soundcovery, a discovery system for festival
            line-ups.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              About
            </Link>

            <a
              href="https://soundcovery.com"
              target="_blank"
              rel="noreferrer"
              className="border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Soundcovery
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-18 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Current project
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.025em] md:text-4xl">
              Soundcovery
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              Soundcovery helps festival visitors identify artists they are
              likely to care about — based on interpretable musical
              characteristics instead of popularity, generic genre labels or
              opaque recommendation scores.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-18 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Open to conversations
            </p>

            <p className="max-w-2xl text-2xl leading-9 tracking-[-0.025em] text-white/85">
              Explainable recommendation systems, taste modelling, cultural
              discovery and early-stage product development.
            </p>

            <a
              href="mailto:info@deinedomain.de"
              className="mt-8 inline-block text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              info@deinedomain.de
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}