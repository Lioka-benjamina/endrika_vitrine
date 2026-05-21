import { Container } from "../ui/Container";



export function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      {/* Background blobs — cohérents avec le Hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* ── Image ── */}
        <div className="relative">
          {/* Glow derrière l'image */}
          <div className="absolute -left-6 top-8 h-48 w-48 rounded-full bg-endrika-red/15 blur-3xl" />


          <img
            src="/images/q.png"
            alt="Équipe Endrika en réunion"
            className="relative z-10 h-[500px] w-full rounded-[2.5rem] object-cover"
          />

          
        </div>

        {/* ── Text ── */}
        <div>
          {/* Badge pill — même style que le Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              À propos
            </span>
          </div>

          <h2 className="max-w-xl text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            Une jeune équipe qui{" "}
            <span className="text-endrika-red">construit</span>{" "}
            avec sens.
          </h2>

          <p className="mt-5 max-w-lg text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            Endrika est née d'une vision simple : rendre le digital plus
            accessible, plus clair et plus utile pour les entreprises. Nous
            sommes quatre jeunes fondateurs passionnés par la technologie, le
            design et les solutions concrètes.
          </p>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-7 text-endrika-muted/70 dark:text-white/45">
            Nous accompagnons les entreprises qui veulent mieux s'organiser,
            gagner du temps, moderniser leur image ou transformer une idée en
            solution digitale concrète.
          </p>

          {/* Citation — border rouge */}
          <div className="mt-6 rounded-xl border border-black/[0.06] bg-white px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <p className="border-l-2 border-endrika-red pl-4 text-[0.9rem] font-medium leading-6 text-endrika-dark dark:text-white">
              Pour nous, un bon produit digital doit être simple à comprendre,
              agréable à utiliser et utile dans le quotidien de ceux qui s'en
              servent.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}