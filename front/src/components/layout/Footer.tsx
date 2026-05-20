import { navLinks } from "../../data/siteData";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-endrika-dark py-10 text-white">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#accueil" className="flex items-center">
                    <img
                        src="/images/endrika.png"
                        alt="Logo Endrika"
                        className="h-12 w-auto object-contain"
                    />
                </a>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Des solutions digitales utiles, élégantes et durables pour les
            entreprises locales et ambitieuses.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-white/70">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}