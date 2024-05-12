import React, { useContext } from "react";
import { CursorContext } from "../Context";

const Content = ({ cVariant, children }) => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <div
      className="content"
      onMouseEnter={() => mouseEnter(cVariant)}
      onMouseLeave={mouseLeave}
    >
      {children}
    </div>
  );
};

export default Content;
