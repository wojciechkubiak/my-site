import React, { Component } from "react";
import "./Skills.css";
import { InView } from "react-intersection-observer";
import shortid from "shortid";
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
    };
    this.animHandler = this.animHandler.bind(this);
  }

  animHandler = val => {
    if (val) {
      this.setState({ mode: ["SkillsContainer", "SkillsAnim"] });
    }
  };

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

    let header = this.props.language ? "Skills" : "Technologie";
    
    return (
      <InView
        as="div"
        data-testid="Skills"
        id="skills"
        onChange={(inView, entry) => this.animHandler(inView)}
      >
        <h1>{header}</h1>
        <div className={this.state.mode.join(" ")}>
          {Object.keys(icons).map(key => {
            return (
              <SkillImg
                key={shortid.generate()}
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
