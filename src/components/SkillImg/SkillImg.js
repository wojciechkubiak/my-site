import React from "react";
import "./../Skills/Skills.css";

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
      </span>
    </div>
  );
};

export default SkillImg;
