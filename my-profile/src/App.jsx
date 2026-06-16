import { useState, useEffect } from "react";
import "./styles/globals.css";

import BgDecor    from "./components/BgDecor";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Contact    from "./components/Contact";

export default function App() {
  const [active, setActive]   = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <>
      <BgDecor />
      <Navbar active={active} scrolled={scrolled} onNavClick={scrollTo} />
      <Hero      onScrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
