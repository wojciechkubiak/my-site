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
    if(!isMobile) {
      t1.fromTo(
        container,
        {
          x: -(2 * window.screen.availWidth),
        },
        {
          duration: 1,
          x: 0
        }
      );
    }
  }, []);
 

  useEffect(() => {
   if(props.hide && !isMobile) {
    t1.fromTo(
      container,
      {
        x: 0
      },
      {
        duration: 1,
        x: -(2 * window.screen.availWidth)
      }
    );
   }
  }, [props.hide]);

  return (
    <div className="home" ref={e => container = e} id="landing" data-testid="Home">
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
