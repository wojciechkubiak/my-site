import React from 'react';
import './LandingPage.css';
import {MdKeyboardArrowDown} from "react-icons/md"

const LandingPage = () => (
  <div className="LandingPage" data-testid="LandingPage">
    {/* <img className="CompImg" alt="Computer" src={require('./../../img/comp.png')} ></img> */}
    <div className="LandingPageName">
      <h1>Wojciech Kubiak</h1>
      <p>Student</p>
    </div>
    <button className="BtnInfo">More</button>
    <MdKeyboardArrowDown className="ArrowDown"/>
  </div>
);

export default LandingPage;
