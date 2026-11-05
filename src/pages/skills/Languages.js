import React from "react";
import JavaScriptIcon from "../../Icons/JavaScriptIcon";
import JavaIcon from "../../Icons/JavaIcon";
import TypeScriptIcon from "../../Icons/TypeScriptIcon";
import HtmlIcon from "../../Icons/HtmlIcon";
import CssIcon from "../../Icons/CssIcon";

const Languages = () => {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <p className="about-skill" style={{ letterSpacing: "3px" }}>
        #&nbsp;Languages
      </p>
      <div className="skill-row">
        <JavaScriptIcon />
        <JavaIcon />
        <TypeScriptIcon />
        <HtmlIcon />
        <CssIcon />
      </div>
    </div>
  );
};

export default Languages;
