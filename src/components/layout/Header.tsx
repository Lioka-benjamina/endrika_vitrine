import { navLinks } from "../../data/siteData";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { useState, useEffect } from "react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Détection de la section active
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
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
                    ? "bg-white/95 shadow-sm backdrop-blur-md" 
                    : "bg-transparent"
                }
            `}
        >
            <Container className="relative">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo avec animation */}
                    <a 
                        href="#accueil" 
                        className="group relative flex items-center overflow-hidden"
                    >
                        <div className="absolute -inset-x-4 -inset-y-2 scale-95 bg-endrika-red/5 opacity-0 blur-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                        <img
                            src="/images/endrika.png"
                            alt="Endrika"
                            className="relative h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105 lg:h-10"
                        />
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-endrika-red transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Navigation principale */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 transform lg:block">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`
                                            relative px-4 py-2 text-sm font-medium transition-all duration-300
                                            ${activeSection === link.href.substring(1)
                                                ? "text-endrika-red"
                                                : "text-endrika-muted hover:text-endrika-red"
                                            }
                                        `}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {activeSection === link.href.substring(1) && (
                                            <span className="absolute bottom-0 left-4 right-4 h-px bg-endrika-red" />
                                        )}
                                        <span className="absolute inset-x-0 bottom-0 h-px bg-endrika-red/20 transition-all duration-300 group-hover:left-4 group-hover:right-4" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bouton CTA */}
                    <div className="hidden lg:block">
                        <Button 
                            href="#contact"
                            className="group relative overflow-hidden bg-endrika-red px-6 py-2 text-sm font-medium"
                        >
                            <span className="relative z-10">Discuter d’un projet</span>
                            <span className="absolute inset-0 -translate-x-full bg-black/20 transition-transform duration-300 group-hover:translate-x-0" />
                        </Button>
                    </div>

                    {/* Version mobile */}
                    <div className="lg:hidden">
                        <a
                            href="#contact"
                            className="group relative overflow-hidden rounded-full bg-endrika-red px-4 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    );
}