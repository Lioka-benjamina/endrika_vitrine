import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { Container } from "../components/ui/Container";

// ── Data ─────────────────────────────────────────────────────────────────────

const servicesData = [
  {
    num: "01",
    title: "Développement web",
    tagline: "Votre présence en ligne, bien faite.",
    description:
      "Un site web, ça doit d'abord être utile. On conçoit des sites vitrines, des plateformes et des interfaces qui chargent vite, s'affichent bien sur mobile, et donnent envie d'agir.",
    details: [
      "Site vitrine avec identité visuelle",
      "Plateforme web sur mesure",
      "Refonte et modernisation de site existant",
      "Intégration de systèmes de paiement",
      "Optimisation des performances et SEO technique",
    ],
    pricing: {
      label: "À partir de",
      amount: "800 000 Ar",
      note: "Selon la complexité du projet",
    },
    duration: "2 à 6 semaines",
  },
  {
    num: "02",
    title: "Applications mobiles",
    tagline: "Dans la poche de vos clients.",
    description:
      "On développe des applications Android et iOS qui répondent à un besoin précis. Pas de fonctionnalités superflues — juste ce qui sert vraiment, bien exécuté dès le premier MVP.",
    details: [
      "Application Android & iOS (React Native)",
      "Prototype cliquable pour valider une idée",
      "MVP pour lever des fonds ou tester le marché",
      "Intégration d'API et services tiers",
      "Publication sur Play Store & App Store",
    ],
    pricing: {
      label: "À partir de",
      amount: "1 500 000 Ar",
      note: "MVP · fonctionnalités essentielles",
    },
    duration: "4 à 10 semaines",
  },
  {
    num: "03",
    title: "Digitalisation",
    tagline: "Moins de papier, plus de clarté.",
    description:
      "Beaucoup d'entreprises gèrent encore leurs processus à la main — fichiers Excel, carnets, messages WhatsApp. On les aide à passer à des outils numériques simples, sans tout chambouler.",
    details: [
      "Analyse des processus existants",
      "Outil de gestion interne sur mesure",
      "Automatisation des tâches répétitives",
      "Tableau de bord et reporting",
      "Formation des équipes à l'outil",
    ],
    pricing: {
      label: "À partir de",
      amount: "600 000 Ar",
      note: "Dépend du périmètre à digitaliser",
    },
    duration: "3 à 8 semaines",
  },
  {
    num: "04",
    title: "Design UI/UX",
    tagline: "Ce que les gens voient et ressentent.",
    description:
      "Un bon design n'est pas juste beau — il guide, rassure et convertit. On conçoit des interfaces cohérentes avec votre marque, pensées pour vos utilisateurs réels, pas pour un jury de design.",
    details: [
      "Audit UX d'un produit existant",
      "Maquettes Figma complètes (desktop + mobile)",
      "Prototype interactif",
      "Système de design et composants réutilisables",
      "Tests utilisateurs et itérations",
    ],
    pricing: {
      label: "À partir de",
      amount: "300 000 Ar",
      note: "Pour un projet de maquettage",
    },
    duration: "1 à 4 semaines",
  },
  {
    num: "05",
    title: "Maintenance & accompagnement",
    tagline: "On ne disparaît pas après la livraison.",
    description:
      "Un produit digital évolue. On propose un suivi régulier pour corriger les bugs, ajouter des fonctionnalités, optimiser les performances et adapter l'outil à vos nouveaux besoins.",
    details: [
      "Corrections de bugs et mises à jour",
      "Évolutions fonctionnelles mensuelles",
      "Hébergement et supervision technique",
      "Rapport mensuel d'activité",
      "Accès prioritaire à l'équipe",
    ],
    pricing: {
      label: "À partir de",
      amount: "150 000 Ar / mois",
      note: "Contrat mensuel sans engagement long terme",
    },
    duration: "Contrat mensuel",
  },
];

