import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

export function About() {
  const { t } = useLang();

  return (
    <section id="a-propos" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

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
          <div className="absolute -left-6 top-8 h-48 w-48 rounded-full bg-endrika-red/15 blur-3xl" />
          <img
            src="/images/q.png"
            alt={t("Équipe Endrika en réunion")}
            className="relative z-10 h-[500px] w-full rounded-[2.5rem] object-cover"
          />
        </div>

        {/* ── Text ── */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              {t("À propos")}
            </span>
          </div>

          <h2 className="max-w-xl text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            {t("Une jeune équipe qui")}{" "}
            <span className="text-endrika-red">{t("construit")}</span>{" "}
            {t("avec sens.")}
          </h2>

          <p className="mt-5 max-w-lg text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            {t("Endrika est née d'une vision simple : rendre le digital plus accessible, plus clair et plus utile pour les entreprises. Nous sommes quatre jeunes fondateurs passionnés par la technologie, le design et les solutions concrètes.")}
          </p>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-7 text-endrika-muted/70 dark:text-white/45">
            {t("Nous accompagnons les entreprises qui veulent mieux s'organiser, gagner du temps, moderniser leur image ou transformer une idée en solution digitale concrète.")}
          </p>

          <div className="mt-6 rounded-xl border border-black/[0.06] bg-white px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <p className="border-l-2 border-endrika-red pl-4 text-[0.9rem] font-medium leading-6 text-endrika-dark dark:text-white">
              {t("Pour nous, un bon produit digital doit être simple à comprendre, agréable à utiliser et utile dans le quotidien de ceux qui s'en servent.")}
            </p>
          </div>

          {/* ── Bouton vers la page dédiée ── */}
          <Link
            to="/a-propos"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-endrika-red px-6 py-2.5 text-[0.85rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.35)] active:scale-[0.97]"
          >
            {t("En savoir plus sur nous")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

      </Container>
    </section>
  );
}