import { values } from "../../data/siteData";
import { Container } from "../ui/Container";

const taglines: Record<string, string> = {
  Clarté: "Pas de jargon, que de l'essentiel",
  Confiance: "On livre ce qu'on promet",
  Utilité: "Chaque fonctionnalité a sa raison",
  Créativité: "On cherche toujours mieux",
  Proximité: "On connaît les gens qu'on aide",
  Qualité: "Le détail, c'est notre métier",
};

export function Values() {
  return (
    <section id="valeurs" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="mb-14 flex items-start justify-between gap-8">
          <div>
            {/* Badge pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
                Valeurs
              </span>
            </div>

            <h2 className="max-w-[340px] text-[clamp(1.9rem,5vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-endrika-dark dark:text-white">
              Ce qui guide{" "}
              <span className="italic text-endrika-red">Endrika.</span>
            </h2>

            <p className="mt-4 max-w-[280px] text-[0.875rem] leading-7 text-endrika-muted/70 dark:text-white/45">
              Nous construisons chaque projet avec une attention particulière à
              la clarté, à l'utilité et à la relation humaine.
            </p>
          </div>
        </div>

        {/* Top divider */}
        <div className="h-px w-full bg-black/[0.06] dark:bg-white/10" />

        {/* ── Values list ── */}
        <ul className="divide-y divide-black/[0.05] dark:divide-white/[0.07]">
          {values.map((value, i) => (
            <li
              key={value}
              className="group relative flex items-center gap-6 overflow-hidden py-5 transition-[padding-left] duration-300 ease-out hover:pl-3"
            >
              {/* Number */}
              <span className="w-5 shrink-0 text-[0.7rem] font-medium text-endrika-muted/30 dark:text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Value name */}
              <span className="flex-1 text-[clamp(1.35rem,3.5vw,1.85rem)] font-bold italic leading-tight tracking-[-0.01em] text-endrika-dark transition-colors duration-200 group-hover:text-endrika-red dark:text-white dark:group-hover:text-endrika-red">
                {value}
              </span>

              {/* Tagline */}
              <span className="hidden shrink-0 text-right text-[0.78rem] text-endrika-muted/50 transition-colors duration-200 group-hover:text-endrika-muted/80 dark:text-white/30 dark:group-hover:text-white/50 sm:block">
                {taglines[value] ?? ""}
              </span>

              {/* Right accent bar */}
              <span
                aria-hidden
                className="absolute right-0 top-0 bottom-0 w-[3px] bg-endrika-red opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}