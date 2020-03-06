import React from "react";
import { useInView} from "react-intersection-observer";
import "./LandingPage.css";

const LandingPage = props => {
  const [ref, inView] = useInView({
    threshold: 0.65
  });

  const changeTransparency = () => {
    inView ? props.headerOff() : props.headerOn();
    inView ? props.arrowHandler() : props.arrowHandler(true);
  };

  return (
    <div
      className="home"
      ref={ref}
      id="landing"
      data-testid="Home"
      onWheel={changeTransparency}
    >
      <div className="home--container">
        <h1>Wojciech Kubiak</h1>
        <p>{props.t("landing.pos", { framework: "react-i18next" })}</p>
      </div>
    </div>
  );
};

export default LandingPage;
