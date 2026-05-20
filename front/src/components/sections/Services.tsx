import { services } from "../../data/siteData";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Des solutions digitales pensées pour être utiles."
          description="Nous concevons des outils clairs, modernes et adaptés aux réalités de chaque entreprise."
          centered
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-endrika-gray/25 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-endrika-red/40"
            >
              <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-endrika-bg text-sm font-semibold text-endrika-red">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold text-endrika-dark">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-endrika-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}