import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import "./About.css";

const About = props => {
  const [mode, setMode] = useState(["AboutContainer"]);

  const animHandler = value => {
    if (value) {
      setMode(["AboutContainer", "AboutAnim"]);
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
          className="AboutImg"
          alt="Writing"
          src={require("./../../img/writing.png")}
        ></img>
        <h1>{props.t("aboutme.header", { framework: "react-i18next" })}</h1>
        <div className="AboutText">
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </div>
      </div>
    </InView>
  );
};

export default About;
