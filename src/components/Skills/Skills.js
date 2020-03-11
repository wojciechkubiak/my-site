import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import shortid from "shortid";
import SkillImg from "./../SkillImg/SkillImg";
import reactLogo from "./../../img/gold_empty_react.png";
import nodeLogo from "./../../img/gold_empty_nodejs.png";
import jsLogo from "./../../img/gold_empty_js.png";
import psqlLogo from "./../../img/gold_empty_psql.png";
import htmlLogo from "./../../img/gold_empty_html.png";
import cssLogo from "./../../img/gold_empty_css.png";
import bootstrapLogo from "./../../img/gold_empty_bootstrap.png";
import "./Skills.css";

const Skills = props => {
  const [mode, setMode] = useState(["skills--container"]);

  const animHandler = value => {
    if (value) {
      setMode(["skills--container", "anim"]);
    }
  };

  const icons = {
    ReactJS: [reactLogo, "reactjs"],
    NodeJS: [nodeLogo, "nodejs"],
    JavaScript: [jsLogo, "javascript"],
    Css: [cssLogo, "css"],
    Html: [htmlLogo, "html"],
    Bootstrap: [bootstrapLogo, "bootstrap"],
    PostgreSQL: [psqlLogo, "postgres"]
  };

  return (
    <InView
      as="div"
      data-testid="Skills"
      id="skills"
      onChange={(inView, entry) => animHandler(inView)}
    >
      <h1>{ props.t('skills.header', { framework: "react-i18next"}) }</h1>
      <div className={mode.join(" ")}>
        {Object.keys(icons).map(key => {
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
    </InView>
  );
};

export default Skills;
