import React from "react";
import ReactIcon from "../../Icons/ReactIcon";
import SpringBootIcon from "../../Icons/SpringBootIcon";
import ExpressJsIcon from "../../Icons/ExpressJsIcon";
import TailwindCssIcon from "../../Icons/TailwindCssIcon";

const Frameworks = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <p className="about-skill" style={{ letterSpacing: "3px" }}>
        #&nbsp;Frameworks and Libraries
      </p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "2rem",
          marginLeft: "15px",
        }}
      >
        <ReactIcon />
        <SpringBootIcon />
        <ExpressJsIcon />
        <TailwindCssIcon />
      </div>
    </div>
  );
};

export default Frameworks;
