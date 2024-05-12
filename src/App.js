import React, { useContext } from "react";
import { CursorContext } from "./Context";
import Socials from "./components/Socials";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Cursor />
      <Socials />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
