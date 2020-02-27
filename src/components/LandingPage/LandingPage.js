import React, { Component } from "react";
import "./LandingPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";

class LandingPage extends Component {
  scrollTo = () => {
    alert("Scrolling function");
  };

  render() {
    return (
      <div className="LandingPage" id="landing" data-testid="LandingPage">
        {/* <img className="CompImg" alt="Computer" src={require('./../../img/comp.png')} ></img> */}
        <div className="LandingPageName">
          <h1>Wojciech Kubiak</h1>
          <p>Student</p>
          {/* <button className="BtnInfo">More</button> */}
          <MdKeyboardArrowDown className="ArrowDown" onClick={this.scrollTo} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
