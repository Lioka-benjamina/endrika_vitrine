import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { Container } from "../components/ui/Container";

const serviceDetails: Record<string, {
    num: string;
    title: string;
    tagline: string;
    description: string;
    details: string[];
    pricing: { label: string; amount: string; note: string };
    duration: string;
    icon: string;
}> = {
    "developpement-web": {
        num: "01",
        icon: "ti-code",
        title: "Développement web",
        tagline: "Votre présence en ligne, bien faite.",
        description: "Un site web, ça doit d'abord être utile. On conçoit des sites vitrines, des plateformes et des interfaces qui chargent vite, s'affichent bien sur mobile, et donnent envie d'agir.",
        details: [
            "Site vitrine avec identité visuelle",
            "Plateforme web sur mesure",
            "Refonte et modernisation de site existant",
            "Intégration de systèmes de paiement",
            "Optimisation des performances et SEO technique",
        ],
        pricing: { label: "À partir de", amount: "800 000 Ar", note: "Selon la complexité du projet" },
        duration: "2 à 6 semaines",
    },
    "applications-mobiles": {
        num: "02",
        icon: "ti-device-mobile",
        title: "Applications mobiles",
        tagline: "Dans la poche de vos clients.",
        description: "On développe des applications Android et iOS qui répondent à un besoin précis. Pas de fonctionnalités superflues — juste ce qui sert vraiment, bien exécuté dès le premier MVP.",
        details: [
            "Application Android & iOS (React Native)",
            "Prototype cliquable pour valider une idée",
            "MVP pour lever des fonds ou tester le marché",
            "Intégration d'API et services tiers",
            "Publication sur Play Store & App Store",
        ],
        pricing: { label: "À partir de", amount: "1 500 000 Ar", note: "MVP · fonctionnalités essentielles" },
        duration: "4 à 10 semaines",
    },
    "digitalisation": {
        num: "03",
        icon: "ti-refresh",
        title: "Digitalisation",
        tagline: "Moins de papier, plus de clarté.",
        description: "Beaucoup d'entreprises gèrent encore leurs processus à la main — fichiers Excel, carnets, messages WhatsApp. On les aide à passer à des outils numériques simples, sans tout chambouler.",
        details: [
            "Analyse des processus existants",
            "Outil de gestion interne sur mesure",
            "Automatisation des tâches répétitives",
            "Tableau de bord et reporting",
            "Formation des équipes à l'outil",
        ],
        pricing: { label: "À partir de", amount: "600 000 Ar", note: "Dépend du périmètre à digitaliser" },
        duration: "3 à 8 semaines",
    },
    "design-ui-ux": {
        num: "04",
        icon: "ti-palette",
        title: "Design UI/UX",
        tagline: "Ce que les gens voient et ressentent.",
        description: "Un bon design n'est pas juste beau — il guide, rassure et convertit. On conçoit des interfaces cohérentes avec votre marque, pensées pour vos utilisateurs réels, pas pour un jury de design.",
        details: [
            "Audit UX d'un produit existant",
            "Maquettes Figma complètes (desktop + mobile)",
            "Prototype interactif",
            "Système de design et composants réutilisables",
            "Tests utilisateurs et itérations",
        ],
        pricing: { label: "À partir de", amount: "300 000 Ar", note: "Pour un projet de maquettage" },
        duration: "1 à 4 semaines",
    },
    "maintenance": {
        num: "05",
        icon: "ti-tool",
        title: "Maintenance & accompagnement",
        tagline: "On ne disparaît pas après la livraison.",
        description: "Un produit digital évolue. On propose un suivi régulier pour corriger les bugs, ajouter des fonctionnalités, optimiser les performances et adapter l'outil à vos nouveaux besoins.",
        details: [
            "Corrections de bugs et mises à jour",
            "Évolutions fonctionnelles mensuelles",
            "Hébergement et supervision technique",
            "Rapport mensuel d'activité",
            "Accès prioritaire à l'équipe",
        ],
        pricing: { label: "À partir de", amount: "150 000 Ar / mois", note: "Contrat mensuel sans engagement long terme" },
        duration: "Contrat mensuel",
    },
};

