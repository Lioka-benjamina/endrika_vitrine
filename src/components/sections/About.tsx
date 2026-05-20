import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-endrika-red/10 blur-3xl" />

          <img
            src="/images/q.png"
            alt="Équipe Endrika en réunion"
            className="relative z-10 h-[500px] w-full rounded-[2.5rem] object-cover"
          />
        </div>

        <div>
          <SectionTitle
            eyebrow="À propos"
            title="Une jeune équipe qui construit avec sens."
            description="Endrika est née d’une vision simple : rendre le digital plus accessible, plus clair et plus utile pour les entreprises. Nous sommes quatre jeunes fondateurs passionnés par la technologie, le design et les solutions concrètes."
          />

          <div className="mt-8 space-y-5 text-sm leading-7 text-endrika-muted">
            <p>
              Nous accompagnons les entreprises qui veulent mieux s’organiser,
              gagner du temps, moderniser leur image ou transformer une idée en
              solution digitale concrète.
            </p>

            {/* <p>
              Notre approche repose sur l’écoute, la clarté et la proximité.
              Avant de parler technologie, nous cherchons à comprendre vos
              besoins, vos contraintes et vos objectifs réels.
            </p> */}

            <p className="border-l-2 border-endrika-red pl-5 font-medium text-endrika-dark">
              Pour nous, un bon produit digital doit être simple à comprendre,
              agréable à utiliser et utile dans le quotidien de ceux qui s’en
              servent.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}