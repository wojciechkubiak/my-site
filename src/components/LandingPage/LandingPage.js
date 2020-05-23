import React, { useRef, useEffect } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";

const LandingPage = props => {
  let sectionItem = useRef(null);
  let nameItem = useRef(null);
  let aboutItem = useRef(null);

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

  return (
    <div className="home" id="landing" data-testid="Home">
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
