import { teamMembers } from "../../data/siteData";
import { Container } from "../ui/Container";

export function Team() {
  return (
    <section id="equipe" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              Équipe
            </span>
          </div>

          <h2 className="text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            Les visages{" "}
            <span className="text-endrika-red">derrière</span>{" "}
            Endrika.
          </h2>

          <p className="mt-4 text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            Nous sommes quatre jeunes fondateurs avec des profils complémentaires,
            réunis par une même envie : créer des solutions digitales qui servent
            réellement les gens.
          </p>
        </div>

        {/* ── Members ── */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group text-center">

              {/* Circle image */}
              <div className="relative mx-auto h-52 w-52">
                <div className="absolute inset-0 rounded-full bg-endrika-red/10 blur-xl transition-all duration-300 group-hover:bg-endrika-red/20 group-hover:blur-2xl" />
                <img
                  src={member.image}
                  alt={`Portrait de ${member.name}`}
                  className="relative z-10 h-52 w-52 rounded-full object-cover"
                />
              </div>

              {/* Text below */}
              <div className="mt-6">
                <h3 className="text-[1.05rem] font-semibold text-endrika-dark dark:text-white">
                  {member.name}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-endrika-red">
                  {member.role}
                </p>

                <p className="mt-3 text-[0.84rem] leading-6 text-endrika-muted/70 dark:text-white/45">
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