import React from "react";
import "./../Skills/Skills.css";
import { ProgressBar } from "react-bootstrap";
import shortid from "shortid";

const SkillImg = props => {
  return (
    <>
      <span className="skills--span">
        <img className="skills--img" src={props.imgUrl} alt="React-icon" />
        <h4 className="skills--technology-header">{props.technology}</h4>
        <ProgressBar>
          <ProgressBar
            striped
            variant="warning"
            now={props.progress}
            key={shortid.generate()}
          />
          <ProgressBar
            variant="dark"
            now={100 - parseInt(props.progress)}
            key={shortid.generate()}
          />
        </ProgressBar>
      </span>
    </>
  );
};

export default SkillImg;
