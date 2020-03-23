import React from "react";
import "./LandingPage.css";

const LandingPage = props => {
  return (
    <div className="home" id="landing" data-testid="Home">
      <section className="home--container">
        <h1>
          Wojciech Kubiak
        </h1>
        <article>
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
      </section>
      <div className="image--holder" style={{width: "50em", height: "50em", position: "absolute", right: "0em", top: "0em"}}></div>
    </div>
  );
};

export default LandingPage;
