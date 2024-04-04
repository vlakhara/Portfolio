import React, { useContext } from "react";
import { CursorContext } from "./Context";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const { cursorVariant, mousePosition } = useContext(CursorContext);

  const variants = {
    default: { left: mousePosition.x - 16, top: mousePosition.y - 16 },
    link: {
      height: 60,
      width: 60,
      left: mousePosition.x - 30,
      top: mousePosition.y - 30,
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

  return (
    <div
      className="app"
      onContextMenu={() => {
        return null;
      }}
    >
      <div className="cursor" style={{ ...variants[cursorVariant] }}></div>
      <Header />
      <Home />
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
