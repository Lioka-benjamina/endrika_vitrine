import { useEffect, useState } from "react";
import { projects } from "../../data/siteData";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

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
    <section id="realisations" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Réalisations"
          title="Des projets concrets, pensés pour des besoins réels."
          description="Quelques exemples de solutions que nous pouvons concevoir pour accompagner les entreprises dans leur transformation digitale."
          centered
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article>
            <div className="relative h-[420px] overflow-hidden rounded-xl">
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
            </div>

            <div className="mt-6 transition-all duration-700">
              <p className="text-sm font-semibold text-endrika-red">
                {activeProject.type}
              </p>

              <h3 className="mt-2 text-3xl font-semibold text-endrika-dark">
                {activeProject.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-endrika-muted">
                {activeProject.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-endrika-gray/30 px-3 py-1 text-xs font-medium text-endrika-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const isActive = activeProjectIndex === index;

              return (
                <button
                  key={project.title}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`block w-full border-b pb-8 text-left transition-colors duration-500 last:border-b-0 ${
                    isActive
                      ? "border-endrika-red"
                      : "border-endrika-gray/30"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold transition-colors duration-500 ${
                      isActive ? "text-endrika-red" : "text-endrika-muted"
                    }`}
                  >
                    0{index + 1} · {project.type}
                  </p>

                  <h3
                    className={`mt-2 text-2xl font-semibold transition-colors duration-500 ${
                      isActive ? "text-endrika-red" : "text-endrika-dark"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-endrika-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-endrika-muted"
                      >
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