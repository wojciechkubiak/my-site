import React from "react";
import "./LandingPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Nav } from "react-bootstrap";

const LandingPage = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9999
  });

  const changeTransparency = () => {
    props.headerHandler(inView);
  };

  //TODO: Scroll handler
  return (
    <div
      className="LandingPage"
      ref={ref}
      id="landing"
      data-testid="LandingPage"
      onWheel={changeTransparency}
    >
      <div className="LandingPageName">
        <h1>Wojciech Kubiak</h1>
        <p>Student</p>
        <Nav.Link href="#about">
          <MdKeyboardArrowDown className="ArrowDown" onClick={props.headerOn}></MdKeyboardArrowDown>
        </Nav.Link>
      </div>
    </div>
  );
};

export default LandingPage;
