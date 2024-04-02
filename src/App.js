import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { motion } from "framer-motion";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const getCommonCursorStyle = (reduce = 0) => ({});

  const variants = {
    default: { left: mousePosition.x - 16, top: mousePosition.y - 16 },
    headerText: {
      height: 100,
      width: 100,
      left: mousePosition.x - 50,
      top: mousePosition.y - 50,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
    name: {
      height: 150,
      width: 150,
      left: mousePosition.x - 75,
      top: mousePosition.y - 75,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
  };

  const mouseEnter = (type) => {
    setCursorVariant(type);
  };
  const mouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <div className="app">
      <div className="cursor" style={{ ...variants[cursorVariant] }}></div>
      <Header mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <Home mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <div
        id="Projects"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Projects
      </div>
      <div
        id="Experience"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About
      </div>
      <div
        id="Connect"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Connect
      </div>
    </div>
  );
};

export default App;
