import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
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
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("endrika-theme");

    // si déjà sauvegardé
    if (saved) {
      return saved === "dark";
    }

    // défaut = light
    return false;
  });
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("endrika-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <BrowserRouter>
      <LangProvider>
        <div className="min-h-screen bg-endrika-bg text-endrika-dark dark:bg-[#0f0f0f] dark:text-white antialiased">
          <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Services />
                    <Team />
                    <Method />
                    <Projects />
                    <Values />
                    <Contact />
                  </>
                }
              />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/developpement-web" element={<ServiceDetailPage slug="developpement-web" />} />
              <Route path="/services/applications-mobiles" element={<ServiceDetailPage slug="applications-mobiles" />} />
              <Route path="/services/digitalisation" element={<ServiceDetailPage slug="digitalisation" />} />
              <Route path="/services/design-ui-ux" element={<ServiceDetailPage slug="design-ui-ux" />} />
              <Route path="/services/maintenance" element={<ServiceDetailPage slug="maintenance" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;