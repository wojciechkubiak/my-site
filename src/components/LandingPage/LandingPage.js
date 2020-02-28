import React from "react";
import "./LandingPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import {Nav} from "react-bootstrap";

const LandingPage = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9999
  });

  const changeTransparency = () => {
    props.headerHandler(inView)
  }

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
  
        {/* TODO: Button scroll onClick  */}
        <MdKeyboardArrowDown
          className="ArrowDown"><Nav.Link href="#about" ></Nav.Link></MdKeyboardArrowDown>
        
      </div>
    </div>
  );
};

export default LandingPage;
