import React from "react";
import { projects } from "../data";
import { useTilt } from "../hooks";
import SectionHead from "./SectionHead";

const ToolArt = () => (
  <div className="art art--tool" aria-hidden="true">
    <div className="sheets">
      <span className="sheet sheet--1" />
      <span className="sheet sheet--2" />
      <span className="sheet sheet--3">
        <b>PDF</b>
      </span>
    </div>
  </div>
);

const ChessArt = () => (
  <div className="art art--chess" aria-hidden="true">
    <div className="mini-board" />
    <span className="mini-knight">♞</span>
  </div>
);

const Card = ({ project, index }) => {
  const tilt = useTilt(7);

  return (
    <div className="card-wrap reveal" style={{ "--d": `${index * 0.12}s` }}>
      <article
        className={"card card--" + project.id}
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        {project.id === "tooldy" ? <ToolArt /> : <ChessArt />}
        <div className="card-body">
          <div className="card-head">
            <h3 className="card-title">{project.title}</h3>
            {project.status && (
              <span className="status">
                <i aria-hidden="true" />
                {project.status}
              </span>
            )}
          </div>
          <p className="card-text">{project.summary}</p>
          <ul className="tags">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="card-links">
            {project.links.map((link, i) => (
              <a
                key={link.href}
                className={"btn btn--small" + (i > 0 ? " btn--ghost" : "")}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <span className="glare" aria-hidden="true" />
      </article>
    </div>
  );
};

const Projects = () => (
  <section className="section" id="work">
    <div className="wrap">
      <SectionHead
        no="01"
        label="Work"
        title={
          <>
            Things I&apos;ve <em>built</em>
          </>
        }
      />
      <div className="cards">
        {projects.map((project, i) => (
          <Card project={project} index={i} key={project.id} />
        ))}
      </div>
      <p className="more-work reveal">
        There is more on{" "}
        <a href="https://github.com/vlakhara" target="_blank" rel="noopener noreferrer">
          my GitHub
        </a>
        : a messenger clone, a WebRTC demo and a pile of small experiments.
      </p>
    </div>
  </section>
);

export default Projects;