const faq = [
  {
    q: "Est-ce que vous travaillez avec des clients hors de Madagascar ?",
    a: "Oui. On travaille à distance avec des clients en France, à la Réunion et dans d'autres pays d'Afrique. Les échanges se font par visio, et on s'adapte aux fuseaux horaires.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "On travaille généralement en deux temps : un acompte au démarrage (50%), et le solde à la livraison. Pour les projets longs, on peut découper en plusieurs jalons.",
  },
  {
    q: "Les prix affichés sont-ils fixes ?",
    a: "Non. Ce sont des points de départ. Chaque projet est différent — on établit toujours un devis précis après une première discussion gratuite.",
  },
  {
    q: "Combien de temps dure un projet en moyenne ?",
    a: "Ça dépend de la complexité. Un site vitrine simple peut être livré en 2 semaines. Une application complète prend plutôt 2 à 3 mois. On est transparents sur les délais dès le début.",
  },
  {
    q: "Est-ce qu'on peut commencer petit et faire évoluer ?",
    a: "C'est même souvent ce qu'on conseille. Commencer par un MVP ou une version simple, valider, puis itérer. C'est moins risqué et souvent plus efficace.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function HeroSection({ t }: { t: (s: string) => string }) {
  return (
    <section className="relative overflow-hidden bg-endrika-bg pt-32 pb-16 dark:bg-[#0f0f0f]">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-endrika-red/6 blur-[140px] dark:bg-endrika-red/12" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-[2.8rem] font-bold leading-[1.1] tracking-[-0.03em] text-endrika-dark dark:text-white sm:text-[3.4rem]">
            {t("Des services pensés")}<br />
            {t("pour ")}<span className="text-endrika-red">{t("votre réalité")}</span>
            {"."}
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            {t("Pas de packages standardisés. On commence par écouter ce dont vous avez besoin, et on construit une solution qui correspond à votre budget, vos contraintes et vos objectifs.")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-endrika-red px-6 py-3 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.35)] active:scale-[0.97]"
            >
              {t("Discuter de votre projet")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[0.9rem] font-semibold text-endrika-dark transition-colors hover:bg-endrika-red/5 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {t("Retour à l'accueil")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesSection({ t }: { t: (s: string) => string }) {
  return (
    <section className="bg-endrika-bg py-16 dark:bg-[#0f0f0f]">
      <Container>
        <div className="flex flex-col gap-0">
          {servicesData.map((service, i) => (
            <div
              key={service.num}
              className={`group relative border-t border-black/[0.06] dark:border-white/10 ${i === servicesData.length - 1 ? "border-b" : ""}`}
            >
              <div className="grid gap-10 py-12 lg:grid-cols-[1fr_1.6fr_1fr] lg:items-start lg:gap-16">

                {/* Left — num + titre + tagline */}
                <div>
                  <span className="block text-[2.5rem] font-bold tracking-tight text-endrika-red/15 dark:text-endrika-red/20">
                    {service.num}
                  </span>
                  <h2 className="mt-1 text-[1.35rem] font-bold tracking-[-0.02em] text-endrika-dark dark:text-white">
                    {t(service.title)}
                  </h2>
                  <p className="mt-1.5 text-[0.85rem] font-medium text-endrika-muted/60 dark:text-white/40">
                    {t(service.tagline)}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    {/* <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-endrika-red/60">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span className="text-[0.78rem] text-endrika-muted/50 dark:text-white/35">{t(service.duration)}</span> */}
                  </div>
                </div>

                {/* Center — description + détails */}
                <div>
                  <p className="text-[0.95rem] leading-7 text-endrika-muted/75 dark:text-white/50">
                    {t(service.description)}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-endrika-red/50" />
                        <span className="text-[0.85rem] leading-6 text-endrika-muted/70 dark:text-white/45">
                          {t(d)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — prix */}
                <div className="lg:pt-1">
                  <div className="rounded-2xl border border-black/[0.06] bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-endrika-muted/50 dark:text-white/35">
                      {t(service.pricing.label)}
                    </p>
                    <p className="mt-1.5 text-[1.45rem] font-bold tracking-[-0.02em] text-endrika-dark dark:text-white">
                      {service.pricing.amount}
                    </p>
                    <p className="mt-1 text-[0.75rem] leading-5 text-endrika-muted/55 dark:text-white/35">
                      {t(service.pricing.note)}
                    </p>
                    <div className="mt-4 h-px bg-black/[0.05] dark:bg-white/10" />
                    <a
                      href="#contact"
                      className="mt-4 block w-full rounded-xl bg-endrika-red/8 py-2.5 text-center text-[0.82rem] font-semibold text-endrika-red transition-colors hover:bg-endrika-red/15 dark:bg-endrika-red/15 dark:hover:bg-endrika-red/25"
                    >
                      {t("Demander un devis")}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PricingNoteSection({ t }: { t: (s: string) => string }) {
  return (
    <section className="bg-white py-14 dark:bg-[#111]">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-endrika-red/15 bg-endrika-red/[0.03] px-8 py-8 dark:border-endrika-red/20 dark:bg-endrika-red/[0.06]">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 h-8 w-1 shrink-0 rounded-full bg-endrika-red" />
            <div>
              <p className="text-[0.95rem] font-semibold text-endrika-dark dark:text-white">
                {t("Sur les prix")}
              </p>
              <p className="mt-2 text-[0.88rem] leading-7 text-endrika-muted/70 dark:text-white/50">
                {t("Les montants affichés sont des points de départ indicatifs. Chaque projet est unique — taille, complexité, délais, fonctionnalités demandées. La première discussion est toujours gratuite, et on vous donne un devis précis avant de commencer quoi que ce soit.")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqSection({ t }: { t: (s: string) => string }) {
  return (
    <section className="bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
                {t("Questions fréquentes")}
              </span>
            </div>
            <h2 className="text-[1.9rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white">
              {t("Ce qu'on nous")} <span className="text-endrika-red">{t("demande souvent")}</span>
            </h2>
            <p className="mt-4 text-[0.9rem] leading-7 text-endrika-muted/65 dark:text-white/40">
              {t("Si votre question n'est pas là, on vous répond directement.")}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-endrika-red transition-opacity hover:opacity-70"
            >
              {t("Nous contacter")}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Right — FAQ list */}
          <div className="flex flex-col divide-y divide-black/[0.05] dark:divide-white/[0.07]">
            {faq.map((item) => (
              <div key={item.q} className="py-6">
                <p className="text-[0.97rem] font-semibold leading-snug text-endrika-dark dark:text-white">
                  {t(item.q)}
                </p>
                <p className="mt-3 text-[0.88rem] leading-7 text-endrika-muted/65 dark:text-white/45">
                  {t(item.a)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

function CTASection({ t }: { t: (s: string) => string }) {
  return (
    <section className="bg-white py-24 dark:bg-[#111]">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-endrika-red px-10 py-16 text-center lg:px-20">
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              {t("Première discussion gratuite")}
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.4rem]">
              {t("Vous savez ce qu'il vous faut ?")}<br />
              {t("On construit ensemble.")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-7 text-white/70">
              {t("Un appel de 30 minutes suffit souvent pour clarifier un projet et voir si on est les bons pour vous aider. Pas d'engagement, pas de jargon.")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[0.9rem] font-bold text-endrika-red transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:scale-[0.97]"
              >
                {t("Démarrer un projet")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t("Voir nos réalisations")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ServicesPage() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection t={t} />
      <ServicesSection t={t} />
      <PricingNoteSection t={t} />
      <FaqSection t={t} />
      <CTASection t={t} />
    </>
  );
}