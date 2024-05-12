import React, { useContext } from "react";
import { CursorContext } from "../Context";
import { cursorVariants } from "../utils";

const Cursor = () => {
  const { cursorVariant, mousePosition } = useContext(CursorContext);

  return (
    <div
      className="cursor"
      style={{ ...cursorVariants(cursorVariant, mousePosition) }}
    />
  );
};

export default Cursor;
