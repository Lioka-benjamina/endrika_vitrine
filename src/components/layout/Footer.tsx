import { navLinks } from "../../data/siteData";
import { Container } from "../ui/Container";
import { useLang } from "../../context/LangContext";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden bg-endrika-dark dark:bg-[#080808]">

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-endrika-red/10 blur-[100px]"
      />

      <Container className="relative z-10">

        <div className="flex flex-col gap-10 border-b border-white/[0.08] py-12 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-endrika-red">
                <span className="text-sm font-bold text-white select-none">E</span>
              </div>
              <span className="text-[1.05rem] font-semibold tracking-tight text-white">
                Endrika
              </span>
            </div>
            <p className="mt-4 text-[0.84rem] leading-6 text-white/45">
              {t("Des solutions digitales utiles, élégantes et durables pour les entreprises locales et ambitieuses.")}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-endrika-red/50 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30">
              {t("Navigation")}
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.875rem] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30">
              {t("Services")}
            </p>
            <div className="flex flex-col gap-2.5">
              {["Sites web", "Applications mobiles", "UI/UX Design", "E-commerce", "Digitalisation", "Maintenance"].map((s) => (
                <span key={s} className="text-[0.875rem] text-white/50">
                  {t(s)}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30">
              {t("Contact")}
            </p>
            <div className="flex flex-col gap-2.5 text-[0.875rem] text-white/50">
              <span>contact@endrika.mg</span>
              <span>+261 34 00 000 00</span>
              <span>Madagascar</span>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-endrika-red px-4 py-2 text-[0.8rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_16px_rgba(145,20,12,0.35)]"
            >
              {t("Démarrer un projet")}
              <span>→</span>
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[0.78rem] text-white/25 sm:flex-row">
          <span>© {new Date().getFullYear()} Endrika. {t("Tous droits réservés.")}</span>
          <span>{t("Fait avec")} ❤️ {t("à Madagascar")}</span>
        </div>

      </Container>
    </footer>
  );
}