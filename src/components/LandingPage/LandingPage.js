  import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./LandingPage.css";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Button} from "react-bootstrap";
import { gsap } from "gsap";

const LandingPage = props => {
  let sectionItem = useRef(null);
  let greetingItem = useRef(null);
  let nameItem = useRef(null);
  let nameIs = useRef(null);
  let aboutItem = useRef(null);
  let arrowItem = useRef(null);
  
  const [showArrow, setShowArrow] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.8
  })

  const t1 = gsap.timeline();

  useEffect(() => {
    props.activeHandler(inView)
  }, [inView])

  useEffect(() => {
    t1.fromTo(
      sectionItem,
      { opacity: 0 },
      {
        duration: .5,
        ease: "slow (0.7, 0.7, false)",
        opacity: 1
      }
    );
    t1.to(greetingItem, {
      duration: .5,
      opacity: 1,
      display: "block"
    });
    t1.to(greetingItem, {
      duration: .5,
      opacity: 0,
      display: "none"
    });
    t1.to(nameIs, {
      duration:  .5,
      opacity: 1,
      display: "block"
    });
    t1.to(nameIs, {
      duration:  .5,
      opacity: 0,
      display: "none"
    });
    t1.to(nameItem, {
      duration:  .5,
      opacity: 1,
      display: "block",
    });
    t1.to(nameItem, {
      delay: 1,
      y: -100
    })
    t1.to(aboutItem, {
      y: -100
    })
    t1.to(aboutItem, {
      duration:  .5,
      opacity: 1,
      display: "block",
      onComplete: function() {
        props.showHeaderHandler();
      }
    });
    t1.to(arrowItem, {
      y: -100
    })
    t1.to(arrowItem, {
      visibility: "visible",
      duration: 2,
      opacity: 1,
      display: "block"
    });
    t1.to(arrowItem, {
      y: -90, 
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: .2
    })
  }, []);

  return (
    <div className="home" id="landing" data-testid="Home" ref={ref}>
      <section
        className="home--container"
        ref={e => {
          sectionItem = e;
        }}
        style={{ opacity: 0 }}
      >
        <h1
          ref={e => {
            greetingItem = e;
          }}
        >
          {props.t("aboutme.greeting", { framework: "react-i18next" })}
        </h1>
        <h1
          style={{ display: "none", opacity: "0" }}
          ref={e => {
            nameIs = e;
          }}
        >
          {props.t("aboutme.mynameis", { framework: "react-i18next" })}
        </h1>
        <h1
          style={{ display: "none", opacity: "0"}}
          ref={e => {
            nameItem = e;
          }}
        >
          Wojciech Kubiak
        </h1>
        <article
          style={{ display: "none", opacity: "0" }}
          ref={e => {
            aboutItem = e;
          }}
        >
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
          {showArrow && !props.showArrow && (
            <>
             <Button
             href="#projects"
             className="landing--arrow"
             variant="dark"
             style={{visibility: "hidden", position: "relative", top: "10%", width: "20%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "transparent", border: "none", opacity: "0"}}
             ref={e => {arrowItem = e}}
             onClick={() => setShowArrow(false)}
           >
             <AiOutlineArrowDown style={{width: "calc(2vh + 2vw)", height: "calc(2vh + 2vw)", color: "#fbd791"}}/>
           </Button>
            </>
          )}
      </section>  
    </div>
  );
};

export default LandingPage;
