import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Parlons de votre projet."
              description="Vous avez une idée, un besoin ou un projet à structurer ? Écrivez-nous simplement, nous prendrons le temps d’en discuter avec clarté."
            />

            <div className="mt-8 space-y-4 text-sm text-endrika-muted">
              <p>
                <strong className="text-endrika-dark">Email :</strong>{" "}
                contact@endrika.mg
              </p>
              <p>
                <strong className="text-endrika-dark">Téléphone :</strong>{" "}
                +261 34 00 000 00
              </p>
              <p>
                <strong className="text-endrika-dark">WhatsApp :</strong>{" "}
                +261 34 00 000 00
              </p>
              <p>
                <strong className="text-endrika-dark">Localisation :</strong>{" "}
                Madagascar
              </p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-endrika-gray/25 bg-white p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-endrika-dark">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-endrika-gray/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-endrika-red"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-endrika-dark">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-endrika-gray/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-endrika-red"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-endrika-dark">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-endrika-gray/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-endrika-red"
                  placeholder="+261 ..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-endrika-dark">
                  Type de projet
                </label>
                <select className="w-full rounded-2xl border border-endrika-gray/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-endrika-red">
                  <option>Site web</option>
                  <option>Application mobile</option>
                  <option>Digitalisation</option>
                  <option>Design UI/UX</option>
                  <option>Accompagnement</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-endrika-dark">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full resize-none rounded-2xl border border-endrika-gray/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-endrika-red"
                placeholder="Parlez-nous brièvement de votre projet..."
              />
            </div>

            <div className="mt-6">
              <Button href="#">Envoyer le message</Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}