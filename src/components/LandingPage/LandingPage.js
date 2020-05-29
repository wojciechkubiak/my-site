import React, { useRef, useEffect, useState } from "react";
import "./LandingPage.css";
import BackgroundVideo4k from "./../../media/retro.mp4";
import BackgroundVideoFullHD from "./../../media/retro_fullhd.mp4";
import BackgroundVideo169 from "./../../media/retro_169.mp4";
import BackgroundVideoHDReady from "./../../media/retro_hdready.mp4";

import { gsap } from "gsap";

const LandingPage = props => {
  let sectionItem = useRef(null);
  let nameItem = useRef(null);
  let aboutItem = useRef(null);

  const [show4K, setShow4K] = useState(false);
  const [showFullHD, setShowFullHD] = useState(false);
  const [show169, setShow169] = useState(false);
  const [showHDReady, setShowHDReady] = useState(false);

  const t1 = gsap.timeline();

  useEffect(() => {
    if(!props.animComplete) {
      t1.fromTo(
        sectionItem,
        { opacity: 0 },
        {
          duration: .5,
          ease: "slow (0.7, 0.7, false)",
          opacity: 1
        }
      );
      t1.to(nameItem, {
        duration:  .5,
        opacity: 1,
        display: "block",
      });
      t1.to(aboutItem, {
        duration:  .5,
        opacity: 1,
        display: "block",
        onComplete: function() {
          props.showHeaderHandler(true);
          props.setAnimComplete(true);
        }
      });
    } 
  }, []);

  useEffect(() => {
    const width = window.screen.availWidth;

    if(width > 1920) {
      setShow4K(true);
    } else if (width <= 1920 && width > 1600) {
      setShowFullHD(true);
    } else if (width <= 1600 && width > 1280) {
      setShow169(true);
    } else {
      setShowHDReady(true);
    }
  }, []);

  return (
    <div className="home" id="landing" data-testid="Home">
      {show4K && (
          <video className="background--video" autoPlay loop muted>
            <source src={BackgroundVideo4k} type='video/mp4' />
          </video>
      )}
       {showFullHD && (
          <video className="background--video" autoPlay loop muted>
            <source src={BackgroundVideoFullHD} type='video/mp4' />
          </video>
      )}
       {show169 && (
          <video className="background--video" autoPlay loop muted>
            <source src={BackgroundVideo169} type='video/mp4' />
          </video>
      )}
       {showHDReady && (
          <video className="background--video" autoPlay loop muted>
            <source src={BackgroundVideoHDReady} type='video/mp4' />
          </video>
      )}
      <section
        className="home--container"
        ref={e => {
          sectionItem = e;
        }}     
      >
        <h1
          ref={e => {
            nameItem = e;
          }}
        >
          Wojciech Kubiak
        </h1>
        <article
          ref={e => {
            aboutItem = e;
          }}
        >
          <p className="landing--about">{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
      </section>  
    </div>
  );
};

export default LandingPage;
