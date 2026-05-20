import { methodSteps } from "../../data/siteData";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Method() {
  return (
    <section id="methode" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Méthode"
          title="Notre manière de travailler."
          description="Nous avançons étape par étape, avec des échanges clairs et une attention particulière aux vrais besoins du client."
          centered
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
            <div key={step} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-endrika-red text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <div className="mt-4 h-full min-h-16 w-px bg-endrika-gray/35" />
              </div>

              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-endrika-red">
                  Étape {index + 1}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-endrika-dark">
                  {step}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-endrika-muted">
                  Une étape claire pour avancer avec méthode, simplicité et
                  confiance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}