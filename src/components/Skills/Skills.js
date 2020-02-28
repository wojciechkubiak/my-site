import React from "react";
import "./Skills.css";

//TODO: Info onClick on skill img
const Skills = () => (
  <div className="Skills" id="skills">
    <h1>Skills</h1>
    <div className="SkillsContainer">
    <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_react.png')} alt="React-icon" />
        {/* <p>ReactJS</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_nodejs.png')} alt="NodeJS-icon" />
        {/* <p>NodeJS</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" onClick={() => {alert('121')}} src={require('./../../img/white_empty_js.png')} alt="React-icon" />
        {/* <p>Javascript</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_psql.png')} alt="PostgreSQL-icon" />
        {/* <p>PostgreSQL</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_html.png')} alt="HTML-icon" />
        {/* <p>HTML5</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_css.png')} alt="CSS-icon" />
        {/* <p>CSS</p> */}
      </span>
      <span className="SkillsSpan">
        <img className="ImageStyle" src={require('./../../img/white_empty_bootstrap.png')} alt="Bootstrap-icon" />
        {/* <p>Bootstrap</p> */}
      </span>
    </div>
  </div>
);

export default Skills;
