import React, { Component } from "react";
import "./../Skills/Skills.css";

class SkillInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#292930"
    };
  }

  render() {
    const style = {
      position: "absolute",
      width: "10em",
      height: "15em",
      left: "20px",
      backgroundColor: "#292930",
      padding: "1em",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
      zIndex: "3"
    };

    return <div className="SkillInfo" style={style}></div>;
  }
}

export default SkillInfo;
