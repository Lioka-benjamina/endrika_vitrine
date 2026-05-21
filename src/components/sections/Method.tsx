import { methodSteps } from "../../data/siteData";
import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

export function Method() {
  const { t } = useLang();

  return (
    <section id="methode" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              {t("Méthode")}
            </span>
          </div>

          <h2 className="text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            {t("Notre manière de")}{" "}
            <span className="text-endrika-red">{t("travailler.")}</span>
          </h2>

          <p className="mt-4 text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            {t("Nous avançons étape par étape, avec des échanges clairs et une attention particulière aux vrais besoins du client.")}
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
            <div key={step} className="group relative flex gap-5">

              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-endrika-red text-sm font-semibold text-white shadow-[0_4px_16px_rgba(145,20,12,0.25)] transition-all duration-300 group-hover:shadow-[0_6px_24px_rgba(145,20,12,0.38)]">
                  {index + 1}
                </div>
                <div className="mt-3 h-full min-h-14 w-px bg-endrika-red/15 dark:bg-endrika-red/20" />
              </div>

              <div className="pb-2 pt-1">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-endrika-red">
                  {t("Étape")} {index + 1}
                </p>

                <h3 className="mt-2 text-[1.1rem] font-semibold leading-snug text-endrika-dark dark:text-white">
                  {t(step)}
                </h3>

                <p className="mt-2.5 max-w-xs text-[0.84rem] leading-6 text-endrika-muted/70 dark:text-white/45">
                  {t("Une étape claire pour avancer avec méthode, simplicité et confiance.")}
                </p>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}