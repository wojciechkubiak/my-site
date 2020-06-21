import React, { useRef, useEffect } from "react";
import shortid from "shortid";
import { gsap } from "gsap";
import { isMobile } from "react-device-detect";
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
  let container = useRef(null);

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

  let skillsItem = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      gsap.fromTo(
        container,
        {
          left: -(1.5 * window.innerWidth),
        },
        {
          duration: 1,
          left: 0,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (props.hide && !isMobile) {
      gsap.fromTo(
        container,
        {
          left: 0,
        },
        {
          duration: 1,
          left: -(1.5 * window.innerWidth)
        }
      );
    }
  }, [props.hide]);

  return (
    <div id="skills" ref={(e) => (container = e)}>
      <div
        className="skills--container"
        style={{ opacity: "1" }}
        ref={(e) => (skillsItem = e)}
      >
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
