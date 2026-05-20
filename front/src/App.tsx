import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Method } from "./components/sections/Method";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Values } from "./components/sections/Values";

function App() {
  return (
    <div className="min-h-screen bg-endrika-bg text-endrika-dark antialiased">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Method />
        <Projects />
        <Values />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;