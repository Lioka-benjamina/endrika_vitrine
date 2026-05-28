import { navLinks, services } from "../../data/siteData";
import { Container } from "../ui/Container";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LangContext";

interface HeaderProps {
    dark: boolean;
    onToggleDark: () => void;
}

export function Header({ dark, onToggleDark }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("accueil");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const { lang, toggleLang, t, loading } = useLang();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map((link) => link.href.substring(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const routeLinks: Record<string, string> = {
        "#accueil": "/",
        "#a-propos": "/a-propos",
        "#services": "/services",
    };

    return (
        <header
            className={`
                fixed top-0 z-50 w-full transition-all duration-500 ease-out
                ${scrolled
                    ? "bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md dark:bg-[#0f0f0f]/95"
                    : "bg-transparent"
                }
            `}
        >
            <Container className="relative">
                <div className="flex h-[68px] items-center justify-between">

                    {/* Logo */}
                    <a href="/" className="group relative flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-endrika-red transition-transform duration-300 group-hover:scale-105">
                            <span className="select-none text-sm font-bold text-white">E</span>
                        </div>
                        <span className="text-[1.05rem] font-semibold tracking-tight text-endrika-dark dark:text-white">
                            Endrika
                        </span>
                    </a>

                    {/* Nav Desktop */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                        <ul className="flex items-center gap-0.5">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                const isServicesLink = link.href === "#services";

                                if (isServicesLink) {
                                    return (
                                        <li
                                            key={link.href}
                                            className="relative"
                                            onMouseEnter={() => setServicesOpen(true)}
                                            onMouseLeave={() => setServicesOpen(false)}
                                        >
                                            <button
                                                className={`
                                                    flex items-center gap-1 px-4 py-2 text-[0.875rem] font-medium transition-colors duration-200
                                                    ${isActive
                                                        ? "text-endrika-dark dark:text-white"
                                                        : "text-endrika-muted/70 hover:text-endrika-dark dark:text-white/60 dark:hover:text-white"
                                                    }
                                                `}
                                            >
                                                {t(link.label)}
                                                <svg
                                                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2.5"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>

                                            {/* Dropdown */}
                                            <div
                                                className={`
                                                    absolute left-1/2 top-full -translate-x-1/2 pt-3
                                                    transition-all duration-200
                                                    ${servicesOpen
                                                        ? "pointer-events-auto translate-y-0 opacity-100"
                                                        : "pointer-events-none -translate-y-1 opacity-0"
                                                    }
                                                `}
                                            >
                                                <div className="w-[540px] rounded-2xl border border-black/[0.06] bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#1a1a1a]">
                                                    <div className="grid grid-cols-2 gap-1">
                                                        {services.map((service) => (
                                                            <Link
                                                                key={service.slug}
                                                                to={`/services/${service.slug}`}
                                                                onClick={() => setServicesOpen(false)}
                                                                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-endrika-red/5 dark:hover:bg-white/5"
                                                            >
                                                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-endrika-red/8 dark:bg-endrika-red/15">
                                                                    <i
                                                                        className={`ti ${service.icon} text-endrika-red`}
                                                                        style={{ fontSize: 16 }}
                                                                        aria-hidden="true"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="text-[0.82rem] font-semibold text-endrika-dark dark:text-white">
                                                                        {t(service.title)}
                                                                    </p>
                                                                    <p className="mt-0.5 text-[0.75rem] leading-5 text-endrika-muted/60 dark:text-white/40">
                                                                        {t(service.description)}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="mt-1 flex items-center justify-between border-t border-black/[0.05] px-3 pt-3 pb-1 dark:border-white/10">
                                                        <Link
                                                            to="/services"
                                                            onClick={() => setServicesOpen(false)}
                                                            className="text-[0.78rem] font-medium text-endrika-muted/60 transition-colors hover:text-endrika-dark dark:text-white/40 dark:hover:text-white"
                                                        >
                                                            {t("Voir tous les services")} →
                                                        </Link>
                                                        <a
                                                            href="#contact"
                                                            className="text-[0.78rem] font-semibold text-endrika-red transition-opacity hover:opacity-70"
                                                        >
                                                            {t("Demander un devis")} →
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                const isRoute = !!routeLinks[link.href];
                                const linkClass = `
                                    relative px-4 py-2 text-[0.875rem] font-medium transition-colors duration-200
                                    ${isActive
                                        ? "text-endrika-dark dark:text-white"
                                        : "text-endrika-muted/70 hover:text-endrika-dark dark:text-white/60 dark:hover:text-white"
                                    }
                                `;
                                return (
                                    <li key={link.href}>
                                        {isRoute ? (
                                            <Link to={routeLinks[link.href]} className={linkClass}>
                                                {t(link.label)}
                                            </Link>
                                        ) : (
                                            <a href={link.href} className={linkClass}>
                                                {t(link.label)}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Actions Desktop */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <button
                            onClick={onToggleDark}
                            aria-label="Toggle dark mode"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-endrika-muted/60 transition-colors hover:bg-black/5 hover:text-endrika-dark dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                            {dark ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={toggleLang}
                            disabled={loading}
                            className="text-[0.8rem] font-semibold tracking-wide text-endrika-muted/70 transition-colors hover:text-endrika-dark dark:text-white/50 dark:hover:text-white disabled:opacity-40"
                        >
                            {loading ? "..." : lang === "FR" ? "EN" : "FR"}
                        </button>

                        <a
                            href="#contact"
                            className="relative overflow-hidden rounded-full bg-endrika-red px-5 py-2 text-[0.85rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.35)] active:scale-[0.97]"
                        >
                            {t("Démarrer un projet")}
                        </a>
                    </div>

                    {/* Mobile */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={onToggleDark}
                            aria-label="Toggle dark mode"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-endrika-muted/60 dark:text-white/50"
                        >
                            {dark ? (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>

                        <a href="#contact" className="rounded-full bg-endrika-red px-4 py-1.5 text-sm font-semibold text-white">
                            {t("Contact")}
                        </a>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-endrika-dark dark:text-white"
                        >
                            <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
                            <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-px w-5 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            <div className={`overflow-hidden border-t border-black/5 bg-white/97 backdrop-blur-md transition-all duration-300 dark:bg-[#0f0f0f]/97 lg:hidden ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <Container>
                    <nav className="py-4">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const isServicesLink = link.href === "#services";
                                const isRoute = !!routeLinks[link.href];
                                const linkClass = "block rounded-lg px-3 py-2.5 text-sm font-medium text-endrika-muted transition-colors hover:bg-endrika-red/5 hover:text-endrika-red dark:text-white/70";

                                if (isServicesLink) {
                                    return (
                                        <li key={link.href}>
                                            {/* Lien vers /services */}
                                            <Link
                                                to="/services"
                                                onClick={() => setMobileOpen(false)}
                                                className={linkClass}
                                            >
                                                {t(link.label)}
                                            </Link>
                                            {/* Sous-items services */}
                                            <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-black/[0.06] pl-3 dark:border-white/10">
                                                {services.map((service) => (
                                                    <li key={service.slug}>
                                                        <Link
                                                            to={`/services/${service.slug}`}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="flex items-center gap-2 rounded-lg px-2 py-2 text-[0.8rem] text-endrika-muted/65 transition-colors hover:text-endrika-red dark:text-white/40"
                                                        >
                                                            <i
                                                                className={`ti ${service.icon}`}
                                                                style={{ fontSize: 13 }}
                                                                aria-hidden="true"
                                                            />
                                                            {t(service.title)}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={link.href}>
                                        {isRoute ? (
                                            <Link
                                                to={routeLinks[link.href]}
                                                onClick={() => setMobileOpen(false)}
                                                className={linkClass}
                                            >
                                                {t(link.label)}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className={linkClass}
                                            >
                                                {t(link.label)}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-4 dark:border-white/10">
                            <button
                                onClick={toggleLang}
                                disabled={loading}
                                className="text-sm font-semibold text-endrika-muted/60 dark:text-white/50 disabled:opacity-40"
                            >
                                {loading ? "..." : lang === "FR" ? "EN" : "FR"}
                            </button>
                        </div>
                    </nav>
                </Container>
            </div>
        </header>
    );
}