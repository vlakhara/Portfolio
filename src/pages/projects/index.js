import React, { useContext } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { CursorContext } from "../../Context";
import { projects } from "../../data";

const Projects = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Projects">
      <Title id="Projects" page={3} />
      <Content>
        <div className="cards">
          {projects.map((project) => (
            <article
              className="card"
              key={project.title}
              onMouseEnter={() => mouseEnter("link")}
              onMouseLeave={mouseLeave}
            >
              <div className="card-head">
                <h3 className="card-title">{project.title}</h3>
                {project.status && (
                  <span className="card-status">{project.status}</span>
                )}
              </div>
              <p className="card-summary">{project.summary}</p>
              <ul className="tags">
                {project.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="card-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className="more"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Content>
    </Header>
  );
};

export default Projects;
