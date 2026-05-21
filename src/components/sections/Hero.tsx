import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-endrika-bg dark:bg-[#0f0f0f]"
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[700px] w-[700px] rounded-full bg-endrika-red/10 blur-[120px] dark:bg-endrika-red/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10 grid min-h-screen items-center gap-16 py-[120px] lg:grid-cols-[1fr_1fr]">
        <div>
          <h1 className="max-w-2xl text-[3rem] font-bold leading-[1.08] tracking-[-0.03em] text-endrika-dark dark:text-white sm:text-4xl lg:text-[4.2rem]">
            {t("Donnons une vraie forme digitale à")}{" "}
            <span className="text-endrika-red">{t("vos idées.")}</span>
          </h1>

          <p className="mt-8 max-w-xl text-[1.15rem] leading-8 text-endrika-muted/80 dark:text-white/55">
            {t("Endrika accompagne les entreprises ambitieuses dans la création d'applications, de sites web et de solutions sur mesure.")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-endrika-red px-8 py-4 text-[1rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_6px_28px_rgba(145,20,12,0.38)] active:scale-[0.97]"
            >
              {t("Commencer un projet")}
              <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#realisations"
              className="rounded-full border border-black/10 bg-white px-8 py-4 text-[1rem] font-semibold text-endrika-dark transition-all duration-300 hover:border-black/20 hover:shadow-sm active:scale-[0.97] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {t("Voir nos réalisations")}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
          <div className="absolute inset-0 rounded-[3rem] bg-endrika-red/8 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/hero-team.png"
              alt={t("Équipe Endrika en discussion")}
              className="relative z-10 w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}