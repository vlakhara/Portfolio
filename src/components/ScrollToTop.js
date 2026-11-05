import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CursorContext } from "../Context";

import { scrollToTop } from "../utils";

const ScrollToTop = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <div
      className="scroll-top"
      onMouseEnter={() => mouseEnter("scrollToTop")}
      onMouseLeave={mouseLeave}
    >
      <a href="#home" onClick={() => scrollToTop("home")}>
        <FontAwesomeIcon
          style={{ color: "var(--IRed)", opacity: 1, fontSize: "18px" }}
          icon={faAngleDoubleUp}
        />
      </a>
    </div>
  );
};

export default ScrollToTop;
