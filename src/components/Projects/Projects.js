import React, { Component } from "react";
import "./Projects.css";
import {InView} from "react-intersection-observer";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 1,
      data: [
        ["Obb-SYS", "engengengengengengengengengengen gengengengen gengengengengengengengengengengen gengengengengengengengenge ngengengengengengengengengengeng engengengengengeng engengengengengeng"],
        ["Opqn", "Mob"],
        ["FitTracker", "Fit"]
      ],
      imageSrc: [
        [
          "white_empty_react.png",
          "white_empty_nodejs.png",
          "white_empty_psql.png"
        ],
        [
          "white_empty_android.png", 
          "white_empty_nodejs.png",
          "white_empty_psql.png"
        ],
        [
          "white_empty_react.png",
          "white_empty_nodejs.png",
          "white_empty_psql.png"
        ]
      ],
      mode: ["ProjectsContainer"]
    };
    this.changeClass = this.changeClass.bind(this);
  }

  changeClass = val => {
    if (val) {
      this.setState({ mode: ["ProjectsContainer", "ProjectsAnim"] }, () =>
        console.log(this.state.mode)
      );
    }
  };

  swapImage = event => {
    const { img } = this.state;
    if (img === 3 && event.target.value === "forward") {
      this.setState({ img: 1 });
    } else if (img === 1 && event.target.value === "backward") {
      this.setState({ img: 3 });
    } else {
      this.setState({ img: img + parseInt(event.target.name) });
    }
  };

  render() {
    return (
      <InView
        as="div"
        data-testid="Projects"
        id="projects"
        onChange={(inView, entry) => this.changeClass(inView)}
      >
        <h1>Projects</h1>
        <div className={this.state.mode.join(" ")} data-testid="Projects">
        <div className="ImgContainer">
            <img
              className="Img"
              src={require(`./../../img/${this.state.img}.png`)}
              alt="React-icon"
            />
          </div>
          <div className="ProjectInfoContainer">
            <div className="ProjectsTextContainer">
              <h3>{this.state.data[this.state.img - 1][0]}</h3>
              <p>{this.state.data[this.state.img - 1][1]}</p>
            </div>
            <div className="ProjectInfoImages">
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${this.state.imageSrc[this.state.img -1][0]}`)}
                  alt="React-icon"
                /> 
              </span>
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${this.state.imageSrc[this.state.img -1][1]}`)}
                  alt="React-icon"
                /> 
              </span>
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${this.state.imageSrc[this.state.img -1][2]}`)}
                  alt="React-icon"
                /> 
              </span>
            </div>
          </div>
        </div>
        <div className="BtnContainer">
          <button
            name="-1"
            value="backward"
            onClick={this.swapImage}
            className="PrevBtn"
          >
            &larr;
          </button>
          <button
            name="1"
            value="forward"
            onClick={this.swapImage}
            className="NextBtn"
          >
            &rarr;
          </button>
        </div>
      </InView>
    );
  }
}


export default Projects;
