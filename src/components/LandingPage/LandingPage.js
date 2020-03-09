import React from "react";
import "./LandingPage.css";

const LandingPage = props => {
  return (
    <div
      className="home"
      id="landing"
      data-testid="Home"
    >
      <div className="home--container">
        <h1>Wojciech Kubiak</h1>
        <p>{props.t("landing.pos", { framework: "react-i18next" })}</p>
      </div>
    </div>
  );
};

export default LandingPage;
