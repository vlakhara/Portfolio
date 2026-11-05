import React, { useContext } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { CursorContext } from "../../Context";
import { experience } from "../../data";

const Experience = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  return (
    <Header id="Experience">
      <Title id="Experience" page={4} />
      <Content>
        <ol className="timeline">
          {experience.map((job) => (
            <li
              className="timeline-item"
              key={job.company}
              onMouseEnter={() => mouseEnter("link")}
              onMouseLeave={mouseLeave}
            >
              <h3 className="timeline-company">{job.company}</h3>
              {job.location && (
                <p className="timeline-location">{job.location}</p>
              )}
              <ul className="timeline-roles">
                {job.roles.map((role) => (
                  <li key={role.title}>
                    <span className="timeline-role">{role.title}</span>
                    <span className="timeline-period">{role.period}</span>
                  </li>
                ))}
              </ul>
              {job.highlights.length > 0 && (
                <ul className="timeline-highlights">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Content>
    </Header>
  );
};

export default Experience;
