import React from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";

const Skills = () => {
  return (
    <Header id="Skills">
      <Title id="Skills" page={2} />
      <Content cVariant="link">
        <p className="spaced-text">
          Which languages, frameworks, libraries and tools do I know ?
        </p>
        <p className="spaced-text">What have I learned ?</p>
      </Content>
    </Header>
  );
};

export default Skills;
