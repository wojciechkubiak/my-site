import React, { useRef, useEffect } from "react";
import "./LandingPage.css";

import { gsap } from "gsap";
import { isMobile } from 'react-device-detect';

const LandingPage = props => {
  let sectionItem = useRef(null);
  let nameItem = useRef(null);
  let container = useRef(null);
  let aboutItem = useRef(null);

  const t1 = gsap.timeline();

 
  useEffect(() => {
    props.modeHandler(true);
  }, []);

  useEffect(() => {
    if(!isMobile) {
      t1.fromTo(
        sectionItem,
        { opacity: 0 },
        {
          duration: .5,
          ease: "slow (0.7, 0.7, false)",
          opacity: 1
        }
      );
      t1.fromTo(
        container,
        {
          backgroundPositionX:  "-4000px",
        },
        {
          duration: 2,
          backgroundPositionX: "0px"
        }
      );
    }
  }, []);
 

  useEffect(() => {
   if(props.hide && !isMobile) {
    t1.fromTo(
      sectionItem,
      { opacity: 1 },
      {
        duration: .5,
        ease: "slow (0.7, 0.7, false)",
        opacity: 0
      }
    );
    t1.fromTo(
      container,
      {
        backgroundPositionX:  "0px",
      },
      {
        duration: 2,
        backgroundPositionX: "-4000px"
      }
    );
   }
  }, [props.hide]);

  return (
    <div className="home" ref={e => container = e} id="landing" data-testid="Home">
      <section
        className="home--container"
        style={{opacity: "0"}}
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
