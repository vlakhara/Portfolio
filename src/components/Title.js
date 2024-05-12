import React, { useContext } from "react";
import { CursorContext } from "../Context";

import { scrollToTop } from "../utils";

const Title = ({ id, page }) => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <div
      className="head"
      onMouseEnter={() => mouseEnter("link")}
      onMouseLeave={mouseLeave}
    >
      <p className="marker">
        <span onClick={() => scrollToTop(id)}>#{page}</span>
      </p>
      <p className="title">{id}</p>
    </div>
  );
};

export default Title;
