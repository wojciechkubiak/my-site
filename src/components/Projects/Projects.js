import React, { useState, useRef } from "react";
import { InView } from "react-intersection-observer";
import gsap from "gsap";
import "./Projects.css";

const Projects = props => {
  let technologies = useRef(null);
  let screenshots = useRef(null);
  let subinfoHeader = useRef(null);
  let subinfoParagraph = useRef(null);
  let subinfoContainer = useRef(null);
  const [img, setImg] = useState(1);
  const [animated, setAnimated] = useState(false);

  const data = [
    [
      "Obb-SYS",
      props.t("projects.obbsysAbout", { framework: "react-i18next" })
    ],
    ["Opqn", props.t("projects.opqnAbout", { framework: "react-i18next" })],
    [
      "Fit-Tracker",
      props.t("projects.fittrackerAbout", { framework: "react-i18next" })
    ]
  ];

  const imageSrc = [
    ["white_empty_react.png", "white_empty_nodejs.png", "white_empty_psql.png"],
    [
      "white_empty_android.png",
      "white_empty_nodejs.png",
      "white_empty_psql.png"
    ],
    ["white_empty_react.png", "white_empty_nodejs.png", "white_empty_psql.png"]
  ];

  const t1 = gsap.timeline();

  const anim = () => {
    gsap.fromTo(
      screenshots,
      { opacity: 0},
      { duration: 2, opacity: 1, ease: "slow (0.7, 0.7, false)", visibility: "visible"}
    );
    t1.fromTo(
      technologies,
      { opacity: 0},
      { delay: 1, duration: 1, opacity: 1, visibility: "visible", ease: "slow (0.7, 0.7, false)", onComplete: function() {
        setAnimated(true);
      }}
    );
    t1.to(subinfoContainer, {
      duration: 1,
      opacity: 1,
      visibility: "visible"
    });
    t1.to(subinfoHeader, {
      duration: 1,
      opacity: 1,
      visibility: "visible"
    });
    t1.to(subinfoParagraph, {
      duration: 1,
      opacity: 1,
      visibility: "visible"
    });
  }

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
      onChange={(inView, entry) => {
        if(inView && !animated) {
          console.log(inView, !animated)
          anim();
        }
      }}
    >
      <h1>{props.t("projects.header", { framework: "react-i18next" })}</h1>
      <div className="projects--container" data-testid="Projects">
        <figure className="projects--container-img-container" style={{visibility: "hidden"}} ref={e => {screenshots = e}}>
          <img
            className="projects--container-img"
            src={require(`./../../img/${img}.webp`)}
            alt="Project-icon"
          />
          <figcaption className="projects--subinfo" style={{visibility: "hidden"}} ref={e => {subinfoContainer = e}}>
            <h3 ref={e => {subinfoHeader = e}}>{data[img - 1][0]}</h3>
            <p ref={e => {subinfoParagraph = e}}>{data[img - 1][1]}</p>
          </figcaption>
        </figure>
        <div className="projects--technologies-container" style={{visibility: "hidden"}} ref={e => {technologies = e}}>
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
