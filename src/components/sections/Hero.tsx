import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-endrika-dark sm:text-5xl lg:text-6xl">
            Donnons une vraie forme digitale à vos idées.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-endrika-muted">
            Endrika accompagne les entreprises dans la digitalisation, la
            création de sites web et le développement d’applications mobiles
            utiles, modernes et humaines.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Discuter d’un projet
            </Button>

            <Button href="#services" variant="secondary">
              Voir nos services
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[650px]">
          {/* SOFT BACKGROUND */}
          <div className="absolute inset-0 rounded-[3rem] bg-endrika-red/5 blur-3xl" />

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/hero-team.png"
              alt="Équipe Endrika en discussion"
              className="relative z-10 w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}   