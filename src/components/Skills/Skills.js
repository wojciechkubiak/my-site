import React, { Component } from "react";
import "./Skills.css";
import { InView } from "react-intersection-observer";
import SkillInfo from "./../SkillInfo/SkillInfo";
import SkillImg from "./../SkillImg/SkillImg";
import reactLogo from "./../../img/black_empty_react.png";
import nodeLogo from "./../../img/black_empty_nodejs.png";
import jsLogo from "./../../img/black_empty_js.png";
import psqlLogo from "./../../img/black_empty_psql.png";
import htmlLogo from "./../../img/black_empty_html.png";
import cssLogo from "./../../img/black_empty_css.png";
import bootstrapLogo from "./../../img/black_empty_bootstrap.png";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ["SkillsContainer"],
      language: true,
      header: "Skills",
      showInfo: false
    };
    this.changeClass = this.changeClass.bind(this);
    this.showInfoHandler = this.showInfoHandler.bind(this);
  }

  changeClass = val => {
    if (val) {
      this.setState({ mode: ["SkillsContainer", "SkillsAnim"] }, () =>
        console.log(this.state.mode)
      );
    }
  };

  showInfoHandler = () => {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo }, () => console.log(showInfo));
  };

  render() {
    let icons = {
      react: reactLogo,
      node: nodeLogo,
      js: jsLogo,
      psql: psqlLogo,
      html: htmlLogo,
      css: cssLogo,
      bootstrap: bootstrapLogo
    };

    return (
      <InView
        as="div"
        data-testid="Skills"
        id="skills"
        onChange={(inView, entry) => this.changeClass(inView)}
      >
        <h1>{this.props.language ? "Skills" : "Technologie"}</h1>
        <div className={this.state.mode.join(" ")}>
          {Object.keys(icons).map(key => {
            return (
              <SkillImg
                showInfoHandler={this.showInfoHandler}
                imgUrl={icons[key]}
              />
            );
          })}
          {this.state.showInfo && <SkillInfo />}
        </div>
      </InView>
    );
  }
}

export default Skills;
