import React, { useContext } from "react";
import { CursorContext } from "../Context";

const Cursor = () => {
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
    iconLink: {
      height: 25,
      width: 25,
      left: mousePosition.x - 12.5,
      top: mousePosition.y - 12.5,
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
    skills: {
      height: 150,
      width: 150,
      left: mousePosition.x - 75,
      top: mousePosition.y - 75,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
  };

  return <div className="cursor" style={{ ...variants[cursorVariant] }}></div>;
};

export default Cursor;
