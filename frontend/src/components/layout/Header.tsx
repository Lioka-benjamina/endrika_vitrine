import { navLinks } from "../../data/siteData";
import { Container } from "../ui/Container";
import { useState, useEffect } from "react";

interface HeaderProps {
  dark: boolean;
  onToggleDark: () => void;
}

export function Header({ dark, onToggleDark }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("accueil");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState<"FR" | "EN">("FR");

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
                    <a href="#accueil" className="group relative flex items-center gap-2.5">
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
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className={`
                                                relative px-4 py-2 text-[0.875rem] font-medium transition-colors duration-200
                                                ${isActive
                                                    ? "text-endrika-dark dark:text-white"
                                                    : "text-endrika-muted/70 hover:text-endrika-dark dark:text-white/60 dark:hover:text-white"
                                                }
                                            `}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Actions Desktop */}
                    <div className="hidden items-center gap-3 lg:flex">

                        {/* Dark mode toggle */}
                        <button
                            onClick={onToggleDark}
                            aria-label="Toggle dark mode"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-endrika-muted/60 transition-colors hover:bg-black/5 hover:text-endrika-dark dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                            {dark ? (
                                /* Sun */
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1" x2="12" y2="3"/>
                                    <line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1" y1="12" x2="3" y2="12"/>
                                    <line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                /* Moon */
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>

                        {/* Language switch */}
                        <button
                            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                            className="text-[0.8rem] font-semibold tracking-wide text-endrika-muted/70 transition-colors hover:text-endrika-dark dark:text-white/50 dark:hover:text-white"
                        >
                            {lang === "FR" ? "EN" : "FR"}
                        </button>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="relative overflow-hidden rounded-full bg-endrika-red px-5 py-2 text-[0.85rem] font-semibold text-white transition-all duration-300 hover:bg-[#7a1009] hover:shadow-[0_4px_20px_rgba(145,20,12,0.35)] active:scale-[0.97]"
                        >
                            Démarrer un projet
                        </a>
                    </div>

                    {/* Mobile */}
                    <div className="flex items-center gap-2 lg:hidden">
                        {/* Dark toggle mobile */}
                        <button
                            onClick={onToggleDark}
                            aria-label="Toggle dark mode"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-endrika-muted/60 dark:text-white/50"
                        >
                            {dark ? (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>

                        <a href="#contact" className="rounded-full bg-endrika-red px-4 py-1.5 text-sm font-semibold text-white">
                            Contact
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
            <div className={`overflow-hidden border-t border-black/5 bg-white/97 backdrop-blur-md transition-all duration-300 dark:bg-[#0f0f0f]/97 lg:hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <Container>
                    <nav className="py-4">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-endrika-muted transition-colors hover:bg-endrika-red/5 hover:text-endrika-red dark:text-white/70"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-4 dark:border-white/10">
                            <button
                                onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                                className="text-sm font-semibold text-endrika-muted/60 dark:text-white/50"
                            >
                                {lang === "FR" ? "EN" : "FR"}
                            </button>
                        </div>
                    </nav>
                </Container>
            </div>
        </header>
    );
}