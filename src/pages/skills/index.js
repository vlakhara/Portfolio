import React from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Frameworks from "./Frameworks.js";
import Languages from "./Languages.js";

const Skills = () => {
  return (
    <Header id="Skills">
      <Title id="Skills" page={2} />
      <Content cVariant="link">
        <Languages />
        <Frameworks />
      </Content>
    </Header>
  );
};

export default Skills;
