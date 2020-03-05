import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import "./About.css";

const About = props => {
  const [mode, setMode] = useState(["about--container"]);

  const animHandler = value => {
    if (value) {
      setMode(["about--container", "anim"]);
    }
  };

  return (
    <InView
      as="div"
      data-testid="About"
      id="about"
      onChange={(inView, entry) => animHandler(inView)}
    >
      <div className={mode.join(" ")}>
        <img
          className="about--img"
          alt="Writing"
          src={require("./../../img/writing.png")}
        ></img>
        <h1>{props.t("aboutme.header", { framework: "react-i18next" })}</h1>
        <div className="about--txt">
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </div>
      </div>
    </InView>
  );
};

export default About;
