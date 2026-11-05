import React from "react";
import BikeRoad from "./components/BikeRoad";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import OffTheClock from "./components/OffTheClock";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useReveal } from "./hooks";

const App = () => {
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Cursor />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Experience />
        <OffTheClock />
        <Contact />
      </main>
      <BikeRoad />
    </>
  );
};

export default App;
