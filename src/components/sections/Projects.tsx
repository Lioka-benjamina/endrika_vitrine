import { useEffect, useState } from "react";
import { projects } from "../../data/siteData";
import { Container } from "../ui/Container";

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="realisations" className="relative overflow-hidden bg-endrika-bg py-24 dark:bg-[#0f0f0f] sm:py-28">

      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-endrika-red/8 blur-[120px] dark:bg-endrika-red/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-endrika-red/5 blur-[100px]"
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-endrika-red/20 bg-white px-4 py-1.5 dark:bg-white/5 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-endrika-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-endrika-muted dark:text-white/60">
              Réalisations
            </span>
          </div>

          <h2 className="text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-endrika-dark dark:text-white sm:text-[2.4rem]">
            Des projets{" "}
            <span className="text-endrika-red">concrets,</span>{" "}
            pensés pour des besoins réels.
          </h2>

          <p className="mt-4 text-[1rem] leading-7 text-endrika-muted/75 dark:text-white/50">
            Quelques exemples de solutions que nous pouvons concevoir pour
            accompagner les entreprises dans leur transformation digitale.
          </p>
        </div>

        {/* ── Content ── */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* Left: image + details */}
          <article>
            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/10">
              {projects.map((project, index) => (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                    activeProjectIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              {/* Progress dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProjectIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeProjectIndex === i
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project info */}
            <div className="mt-6 transition-all duration-700">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-endrika-red">
                {activeProject.type}
              </p>

              <h3 className="mt-2 text-[1.6rem] font-bold leading-snug tracking-[-0.01em] text-endrika-dark dark:text-white">
                {activeProject.title}
              </h3>

              <p className="mt-3 max-w-2xl text-[0.875rem] leading-7 text-endrika-muted/75 dark:text-white/50">
                {activeProject.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[0.75rem] font-medium text-endrika-muted dark:border-white/10 dark:bg-white/5 dark:text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Right: project list */}
          <div className="space-y-0">
            {projects.map((project, index) => {
              const isActive = activeProjectIndex === index;
              return (
                <button
                  key={project.title}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`
                    group block w-full border-b py-6 text-left transition-all duration-300
                    last:border-b-0
                    ${isActive
                      ? "border-endrika-red/40 dark:border-endrika-red/30"
                      : "border-black/[0.06] hover:border-endrika-red/20 dark:border-white/10"
                    }
                  `}
                >
                  <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive ? "text-endrika-red" : "text-endrika-muted/50 group-hover:text-endrika-red/70 dark:text-white/30"
                  }`}>
                    0{index + 1} · {project.type}
                  </p>

                  <h3 className={`mt-1.5 text-[1.1rem] font-semibold leading-snug transition-colors duration-300 ${
                    isActive ? "text-endrika-red" : "text-endrika-dark group-hover:text-endrika-dark/80 dark:text-white dark:group-hover:text-white/80"
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`mt-2 text-[0.82rem] leading-6 text-endrika-muted/65 dark:text-white/40 transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    {project.description}
                  </p>

                  <div className={`mt-2.5 flex flex-wrap gap-2 transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[0.72rem] font-medium text-endrika-muted/50 dark:text-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}