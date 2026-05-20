import { navLinks } from "../../data/siteData";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-endrika-gray/30 bg-endrika-bg/95 backdrop-blur">
            <Container className="flex h-20 items-center justify-between">
                <a href="#accueil" className="flex items-center">
                    <img
                        src="/images/endrika.png"
                        alt="Logo Endrika"
                        className="h-12 w-auto object-contain"
                    />
                </a>
                <nav className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-endrika-muted transition hover:text-endrika-red"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Button href="#contact">Discuter d’un projet</Button>
                </div>

                <a
                    href="#contact"
                    className="rounded-full bg-endrika-red px-4 py-2 text-sm font-medium text-white lg:hidden"
                >
                    Contact
                </a>
            </Container>
        </header>
    );
}