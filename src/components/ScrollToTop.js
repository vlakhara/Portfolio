import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CursorContext } from "../Context";

import { scrollToTop } from "../utils";

const ScrollToTop = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <div
      style={{
        position: "fixed",
        background: "var(--dark)",
        top: "3rem",
        right: "3rem",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => scrollToTop("home")}
      onMouseEnter={() => mouseEnter("link")}
      onMouseLeave={mouseLeave}
    >
      <FontAwesomeIcon
        style={{ color: "var(--IRed)", opacity: 1, fontSize: "18px" }}
        icon={faAngleDoubleUp}
      />
    </div>
  );
};

export default ScrollToTop;
