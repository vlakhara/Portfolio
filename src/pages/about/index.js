import { useContext } from "react";
import { CursorContext } from "../../Context";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Content from "../../components/Content";

const About = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Introduction">
      <Title id="Introduction" page={1} />
      <Content cVariant="link">
        <p className="spaced-text">
          You are probably thinking who am I, don't you?
        </p>
        <p className="spaced-text">No? Maybe because you know me.</p>
        <div className="intro">
          <p className="intro-start spaced-text">Let me tell you a bit more,</p>
          <p className="intro-main spaced-text">
            I'm <s>The</s> <name>Vipul Lakhara</name>, A Full Stack Developer
            from Gujarat, India. I work with{" "}
            <span className="about-skill first">React JS</span>,
            <span className="about-skill">Node JS</span>,
            <span className="about-skill">Express JS</span>,
            <span className="about-skill">Next JS</span> and
            <span className="about-skill last">Spring Boot</span>
          </p>
        </div>
      </Content>
    </Header>
  );
};

export default About;
