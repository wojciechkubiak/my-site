import React from 'react';
import './LandingPage.css';
import {MdKeyboardArrowDown} from "react-icons/md"
//import {Button} from "react-bootstrap"

const LandingPage = () => (
  <div className="LandingPage" data-testid="LandingPage">
    <img className="CompImg" src={require('./../../img/comp.png')}></img>
    <div className="LandingPageName">
      <h1>Wojciech Kubiak</h1>
      <p>Student</p>
    </div>
    <button className="BtnInfo">Więcej</button>
    <MdKeyboardArrowDown className="ArrowDown"/>
  </div>
);

export default LandingPage;
