import { useState, useEffect } from "react";
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

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("endrika-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <LangProvider>
      <div className="min-h-screen bg-endrika-bg text-endrika-dark dark:bg-[#0f0f0f] dark:text-white antialiased">
        <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
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
    </LangProvider>
  );
}

export default App;