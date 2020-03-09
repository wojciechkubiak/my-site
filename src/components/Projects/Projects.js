import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import "./Projects.css";

const Projects = props => {
  const [img, setImg] = useState(1);
  const [mode, setMode] = useState(["projects--container"]);

  const data = [
    [
      "Obb-SYS",
      props.t("projects.obbsysAbout", { framework: "react-i18next" })
    ],
    [
      "Opqn", 
      props.t("projects.opqnAbout", { framework: "react-i18next" })],
    [
      "Fit-Tracker",
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
      setMode(["projects--container", "anim"]);
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
        <figure className="projects--container-img-container">
          <img
            className="projects--container-img"
            src={require(`./../../img/${img}.png`)}
            alt="Project-icon"
          />
          <figcaption className="projects--subinfo">
            <h3>{data[img - 1][0]}</h3>
            <p>{data[img - 1][1]}</p>
          </figcaption>
        </figure>
        <div className="projects--technologies-container">
          <div className="projects--technologies-container-alt">
            <span className="projects--span">
              <img
                className="projects--img"
                src={require(`./../../img/${imageSrc[img - 1][0]}`)}
                alt="First-img"
              />
            </span>
            <span className="projects--span">
              <img
                className="projects--img"
                src={require(`./../../img/${imageSrc[img - 1][1]}`)}
                alt="Second-img"
              />
            </span>
            <span className="projects--span">
              <img
                className="projects--img"
                src={require(`./../../img/${imageSrc[img - 1][2]}`)}
                alt="Third-img"
              />
            </span>
          </div>
          <div className="projects--btn-container">
        <button
          name="-1"
          value="backward"
          onClick={swapImage}
          className="projects--btn btn-prev"
        >
          &larr;
        </button>
        <button
          name="1"
          value="forward"
          onClick={swapImage}
          className="projects--btn btn-next"
        >
          &rarr;
        </button>
      </div>
        </div>
      </div>
      
    </InView>
  );
};

export default Projects;
