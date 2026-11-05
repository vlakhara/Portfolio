import React from "react";
import {
  SiDocker,
  SiElasticsearch,
  SiGit,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import BrandIcon from "../../Icons/BrandIcon";

const Databases = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <p className="about-skill" style={{ letterSpacing: "3px" }}>
        #&nbsp;Databases and Tools
      </p>
      <div className="skill-row">
        <BrandIcon icon={SiPostgresql} label="PostgreSQL" />
        <BrandIcon icon={SiElasticsearch} label="Elasticsearch" />
        <BrandIcon icon={SiMongodb} label="MongoDB" />
        <BrandIcon icon={SiDocker} label="Docker" />
        <BrandIcon icon={SiGit} label="Git" />
      </div>
    </div>
  );
};

export default Databases;
