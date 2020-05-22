import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import shortid from "shortid";
import SkillImg from "./../SkillImg/SkillImg";
import reactLogo from "./../../img/white_empty_react.webp";
import nodeLogo from "./../../img/white_empty_nodejs.webp";
import jsLogo from "./../../img/white_empty_js.webp";
import psqlLogo from "./../../img/white_empty_psql.webp";
import htmlLogo from "./../../img/white_empty_html.webp";
import cssLogo from "./../../img/white_empty_css.webp";
import bootstrapLogo from "./../../img/white_empty_bootstrap.webp";
import typescriptLogo from "./../../img/white_empty_typescript.webp";
import "./Skills.css";

const Skills = (props) => {
  const icons = {
    ReactJS: [reactLogo, "reactjs"],
    NodeJS: [nodeLogo, "nodejs"],
    JavaScript: [jsLogo, "javascript"],
    TypeScript: [typescriptLogo, "typescript"],
    Css: [cssLogo, "css"],
    Html: [htmlLogo, "html"],
    Bootstrap: [bootstrapLogo, "bootstrap"],
    PostgreSQL: [psqlLogo, "postgres"],
  };

  return (
    <div id="skills">
      <div className="skills--container">
        {Object.keys(icons).map((key) => {
          return (
            <SkillImg
              key={shortid.generate()}
              imgUrl={icons[key][0]}
              technology={key}
              name={icons[key].slice(1, 2)}
              t={props.t}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
