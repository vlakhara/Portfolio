import React from "react";
import { experience } from "../data";
import SectionHead from "./SectionHead";

// The career as a road with stops.
const Experience = () => (
  <section className="section" id="route">
    <div className="wrap">
      <SectionHead
        no="03"
        label="Experience"
        title={
          <>
            The <em>route</em> so far
          </>
        }
      />
      <ol className="route">
        {experience.map((stop, i) => (
          <li
            className={"stop reveal" + (stop.current ? " stop--now" : "")}
            style={{ "--d": `${i * 0.1}s` }}
            key={`${stop.company}-${stop.role}`}
          >
            <span className="pin" aria-hidden="true" />
            <div className="stop-card">
              <p className="stop-meta">
                <span>{stop.period}</span>
                {stop.place && <span>{stop.place}</span>}
                {stop.current && <span className="now">You are here</span>}
              </p>
              <h3 className="stop-company">{stop.company}</h3>
              <p className="stop-role">{stop.role}</p>
              {stop.highlights.length > 0 && (
                <ul className="stop-points">
                  {stop.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
