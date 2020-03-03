import React from "react";
import "./../Skills/Skills.css";
import { ProgressBar } from "react-bootstrap";

class SkillImg extends React.PureComponent {
  render() {
    return (
      <>
        <span className="SkillsSpan">
          <img
            className="ImageStyle"
            src={this.props.imgUrl}
            alt="React-icon"
            onMouseOver={this.props.showInfoHandler}
            onMouseOut={this.props.showInfoHandler}
          />
          <h4 className="TechnologyHeader">{this.props.technology}</h4>
          <ProgressBar>
            <ProgressBar
              striped
              variant="warning"
              now={this.props.progress}
              key={`pb1`}
            />
            <ProgressBar
              variant="dark"
              now={100 - parseInt(this.props.progress)}
              key={`pb2`}
            />
          </ProgressBar>
        </span>
      </>
    );
  }
}

export default SkillImg;
