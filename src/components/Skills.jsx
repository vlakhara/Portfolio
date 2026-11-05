import React from "react";
import {
  SiDocker,
  SiElasticsearch,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import BrandIcon from "../Icons/BrandIcon";
import CssIcon from "../Icons/CssIcon";
import ExpressJsIcon from "../Icons/ExpressJsIcon";
import HtmlIcon from "../Icons/HtmlIcon";
import JavaIcon from "../Icons/JavaIcon";
import JavaScriptIcon from "../Icons/JavaScriptIcon";
import ReactIcon from "../Icons/ReactIcon";
import SpringBootIcon from "../Icons/SpringBootIcon";
import TailwindCssIcon from "../Icons/TailwindCssIcon";
import TypeScriptIcon from "../Icons/TypeScriptIcon";
import SectionHead from "./SectionHead";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Java", icon: JavaIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: () => <BrandIcon icon={SiNextdotjs} /> },
      { name: "Node.js", icon: () => <BrandIcon icon={SiNodedotjs} /> },
      { name: "Express", icon: ExpressJsIcon },
      { name: "Spring Boot", icon: SpringBootIcon },
      { name: "Tailwind", icon: TailwindCssIcon },
    ],
  },
  {
    title: "Data and tools",
    items: [
      { name: "PostgreSQL", icon: () => <BrandIcon icon={SiPostgresql} /> },
      { name: "Elasticsearch", icon: () => <BrandIcon icon={SiElasticsearch} /> },
      { name: "MongoDB", icon: () => <BrandIcon icon={SiMongodb} /> },
      { name: "Docker", icon: () => <BrandIcon icon={SiDocker} /> },
      { name: "Git", icon: () => <BrandIcon icon={SiGit} /> },
    ],
  },
];

const Skills = () => (
  <section className="section" id="skills">
    <div className="wrap">
      <SectionHead
        no="02"
        label="Skills"
        title={
          <>
            What I <em>build</em> with
          </>
        }
      />
      <div className="skill-groups">
        {groups.map((group, g) => (
          <div className="skill-group reveal" style={{ "--d": `${g * 0.1}s` }} key={group.title}>
            <h3 className="group-title">{group.title}</h3>
            <ul className="tiles">
              {group.items.map(({ name, icon: Icon }) => (
                <li className="tile" key={name}>
                  <span className="tile-icon">
                    <Icon height={34} width={34} />
                  </span>
                  <span className="tile-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
