import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Nav } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = props => {
  const [ref, inView] = useInView({
    threshold: 0.95
  });

  const changeTransparency = () => {
    inView ? props.headerOff() : props.headerOn();
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
        <Nav.Link href="#about">
          <MdKeyboardArrowDown
            className="home--arrow"
            onClick={props.headerOn}
          ></MdKeyboardArrowDown>
        </Nav.Link>
      </div>
    </div>
  );
};

export default LandingPage;
