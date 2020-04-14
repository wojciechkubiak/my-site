import React, { useState, useEffect, useRef } from "react";
import {useInView} from "react-intersection-observer";
import Background from "./../../img/noise_bg.webp";
import {gsap} from "gsap";
import "./Projects.css";

const Projects = props => {
  const [img, setImg] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.8
  })

  let subinfoItem = useRef(null);
  let imageItem = useRef(null);
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
    [
      "white_empty_react.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp"
    ],
    [
      "white_empty_java.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp"
    ],
    [
      "white_empty_react.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp"
    ]
  ];

  const swapImage = event => {
    gsap.fromTo(imageItem, {
      opacity: 0,
      duration: 1.2,
      x: -50
    }, {
      opacity: 1,
      duration: 1.2,
      x: 0
    })
    gsap.fromTo(subinfoItem, {
      duration: 1.2,
      opacity: 0
    }, {
      duration: 1.2,
      opacity: 1
    })
    if (img === 3 && event.target.value === "forward") {
      setImg(1);
    } else if (img === 1 && event.target.value === "backward") {
      setImg(3);
    } else {
      setImg(img + parseInt(event.target.name));
    }
  
  };

  useEffect(() => {
    props.activeHandler(inView)

    if(inView) {
      gsap.to(subinfoItem, {
        duration: 2,
        opacity: 1
      })
    }
  }, [inView])


  return (
    <div id="projects" ref={ref}>
      <div className="projects--container" data-testid="Projects">
        <div className="projects--container-img-container">
          <div className="projects--container-img" ref={e => {imageItem = e}}>
            <img src={require(`./../../img/${img}.webp`)} alt="Project-icon" />          
          </div>
        </div>     
        <div className="projects--technologies-container">
        <div ref={e => {subinfoItem = e}} className="projects--subinfo" style={{opacity: "0"}}>
              <h3>{data[img - 1][0]}</h3>
              <p>{data[img - 1][1]}</p>
            </div>
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
      <div className="projects--background" style={{width: "100%", height: "84%", position: "absolute", bottom: "0%", backgroundImage: `url(${Background})`}}></div>
    </div>
  );
};

export default Projects;
