import React, { useContext } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { CursorContext } from "../../Context";
import { scrollToTop } from "../../utils";

const About = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Introduction">
      <Title id="Introduction" page={1} />
      <Content>
        <p
          className="spaced-text"
          onMouseLeave={mouseLeave}
          onMouseEnter={() => mouseEnter("link")}
        >
          You are probably thinking who am I, don't you?
        </p>
        <p
          className="spaced-text"
          onMouseLeave={mouseLeave}
          onMouseEnter={() => mouseEnter("link")}
        >
          No? Maybe because you know me.
        </p>
        <div
          className="intro"
          onMouseLeave={mouseLeave}
          onMouseEnter={() => mouseEnter("link")}
        >
          <p className="intro-start spaced-text">
            Still, Let me tell you a bit more,
          </p>
          <p className="intro-main spaced-text">
            I'm <s>The</s> <name>Vipul Lakhara</name>, A Full Stack Developer
            from Gujarat, India. I work with{" "}
            <span className="about-skill first">React JS</span>,
            <span className="about-skill">Node JS</span>,
            <span className="about-skill">Express JS</span>,
            <span className="about-skill">Next JS</span>
            <span className="about-skill last">Spring Boot</span> and
            <a
              className="more"
              href="#skills"
              onClick={() => scrollToTop("Skills")}
            >
              more...
            </a>
          </p>
        </div>
      </Content>
    </Header>
  );
};

export default About;
