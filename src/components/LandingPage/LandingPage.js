import React from "react";
import "./LandingPage.css";

const LandingPage = props => {
  return (
    <div className="home" id="landing" data-testid="Home">
      <section className="home--container">
        <h1>
          Wojciech
          <br />
          Kubiak
        </h1>
        <article>
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
      </section>
    </div>
  );
};

export default LandingPage;
