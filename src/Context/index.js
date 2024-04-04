import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext({
  mousePosition: {},
  cursorVariant: "",
  mouseEnter: (type) => {},
  mouseLeave: () => {},
});

const Provider = ({ children }) => {
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

  const mouseEnter = (type) => {
    setCursorVariant(type);
  };
  const mouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariant, mouseEnter, mouseLeave, mousePosition }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default Provider;
