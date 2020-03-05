import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import shortid from "shortid";
import SkillImg from "./../SkillImg/SkillImg";
import reactLogo from "./../../img/white_empty_react.png";
import nodeLogo from "./../../img/white_empty_nodejs.png";
import jsLogo from "./../../img/white_empty_js.png";
import psqlLogo from "./../../img/white_empty_psql.png";
import htmlLogo from "./../../img/white_empty_html.png";
import cssLogo from "./../../img/white_empty_css.png";
import bootstrapLogo from "./../../img/white_empty_bootstrap.png";
import "./Skills.css";

const Skills = props => {
  const [mode, setMode] = useState(["skills--container"]);

  const animHandler = value => {
    if (value) {
      setMode(["skills--container", "anim"]);
    }
  };

  const icons = {
    ReactJS: [reactLogo, 50],
    NodeJS: [nodeLogo, 50],
    JavaScript: [jsLogo, 60],
    PostgreSQL: [psqlLogo, 40],
    Html: [htmlLogo, 55],
    Css: [cssLogo, 60],
    Bootstrap: [bootstrapLogo, 60]
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
              progress={icons[key].slice(1, 2)}
            />
          );
        })}
      </div>
    </InView>
  );
};

export default Skills;
