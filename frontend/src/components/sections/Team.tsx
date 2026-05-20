import { teamMembers } from "../../data/siteData";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Team() {
  return (
    <section id="equipe" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Équipe"
          title="Les visages derrière Endrika."
          description="Nous sommes quatre jeunes fondateurs avec des profils complémentaires, réunis par une même envie : créer des solutions digitales qui servent réellement les gens."
          centered
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
  {teamMembers.map((member) => (
    <article
      key={member.name}
      className="text-center"
    >
      <img
        src={member.image}
        alt={`Portrait de ${member.name}`}
        className="mx-auto h-56 w-56 rounded-full object-cover"
      />

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-endrika-dark">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-endrika-red">
          {member.role}
        </p>

        <p className="mt-4 text-sm leading-7 text-endrika-muted">
          {member.description}
        </p>
      </div>
    </article>
  ))}
</div>
      </Container>
    </section>
  );
}