export function ServiceDetailPage({ slug }: { slug: string }) {
    const { t } = useLang();
    const service = serviceDetails[slug];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    if (!service) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-endrika-muted dark:text-white/50">Service introuvable.</p>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-endrika-bg pt-32 pb-16 dark:bg-[#0f0f0f]">
                <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-endrika-red/6 blur-[140px] dark:bg-endrika-red/12" />
                <Container className="relative z-10">
                    <Link
                        to="/services"
                        className="mb-8 inline-flex items-center gap-2 text-[0.82rem] font-medium text-endrika-muted/60 transition-colors hover:text-endrika-red dark:text-white/40"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                        </svg>
                        {t("Tous les services")}
                    </Link>

                    <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-endrika-red/8 dark:bg-endrika-red/15">
                            <i className={`ti ${service.icon} text-endrika-red`} style={{ fontSize: 28 }} aria-hidden="true" />
                        </div>
                        <div>
                            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-endrika-red/60">
                                {service.num}
                            </span>
                            <h1 className="mt-1 text-[2.6rem] font-bold leading-[1.1] tracking-[-0.03em] text-endrika-dark dark:text-white sm:text-[3rem]">
                                {t(service.title)}
                            </h1>
                            <p className="mt-2 text-[1rem] font-medium text-endrika-muted/60 dark:text-white/40">
                                {t(service.tagline)}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="bg-white py-16 dark:bg-[#111]">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:items-start">

                        {/* Left */}
                        <div>
                            <p className="text-[1rem] leading-8 text-endrika-muted/75 dark:text-white/50">
                                {t(service.description)}
                            </p>
                            <h2 className="mt-10 text-[1.1rem] font-bold tracking-[-0.01em] text-endrika-dark dark:text-white">
                                {t("Ce qui est inclus")}
                            </h2>
                            <ul className="mt-5 flex flex-col gap-3">
                                {service.details.map((d) => (
                                    <li key={d} className="flex items-start gap-3">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-endrika-red" />
                                        <span className="text-[0.9rem] leading-7 text-endrika-muted/70 dark:text-white/50">
                                            {t(d)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right — Pricing card + CTA */}
                        <div className="lg:sticky lg:top-28 space-y-4">
                            <div className="rounded-2xl border border-black/[0.06] bg-endrika-bg p-6 dark:border-white/10 dark:bg-white/5">
                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-endrika-muted/50 dark:text-white/35">
                                    {t(service.pricing.label)}
                                </p>
                                <p className="mt-1.5 text-[1.6rem] font-bold tracking-[-0.02em] text-endrika-dark dark:text-white">
                                    {service.pricing.amount}
                                </p>
                                <p className="mt-1 text-[0.78rem] leading-5 text-endrika-muted/55 dark:text-white/35">
                                    {t(service.pricing.note)}
                                </p>
                                <div className="my-4 h-px bg-black/[0.05] dark:bg-white/10" />
                                <div className="flex items-center gap-2 text-[0.8rem] text-endrika-muted/55 dark:text-white/35">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    {t(service.duration)}
                                </div>
                                <a
                                    href="#contact"
                                    className="mt-5 block w-full rounded-xl bg-endrika-red py-3 text-center text-[0.88rem] font-semibold text-white transition-all hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.3)] active:scale-[0.97]"
                                >
                                    {t("Demander un devis")}
                                </a>
                            </div>

                            {/* Autres services */}
                            <div className="rounded-2xl border border-black/[0.06] bg-endrika-bg p-5 dark:border-white/10 dark:bg-white/5">
                                <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-endrika-muted/50 dark:text-white/35">
                                    {t("Autres services")}
                                </p>
                                <ul className="flex flex-col gap-1">
                                    {Object.entries(serviceDetails)
                                        .filter(([s]) => s !== slug)
                                        .map(([s, sv]) => (
                                            <li key={s}>
                                                <Link
                                                    to={`/services/${s}`}
                                                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[0.82rem] text-endrika-muted/65 transition-colors hover:bg-endrika-red/5 hover:text-endrika-red dark:text-white/40 dark:hover:text-white"
                                                >
                                                    <i className={`ti ${sv.icon}`} style={{ fontSize: 14 }} aria-hidden="true" />
                                                    {t(sv.title)}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* CTA bottom */}
            <section className="bg-endrika-bg py-20 dark:bg-[#0f0f0f]">
                <Container>
                    <div className="relative overflow-hidden rounded-[2rem] bg-endrika-red px-10 py-14 text-center">
                        <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-[1.8rem] font-bold leading-tight tracking-[-0.02em] text-white">
                                {t("Prêt à démarrer ?")}<br />
                                <span className="text-white/70">{t("Parlons de votre projet.")}</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-7 text-white/70">
                                {t("Un appel de 30 minutes suffit souvent pour clarifier un projet. Pas d'engagement, pas de jargon.")}
                            </p>
                            <div className="mt-7 flex flex-wrap justify-center gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.88rem] font-bold text-endrika-red transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:scale-[0.97]"
                                >
                                    {t("Démarrer un projet")}
                                </a>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[0.88rem] font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    {t("Voir tous les services")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}