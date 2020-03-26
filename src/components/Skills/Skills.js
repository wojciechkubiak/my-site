import React, { useState, useRef } from "react";
import { InView } from "react-intersection-observer";
import shortid from "shortid";
import SkillImg from "./../SkillImg/SkillImg";
import reactLogo from "./../../img/white_empty_react.webp";
import nodeLogo from "./../../img/white_empty_nodejs.webp";
import jsLogo from "./../../img/white_empty_js.webp";
import psqlLogo from "./../../img/white_empty_psql.webp";
import htmlLogo from "./../../img/white_empty_html.webp";
import cssLogo from "./../../img/white_empty_css.webp";
import bootstrapLogo from "./../../img/white_empty_bootstrap.webp";
import { gsap } from "gsap";
import "./Skills.css";

const Skills = props => {
  const [notAnimated, setNotAnimated] = useState(false);
  let skillItems = useRef(null);

  const icons = {
    ReactJS: [reactLogo, "reactjs"],
    NodeJS: [nodeLogo, "nodejs"],
    JavaScript: [jsLogo, "javascript"],
    Css: [cssLogo, "css"],
    Html: [htmlLogo, "html"],
    Bootstrap: [bootstrapLogo, "bootstrap"],
    PostgreSQL: [psqlLogo, "postgres"]
  };

  const anim = () => {
    gsap.fromTo(
      skillItems,
      { opacity: 0},
      { duration: 2, opacity: 1, ease: "slow (0.7, 0.7, false)", display: "flex", onComplete: function() {
        setNotAnimated(true);
      }}
    );
  }
  
  return (
    <InView
      as="div"
      data-testid="Skills"
      id="skills"
      onChange={(inView, entry) => {
        if(inView && !notAnimated) {
          anim();
        }
      }}
    >
      <h1>{props.t("skills.header", { framework: "react-i18next" })}</h1>
      <div ref={e=>{ skillItems = e }} className="skills--container">
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
