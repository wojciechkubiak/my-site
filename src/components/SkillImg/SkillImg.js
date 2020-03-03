import React from "react";
import "./../Skills/Skills.css";
import {ProgressBar} from "react-bootstrap"

const SkillImg = props => { 
  return (
    <div className="SkillsSpan">
      <span>
        <img
          className="ImageStyle"
          src={props.imgUrl}
          alt="React-icon"
          onMouseOver={props.showInfoHandler}
          onMouseOut={props.showInfoHandler}
        />
        <h4 className="TechnologyHeader">{props.technology}</h4>       
        <ProgressBar>
          <ProgressBar striped variant="warning" now={props.progress} key={1} />
          <ProgressBar variant="dark" now={100 - parseInt(props.progress)} key={2} />
        </ProgressBar>
      </span>
    </div>
  );  
};

export default SkillImg;
