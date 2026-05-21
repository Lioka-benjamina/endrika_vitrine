import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* ── Left ── */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
                {t("Contact")}
              </span>
            </div>

            <h2 className="text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
              {t("Parlons de votre")}{" "}
              <span className="text-endrika-red">{t("projet.")}</span>
            </h2>

            <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-endrika-muted/75 dark:text-white/50">
              {t("Vous avez une idée, un besoin ou un projet à structurer ? Écrivez-nous simplement, nous prendrons le temps d'en discuter avec clarté.")}
            </p>

            <div className="mt-8 space-y-3">
              {[
                { label: t("Email"), value: "contact@endrika.mg" },
                { label: t("Téléphone"), value: "+261 34 00 000 00" },
                { label: "WhatsApp", value: "+261 34 00 000 00" },
                { label: t("Localisation"), value: "Madagascar" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="w-24 shrink-0 text-[0.78rem] font-semibold text-endrika-muted/50 dark:text-white/30">
                    {label}
                  </span>
                  <span className="text-[0.875rem] font-medium text-endrika-dark dark:text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <form className="rounded-2xl border border-black/[0.06] bg-white p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: t("Nom"), type: "text", placeholder: t("Votre nom") },
                { label: t("Email"), type: "email", placeholder: "votre@email.com" },
                { label: t("Téléphone"), type: "tel", placeholder: "+261 ..." },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="mb-1.5 block text-[0.8rem] font-semibold text-endrika-dark dark:text-white">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="
                      w-full rounded-xl border border-black/[0.08] bg-endrika-bg px-4 py-2.5
                      text-[0.875rem] text-endrika-dark outline-none
                      transition-all duration-200
                      placeholder:text-endrika-muted/30
                      focus:border-endrika-red/50 focus:ring-2 focus:ring-endrika-red/10
                      dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20
                      dark:focus:border-endrika-red/40
                    "
                  />
                </div>
              ))}

              <div>
                <label className="mb-1.5 block text-[0.8rem] font-semibold text-endrika-dark dark:text-white">
                  {t("Type de projet")}
                </label>
                <select className="
                  w-full rounded-xl border border-black/[0.08] bg-endrika-bg px-4 py-2.5
                  text-[0.875rem] text-endrika-dark outline-none
                  transition-all duration-200
                  focus:border-endrika-red/50 focus:ring-2 focus:ring-endrika-red/10
                  dark:border-white/10 dark:bg-white/5 dark:text-white
                ">
                  <option>{t("Site web")}</option>
                  <option>{t("Application mobile")}</option>
                  <option>{t("Digitalisation")}</option>
                  <option>{t("Design UI/UX")}</option>
                  <option>{t("Accompagnement")}</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[0.8rem] font-semibold text-endrika-dark dark:text-white">
                {t("Message")}
              </label>
              <textarea
                rows={5}
                placeholder={t("Parlez-nous brièvement de votre projet...")}
                className="
                  w-full resize-none rounded-xl border border-black/[0.08] bg-endrika-bg px-4 py-2.5
                  text-[0.875rem] text-endrika-dark outline-none
                  transition-all duration-200
                  placeholder:text-endrika-muted/30
                  focus:border-endrika-red/50 focus:ring-2 focus:ring-endrika-red/10
                  dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20
                "
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="
                  group relative w-full overflow-hidden rounded-xl bg-endrika-red
                  py-3 text-[0.9rem] font-semibold text-white
                  transition-all duration-300
                  hover:bg-[#7a1009] hover:shadow-[0_6px_28px_rgba(145,20,12,0.35)]
                  active:scale-[0.98]
                "
              >
                {t("Envoyer le message")}
                <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </form>

        </div>
      </Container>
    </section>
  );
}