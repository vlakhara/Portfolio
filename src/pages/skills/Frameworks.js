import React from "react";
import { SiNextdotjs, SiNodedotjs } from "react-icons/si";
import BrandIcon from "../../Icons/BrandIcon";
import ExpressJsIcon from "../../Icons/ExpressJsIcon";
import ReactIcon from "../../Icons/ReactIcon";
import SpringBootIcon from "../../Icons/SpringBootIcon";
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
          flexWrap: "wrap",
          gap: "2rem",
          marginLeft: "15px",
        }}
      >
        <ReactIcon />
        <BrandIcon icon={SiNextdotjs} label="Next JS" />
        <BrandIcon icon={SiNodedotjs} label="Node JS" />
        <ExpressJsIcon />
        <SpringBootIcon />
        <TailwindCssIcon />
      </div>
    </div>
  );
};

export default Frameworks;
