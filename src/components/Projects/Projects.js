import React, { Component } from "react";
import "./Projects.css";
import { InView } from "react-intersection-observer";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 1,
      mode: ["ProjectsContainer"]
    };
    this.animHandler = this.animHandler.bind(this);
    this.swapImage = this.swapImage.bind(this);
  }

  animHandler = val => {
    if (val) {
      this.setState({ mode: ["ProjectsContainer", "ProjectsAnim"] });
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
    const data = [
      ["Obb-SYS", "Web app for the vet", "Aplikacja webowa dla weterynarza"],
      [
        "Opqn",
        "Mobile app for the diet supervisors",
        "Aplikacja mobilna dla dietetyków"
      ],
      [
        "FitTracker",
        "CRUD diet app",
        "Aplikacja webowa typu CRUD dla dietetyków"
      ]
    ];
    const imageSrc = [
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
    ];
    const header = this.props.language ? "Projects" : "Projekty";

    return (
      <InView
        as="div"
        data-testid="Projects"
        id="projects"
        onChange={(inView, entry) => this.animHandler(inView)}
      >
        <h1>{header}</h1>
        <div className={this.state.mode.join(" ")} data-testid="Projects">
          <div className="ImgContainer">
            <img
              className="Img"
              src={require(`./../../img/${this.state.img}.png`)}
              alt="React-icon"
            />
            <div className="ProjectsSubinfo">
              <h3>{data[this.state.img - 1][0]}</h3>
              <p>
                {this.props.language
                  ? data[this.state.img - 1][1]
                  : data[this.state.img - 1][2]}
              </p>
            </div>
          </div>
          <div className="ProjectInfoContainer">
            <div className="ProjectInfoImages">
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${
                    imageSrc[this.state.img - 1][0]
                  }`)}
                  alt="React-icon"
                />
              </span>
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${
                    imageSrc[this.state.img - 1][1]
                  }`)}
                  alt="React-icon"
                />
              </span>
              <span className="ProjectSpan">
                <img
                  className="ProjectImgStyle"
                  src={require(`./../../img/${
                    imageSrc[this.state.img - 1][2]
                  }`)}
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
