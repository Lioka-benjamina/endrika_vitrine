import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { Container } from "../components/ui/Container";
import { Clock3, Globe, MapPin } from "lucide-react";

const stats = [
    { value: "20+", label: "Projets livrés" },
    { value: "15+", label: "Clients satisfaits" },
    { value: "4", label: "Fondateurs passionnés" },
    { value: "100%", label: "Fabriqué à Madagascar" },
];

function HeroSection({ t }: { t: (s: string) => string }) {
    return (
        <section className="relative overflow-hidden bg-endrika-bg pt-32 pb-20 dark:bg-[#0f0f0f]">
            <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-endrika-red/6 blur-[140px] dark:bg-endrika-red/12" />
            <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-20 h-[400px] w-[400px] rounded-full bg-endrika-red/4 blur-[120px]" />

            <Container className="relative z-10">
                <div className="max-w-3xl">


                    <h1 className="text-[2.8rem] font-bold leading-[1.1] tracking-[-0.03em] text-endrika-dark dark:text-white sm:text-[3.6rem]">
                        {t("Construire le digital")}{" "}
                        <span className="text-endrika-red">{t("qui compte")}</span>
                        {"."}
                    </h1>

                    <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-endrika-muted/75 dark:text-white/50">
                        {t("Endrika est une agence digitale née à Madagascar, portée par quatre jeunes fondateurs avec une conviction commune : le digital doit être simple, utile et accessible à toutes les entreprises, quelle que soit leur taille.")}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-endrika-red px-6 py-3 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.35)] active:scale-[0.97]"
                        >
                            {t("Démarrer un projet")}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[0.9rem] font-semibold text-endrika-dark transition-colors hover:bg-endrika-red/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        >
                            {t("Retour à l'accueil")}
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function StatsSection({ t }: { t: (s: string) => string }) {
    return (
        <section className="border-y border-black/5 bg-white py-14 dark:border-white/5 dark:bg-[#111]">
            <Container>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-[2.4rem] font-bold tracking-[-0.03em] text-endrika-red">{stat.value}</p>
                            <p className="mt-1 text-[0.85rem] font-medium text-endrika-muted/70 dark:text-white/50">{t(stat.label)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function StorySection({ t }: { t: (s: string) => string }) {
    return (
        <section className="bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">
            <Container>
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -left-6 top-8 h-48 w-48 rounded-full bg-endrika-red/15 blur-3xl" />
                        <img
                            src="/images/q.png"
                            alt={t("L'équipe Endrika")}
                            className="relative z-10 h-[480px] w-full rounded-[2.5rem] object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2">

                        <h2 className="text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.3rem]">
                            {t("Pourquoi on a créé")}{" "}
                            <span className="text-endrika-red">Endrika</span>
                        </h2>

                        <p className="mt-5 text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
                            {t("Tout a commencé d'un constat simple : beaucoup d'entreprises à Madagascar et en Afrique francophone ont des idées brillantes, mais n'ont pas accès à des partenaires digitaux fiables, transparents et abordables.")}
                        </p>

                        <p className="mt-4 text-[0.95rem] leading-7 text-endrika-muted/70 dark:text-white/45">
                            {t("On a fondé Endrika pour combler ce vide. Notre nom vient du malgache — endrika signifie \"beau, bien fait\". C'est exactement ce qu'on vise : des solutions bien faites, qui durent et qui servent vraiment.")}
                        </p>

                        <p className="mt-4 text-[0.95rem] leading-7 text-endrika-muted/70 dark:text-white/45">
                            {t("Aujourd'hui, on travaille avec des startups, des PME et des associations qui veulent se moderniser, automatiser leurs processus ou lancer un nouveau produit digital.")}
                        </p>

                        <div className="mt-6 rounded-xl border border-black/[0.06] bg-white px-5 py-4 dark:border-white/10 dark:bg-white/5">
                            <p className="border-l-2 border-endrika-red pl-4 text-[0.9rem] font-medium leading-6 text-endrika-dark dark:text-white">
                                {t("\"Rendre le digital accessible, clair et utile — pas seulement pour les grandes entreprises, mais pour tous ceux qui ont quelque chose à construire.\"")}
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

function LocationSection({ t }: { t: (s: string) => string }) {
    return (
        <section className="bg-white py-20 dark:bg-[#111]">
            <Container>
                <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-endrika-bg dark:border-white/10 dark:bg-white/5">
                    <div className="grid lg:grid-cols-2">

                        {/* Text */}
                        <div className="p-10 lg:p-14">

                            <h2 className="text-[1.8rem] font-bold leading-[1.2] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.1rem]">
                                {t("Basés à")}{" "}
                                <span className="text-endrika-red">Antananarivo</span>
                                {","}<br />
                                {t("disponibles partout")}
                            </h2>

                            <p className="mt-5 text-[0.95rem] leading-7 text-endrika-muted/70 dark:text-white/45">
                                {t("Notre équipe est basée à Antananarivo, Madagascar. On travaille en remote avec des clients partout en Afrique et en France, avec la même rigueur et la même réactivité.")}
                            </p>

                            <div className="mt-6 flex flex-col gap-3">
                                {[
                                    {
                                        icon: <MapPin className="h-4.5 w-4.5 text-endrika-red" />,
                                        text: "Antananarivo, Madagascar",
                                    },
                                    {
                                        icon: <Globe className="h-4.5 w-4.5 text-endrika-red" />,
                                        text: t("Disponible à distance — Afrique & Europe"),
                                    },
                                    {
                                        icon: <Clock3 className="h-4.5 w-4.5 text-endrika-red" />,
                                        text: "UTC+3 · Réponse sous 24h",
                                    },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-endrika-red/10">
                                            {item.icon}
                                        </div>
                                        <span className="text-[0.88rem] font-medium text-endrika-muted dark:text-white/60">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative */}
                        <div className="relative hidden overflow-hidden bg-endrika-red/5 lg:block dark:bg-endrika-red/10">
                            <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="aboutgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#91140c" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#aboutgrid)" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-endrika-red/15">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-endrika-red">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <p className="text-[1.1rem] font-bold text-endrika-dark dark:text-white">Antananarivo</p>
                                    <p className="text-sm text-endrika-muted/60 dark:text-white/40">18.9137° S, 47.5361° E</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}

function CTASection({ t }: { t: (s: string) => string }) {
    return (
        <section className="bg-endrika-bg py-24 dark:bg-[#0f0f0f]">
            <Container>
                <div className="relative overflow-hidden rounded-[2rem] bg-endrika-red px-10 py-16 text-center lg:px-20">
                    <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div aria-hidden className="pointer-events-none absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
                    <div className="relative z-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">{t("Travaillons ensemble")}</p>
                        <h2 className="mt-3 text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.5rem]">
                            {t("Vous avez un projet ?")}
                            <br />
                            {t("Parlons-en.")}
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-7 text-white/70">
                            {t("On vous répond dans les 24h. Pas de jargon, pas de devis incompréhensible — juste une vraie conversation sur ce que vous voulez construire.")}
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[0.9rem] font-bold text-endrika-red transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:scale-[0.97]"
                            >
                                {t("Démarrer un projet")}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                {t("Voir nos services")}
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export function AboutPage() {
    const { t } = useLang();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <HeroSection t={t} />
            <StatsSection t={t} />
            <StorySection t={t} />
            <LocationSection t={t} />
            <CTASection t={t} />
        </>
    );
}