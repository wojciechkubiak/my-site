import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import "./Projects.css";

const Projects = props => {
  const [img, setImg] = useState(1);
  const [mode, setMode] = useState(["ProjectsContainer"]);

  const data = [
    [
      "Obb-SYS",
      props.t("projects.obbsysAbout", { framework: "react-i18next" })
    ],
    [
      "Opqn", 
      props.t("projects.opqnAbout", { framework: "react-i18next" })],
    [
      "FitTracker",
      props.t("projects.fittrackerAbout", { framework: "react-i18next" })
    ]
  ];

  const imageSrc = [
    ["white_empty_react.png", "white_empty_nodejs.png", "white_empty_psql.png"],
    [ "white_empty_android.png", "white_empty_nodejs.png", "white_empty_psql.png"],
    ["white_empty_react.png", "white_empty_nodejs.png", "white_empty_psql.png"]
  ];

  const animHandler = value => {
    if (value) {
      setMode(["ProjectsContainer", "ProjectsAnim"]);
    }
  };

  const swapImage = event => {
    if (img === 3 && event.target.value === "forward") {
      setImg(1);
    } else if (img === 1 && event.target.value === "backward") {
      setImg(3);
    } else {
      setImg(img + parseInt(event.target.name));
    }
  };

  return (
    <InView
      as="div"
      data-testid="Projects"
      id="projects"
      onChange={(inView, entry) => animHandler(inView)}
    >
      <h1>{props.t("projects.header", { framework: "react-i18next" })}</h1>
      <div className={mode.join(" ")} data-testid="Projects">
        <div className="ImgContainer">
          <img
            className="Img"
            src={require(`./../../img/${img}.png`)}
            alt="React-icon"
          />
          <div className="ProjectsSubinfo">
            <h3>{data[img - 1][0]}</h3>
            <p>{data[img - 1][1]}</p>
          </div>
        </div>
        <div className="ProjectInfoContainer">
          <div className="ProjectInfoImages">
            <span className="ProjectSpan">
              <img
                className="ProjectImgStyle"
                src={require(`./../../img/${imageSrc[img - 1][0]}`)}
                alt="React-icon"
              />
            </span>
            <span className="ProjectSpan">
              <img
                className="ProjectImgStyle"
                src={require(`./../../img/${imageSrc[img - 1][1]}`)}
                alt="React-icon"
              />
            </span>
            <span className="ProjectSpan">
              <img
                className="ProjectImgStyle"
                src={require(`./../../img/${imageSrc[img - 1][2]}`)}
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
          onClick={swapImage}
          className="PrevBtn"
        >
          &larr;
        </button>
        <button
          name="1"
          value="forward"
          onClick={swapImage}
          className="NextBtn"
        >
          &rarr;
        </button>
      </div>
    </InView>
  );
};

export default Projects;
