import { useContext } from "react";
import { CursorContext } from "../../Context";
import { scrollToTop } from "../../utils";
import Header from "../../components/Header";
import Title from "../../components/Title";

const Projects = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Projects">
      <Title id="Projects" page={3} />
    </Header>
  );
};

export default Projects;
