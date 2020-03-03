import React, { Component } from "react";
import "./Skills.css";
import { InView } from "react-intersection-observer";
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
      currentImg: ""
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

  currentImgHandler = val => {
    this.setState({currentImg: val}, () => {console.log(this.state.currentImg)})
  }

  render() {
    let icons = {
      ReactJS: [
        reactLogo,
        60
      ],
      NodeJS: [
        nodeLogo,
        50
      ],
      JavaScript: [
        jsLogo,
        70
      ],
      PostgreSQL: [
        psqlLogo,
        50
      ],
      Html: [
        htmlLogo,
        60
      ],
      Css: [
        cssLogo,
        65
      ],
      Bootstrap: [
        bootstrapLogo,
        45
      ]
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
                key={`${key}skill`}
                showInfoHandler={this.showInfoHandler}
                imgUrl={icons[key][0]}
                imageInfoHander={this.currentImgHandler}
                technology={key}
                progress={icons[key].slice(1, 2)}
              />
            );
          })}
        </div>
      </InView>
    );
  }
}

export default Skills;
