import React, { Component } from "react";
import "./Skills.css";
import { InView } from "react-intersection-observer";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ["SkillsContainer"]
    };
    this.changeClass = this.changeClass.bind(this);
  }

  changeClass = val => {
    if (val) {
      this.setState({ mode: ["SkillsContainer", "SkillsAnim"] }, () =>
        console.log(this.state.mode)
      );
    }
  };

  render() {
    return (
      <InView
        as="div"
        data-testid="Skills"
        id="skills"
        onChange={(inView, entry) => this.changeClass(inView)}
      >
        <h1>Skills</h1>
        <div className={this.state.mode.join(" ")}>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_react.png")}
              alt="React-icon"
            />
            {/* <p>ReactJS</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_nodejs.png")}
              alt="NodeJS-icon"
            />
            {/* <p>NodeJS</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              onClick={() => {
                alert("121");
              }}
              src={require("./../../img/black_empty_js.png")}
              alt="React-icon"
            />
            {/* <p>Javascript</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_psql.png")}
              alt="PostgreSQL-icon"
            />
            {/* <p>PostgreSQL</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_html.png")}
              alt="HTML-icon"
            />
            {/* <p>HTML5</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_css.png")}
              alt="CSS-icon"
            />
            {/* <p>CSS</p> */}
          </span>
          <span className="SkillsSpan">
            <img
              className="ImageStyle"
              src={require("./../../img/black_empty_bootstrap.png")}
              alt="Bootstrap-icon"
            />
            {/* <p>Bootstrap</p> */}
          </span>
        </div>
      </InView>
    );
  }
}

export default Skills;
