import React from "react";
import "./LandingPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const LandingPage = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.98
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
        <h2>{`Header inside viewport ${inView}. ${props.headerMode}`}</h2>
        {/* <button className="BtnInfo">More</button> */}
        <MdKeyboardArrowDown
          className="ArrowDown"
        />
      </div>
    </div>
  );
};

export default LandingPage;
