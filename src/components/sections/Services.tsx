import { services } from "../../data/siteData";
import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              {t("Services")}
            </span>
          </div>

          <h2 className="text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            {t("Des solutions digitales")}{" "}
            <span className="text-endrika-red">{t("pensées")}</span>{" "}
            {t("pour être utiles.")}
          </h2>

          <p className="mt-4 text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            {t("Nous concevons des outils clairs, modernes et adaptés aux réalités de chaque entreprise.")}
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="
                group relative overflow-hidden rounded-2xl
                border border-black/[0.06] bg-white p-6
                transition-all duration-300
                hover:-translate-y-1 hover:border-endrika-red/25 hover:shadow-[0_8px_30px_rgba(145,20,12,0.08)]
                dark:border-white/10 dark:bg-white/5 dark:hover:border-endrika-red/30
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-endrika-red/0 transition-all duration-300 group-hover:bg-endrika-red/[0.02]" />

              <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-endrika-red/8 text-[0.75rem] font-bold tracking-wide text-endrika-red dark:bg-endrika-red/15">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[1.05rem] font-semibold leading-snug text-endrika-dark dark:text-white">
                {t(service.title)}
              </h3>

              <p className="mt-3 text-[0.85rem] leading-6 text-endrika-muted/70 dark:text-white/45">
                {t(service.description)}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-endrika-red/40 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2 rounded-full border border-black/10
              bg-white px-6 py-3 text-[0.88rem] font-semibold text-endrika-dark
              transition-all duration-300
              hover:border-endrika-red/30 hover:shadow-sm
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-endrika-red/30
            "
          >
            {t("Discuter de votre projet")}
            <span className="text-endrika-red">→</span>
          </a>
        </div>

      </Container>
    </section>
  );
}