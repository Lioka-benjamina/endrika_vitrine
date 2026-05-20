import { values } from "../../data/siteData";
import { Container } from "../ui/Container";

const taglines: Record<string, string> = {
  Clarté: "Pas de jargon, que de l'essentiel",
  Confiance: "On livre ce qu'on promet",
  Utilité: "Chaque fonctionnalité a sa raison",
  Créativité: "On cherche toujours mieux",
  Proximité: "On connaît les gens qu'on aide",
  Qualité: "Le détail, c'est notre métier",
};

export function Values() {
  return (
    <section id="valeurs" className="py-20 sm:py-24">
      <Container>
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-gray-400 font-normal mb-3">
              Valeurs
            </p>
            <h2 className="font-serif text-[clamp(30px,5vw,42px)] leading-[1.1] text-gray-900 font-normal mb-4 max-w-[340px]">
              Ce qui guide{" "}
              <em className="italic text-endrika-red">Endrika.</em>
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[260px] font-light">
              Nous construisons chaque projet avec une attention particulière à
              la clarté, à l'utilité et à la relation humaine.
            </p>
          </div>

        </div>

        {/* Top divider */}
        <div className="w-full h-px bg-gray-200" />

        {/* Values list */}
        <ul className="divide-y divide-gray-100">
          {values.map((value, i) => (
            <li
              key={value}
              className="group relative flex items-center gap-6 py-5 overflow-hidden transition-[padding-left] duration-300 ease-out hover:pl-2.5"
            >
              <span className="w-5 flex-shrink-0 text-[11px] text-gray-300 font-normal">
                {String(i + 1).padStart(2, "0")}
              </span>


              <span className="flex-1 font-serif text-[clamp(22px,3.5vw,30px)] italic font-normal text-gray-900 leading-tight">
                {value}
              </span>

              <span className="hidden sm:block flex-shrink-0 text-right text-[12px] text-gray-400 font-light">
                {taglines[value] ?? ""}
              </span>

              <span
                aria-hidden="true"
                className="absolute right-0 top-0 bottom-0 w-[3px] bg-endrika-red opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}