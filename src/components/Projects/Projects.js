import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { isMobile } from 'react-device-detect';

import "./Projects.css";

const Projects = (props) => {
  let projectsItem = useRef(null);
  let container = useRef(null);

  useEffect(() => {
   if(!isMobile) {
    gsap.fromTo(
      container,
      {
        left: -window.innerWidth,
      },
      {
        duration: 2,
        left: 0,
      }
    );
   }
  }, []);

  const [img, setImg] = useState(1);

  let subinfoItem = useRef(null);
  let imageItem = useRef(null);
  const data = [
    [
      "Obb-SYS",
      props.t("projects.obbsysAbout", { framework: "react-i18next" }),
    ],
    ["Opqn-m", props.t("projects.opqnAbout", { framework: "react-i18next" })],
    [
      "Opqn-w",
      props.t("projects.fittrackerAbout", { framework: "react-i18next" }),
    ],
  ];

  const imageSrc = [
    [
      "white_empty_react.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp",
    ],
    [
      "white_empty_java.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp",
    ],
    [
      "white_empty_react.webp",
      "white_empty_nodejs.webp",
      "white_empty_psql.webp",
    ],
  ];

  const gits = [
    [
      "https://github.com/wojciechkubiak/obb-api",
      "https://github.com/wojciechkubiak/obb-web",
    ],
    [
      "https://github.com/wojciechkubiak/opqn-api",
      "https://github.com/wojciechkubiak/opqn-mobile",
    ],
    [
      "https://github.com/wojciechkubiak/opqn-api",
      "https://github.com/wojciechkubiak/opqn-web",
    ],
  ];

  const url = ["https://obb-sys.netlify.app", null, "https://opqn.netlify.app"];

  const swapImage = (event) => {
    gsap.fromTo(
      subinfoItem,
      {
        duration: 1.2,
        opacity: 0,
      },
      {
        duration: 1.2,
        opacity: 1,
      }
    );
    if (img === 3 && event.target.value === "forward") {
      setImg(1);
    } else if (img === 1 && event.target.value === "backward") {
      setImg(3);
    } else {
      setImg(img + parseInt(event.target.name));
    }
  };

  useEffect(() => {
    gsap.to(subinfoItem, {
      duration: 2,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    if (props.hide && !isMobile) {
      gsap.fromTo(
        container,
        {
          left: 0,
        },
        {
          duration: 1,
          left: -window.innerWidth,
        }
      );
    }
  }, [props.hide]);

  return (
    <div id="projects" ref={(e) => (container = e)}>
      <div
        className="projects--container"
        ref={(e) => (projectsItem = e)}
        data-testid="Projects"
        style={{ opacity: 1 }}
      >
        <div
          ref={(e) => {
            subinfoItem = e;
          }}
          className="projects--subinfo"
          style={{ opacity: "1" }}
        >
          <h3>{data[img - 1][0]}</h3>
          <p>{data[img - 1][1]}</p>
        </div>
        <div
          className="projects--buttons-container"
          style={{
            position: "relative",
            left: "50%",
            top: "0%",
            width: "100%",
            textAlign: "center",
            transform: "translate(-50%, 0%)",
            display: "inline-block",
            // backgroundColor: "rgba(21, 37, 52,   .8)",
            borderRadius: "0.2em",
          }}
        >
          <button
            name="-1"
            value="backward"
            onClick={swapImage}
            className="projects--btn btn-prev"
          >
            &larr;
          </button>

          <OverlayTrigger placement="top" overlay={<Tooltip>API</Tooltip>}>
            <a href={gits[img - 1][0]}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "3em",
                  height: "3em",
                }}
              >
                <AiFillGithub size={32} style={{ color: "#ffffff" }} />
              </button>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Web/Mobile</Tooltip>}
          >
            <a href={gits[img - 1][1]}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "3em",
                  height: "3em",
                }}
              >
                <AiFillGithub size={32} style={{ color: "#ffffff" }} />
              </button>
            </a>
          </OverlayTrigger>
          {url[img - 1] && (
            <OverlayTrigger placement="top" overlay={<Tooltip>WWW</Tooltip>}>
              <a href={url[img - 1]}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    width: "3em",
                    height: "3em",
                  }}
                >
                  <MdWeb size={32} style={{ color: "#ffffff" }} />
                </button>
              </a>
            </OverlayTrigger>
          )}
          <button
            name="1"
            value="forward"
            onClick={swapImage}
            className="projects--btn btn-next"
          >
            &rarr;
          </button>
        </div>
        <div
          className="projects--container-img"
          ref={(e) => {
            imageItem = e;
          }}
        >
          <img src={require(`./../../img/${img}.png`)} alt="Project-icon" />
          <div className="projects--technologies-container-alt">
            <div className="projects--spans-container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
