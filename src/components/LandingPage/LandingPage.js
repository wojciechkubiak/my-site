import React, { useRef, useEffect } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";
import {MdKeyboardArrowDown} from "react-icons/md";
import {Button} from "react-bootstrap";

const LandingPage = props => {
  let svgItem = useRef(null);
  let svgArrow = useRef(null);
  let caseItem = useRef(null);
  let flagItem = useRef(null);
  let sectionItem = useRef(null);
  let greetingItem = useRef(null);
  let nameItem = useRef(null);
  let nameIs = useRef(null);
  let aboutItem = useRef(null);
  let svgContainer = useRef(null);

  const t1 = gsap.timeline();
 
  useEffect(() => {
    t1.to(svgContainer, { display: "block" })
    t1.fromTo(
      svgArrow,
      { x: -1000 },
      { delay: 1, duration: 1,  ease: "slow (0.7, 0.7, false)", x: -20}
    );
    t1.fromTo(
      svgItem,
      { y: -3000 },
      { duration: 1.5, ease: "slow (0.7, 0.7, false)", y: 0 }
    );
    t1.fromTo(
      caseItem,
      { y: 3000, x: -200 },
      {
        duration: 2,
        ease: "slow (0.7, 0.7, false)",
        y: 0,
        x: 0,
        rotation: 360
      }
    );
    t1.to(flagItem, 1, {
      scale: 1,
      skewX: 15,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
      }
    });
    t1.fromTo(
      sectionItem,
      { width: 0, transform: "scale(0)" , opacity: 0},
      {
        duration: 1.5,
        ease: "slow (0.7, 0.7, false)",
        width: "55%",
        opacity: 1,
        transform: "scale(1)"
      }
    );
    t1.to(greetingItem, {
      duration: 1,
      opacity: 1,
      display: "block"
      });
    t1.to(greetingItem, {
          duration: 1,
          opacity: 0,
          display: "none"
    });
    t1.to(nameIs, {
      duration: 1, opacity: 1, display: "block"
    })
    t1.to(nameIs, {
      duration: 1, opacity: 0, display: "none"
    })
    t1.to(nameItem, {
          duration: 1,
          opacity: 1,
          display: "block"
    })
    t1.to(nameItem, {
      color: "#C44550",
      y: -120
      })
    t1.to(aboutItem, {
      y: -100
    })
    t1.to(sectionItem, {
      height: "40vh"
    })
    t1.to(aboutItem, {         
          duration: 1,
          opacity: 1,
          display: "block", onComplete: function() {
            props.showHeaderHandler();
          }
    })
  }, []);

  return (
    <div className="home" id="landing" data-testid="Home">
      <section className="home--container" ref={e => {sectionItem = e}} style={{opacity: 0, transform: "scale(0)", transformOrigin: "left top"}}>
        <h1 ref={e => {greetingItem = e}}>{props.t("aboutme.greeting", { framework: "react-i18next" })}</h1>
        <h1 style={{display: "none", opacity: "0"}} ref={e => {nameIs = e}}>{props.t("aboutme.mynameis", { framework: "react-i18next" })}</h1>
        <h1 style={{display: "none", opacity: "0"}}  ref={e => {nameItem = e}}>Wojtek Kubiak</h1>
        <article style={{display: "none", opacity: "0"}} ref={e => {aboutItem = e}}>
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
      </section>
      <svg
        width="50%"
        height="100%"
        left="0"
        top="0"
        viewBox="0 0 1500 1500"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          zIndex: "50",
          position: "absolute",
          display: "none",
          opacity: "1"
        }}
        ref={e => {svgContainer = e}}
      >
        <g
          ref={e => {
            svgArrow = e;
          }}
        >
          <g>
            <polygon
              className="st9"
              width="50%"
              height="50%"
              points="15.42,856.588 2.395,841.411 218.551,655.892 424.727,717.412 589.587,534.233 721.276,560.905 
			                  832.089,430.246 958.252,423.333 959.346,443.303 841.776,449.745 728.888,582.853 596.812,556.103 431.13,740.193 
			                  223.293,678.179 		"
            />
          </g>
          <path
            className="st9"
            ref={e => {
              svgArrow = e;
            }}
            style={{ width: "10%" }}
            d="M943.975,386.271L997,439.296l-51.315,51.315C945.685,490.61,947.563,386.271,943.975,386.271z"
          />
        </g>
        <g
          ref={e => {
            caseItem = e;
          }}
        >
          <path
            className="case"
            d="M501.964,431.272l-5.612-21.334l13.169-3.464c1.299-0.342,2.071-1.665,1.729-2.964l-7.439-28.278
		c-0.342-1.3-1.665-2.071-2.964-1.729l-13.169,3.464l-5.612-21.334c-1.403-5.334-6.915-8.549-12.248-7.146L429.089,359.2
		c-5.334,1.403-8.549,6.915-7.146,12.248l19.898,75.64c1.403,5.334,6.915,8.549,12.248,7.146l40.729-10.714
		C500.151,442.118,503.367,436.606,501.964,431.272z M495.332,406.059l-6.633-25.213l9.736-2.561
		c0.989-0.26,1.999,0.345,2.254,1.315l5.694,21.645c0.255,0.97-0.326,1.993-1.315,2.254L495.332,406.059z"
          />
        </g>
        <g
          ref={e => {
            svgItem = e;
          }}
        >
          <g>
            <g
              className="svgFlag"
              ref={e => {
                flagItem = e;
              }}
            >
              <path
                className="st0"
                d="M531.881,179.721c0,0,42.115-4.011,44.12-8.022c2.005-4.011,26.071,34.093,20.055,38.104
				s-52.142,16.044-52.142,16.044L531.881,179.721"
              />
              <path
                className="st1"
                d="M573.996,205.792C573.996,205.792,572.7,205.317,573.996,205.792c5.238,1.918,18.844,7.227,22.06,4.011
				c4.011-4.011-2.005-12.033-2.005-12.033L573.996,205.792z"
              />
              <path
                className="st2"
                d="M557.952,167.688c0,0,36.098-8.022,40.109-14.038c2.005,2.005,16.044,36.098,16.044,36.098
				s-30.082,20.055-40.109,16.044C563.968,201.781,557.952,167.688,557.952,167.688z"
              />
            </g>
            <path
              className="st3"
              d="M717.319,406.709l-0.656,0.307c-0.819,0.383-1.802,0.027-2.185-0.792L594.329,149.448
			c-0.383-0.819-0.027-1.802,0.792-2.185l0.656-0.307c0.819-0.383,1.802-0.027,2.185,0.792l120.149,256.776
			C718.494,405.343,718.138,406.326,717.319,406.709z"
            />
          </g>
          <path
            className="st4"
            d="M501.799,356.202c0,0,6.016,8.022,16.044,8.022c8.022-10.027,30.082-42.115,30.082-42.115h32.087
		l28.077-28.077c0,0-68.186,6.016-72.197,8.022s-8.022,6.016-10.027,10.027S501.799,356.202,501.799,356.202z"
          />

          <path
            className="st5"
            d="M513.788,364.189c0.028,0.022,0.047,0.053,0.054,0.088c0.154,0.793,1.909,10.145-0.011,13.985
		c-2.005,4.011-2.005,8.022-2.005,10.027c0,1.772-3.132,1.978-3.861,2.002c-0.085,0.003-0.15-0.066-0.15-0.151v-7.805
		c0-0.04-0.016-0.078-0.044-0.107l-1.885-1.885c-0.046-0.046-0.116-0.057-0.174-0.028l-3.831,1.915
		c-0.051,0.026-0.083,0.078-0.083,0.135v7.897c0,0.021,0.004,0.041,0.013,0.06l2.54,5.795c0.05,0.114-0.052,0.236-0.173,0.207
		l-8.299-1.996c-0.059-0.014-0.103-0.062-0.113-0.122l-1.989-11.934l-1.988-9.939c-0.011-0.054,0.009-0.11,0.051-0.145l11.91-9.925
		c0.034-0.029,0.054-0.071,0.054-0.116v-5.633c0.669,0.154,0.571,0.076,0.669,0.154L513.788,364.189z"
          />
          <path
            className="st4"
            d="M577.672,324.449l12.367-28.411l23.063-1.671l29.079,11.699c0,0,6.016,4.011,6.016,6.016
		s2.005,16.044,6.016,18.049s10.027,8.022,22.06,8.022c8.022,8.022,8.022,8.022,8.022,8.022s0,14.038-18.049,14.038
		c-18.049,0-24.066-10.027-26.071-14.038c-2.005-4.011-20.055,54.148-20.055,54.148s-4.011,8.022,2.005,10.027
		c6.016,2.005-10.027,6.016-10.027,6.016l-10.027,2.005c0,0,2.005,8.022,0,8.022s-10.027,12.033-50.137-10.027
		C545.919,380.268,577.672,324.449,577.672,324.449z"
          />
          <path
            className="st6"
            d="M569.985,342.164c0,0,18.049,14.038,26.071,10.027c10.459-5.23,30.082-24.066,30.082-28.077
		c0-4.011-0.334-7.353-0.334-7.353l1.959-8.037l8.219,2.74l-5.833,10.645l-2.005,2.005c0,0-8.022,28.077-22.06,34.093
		C595.335,362.814,571.99,360.213,569.985,342.164z"
          />
          <path
            className="st7"
            d="M608.089,292.027h8.022l11.652,16.697l-3.631,9.374c0,0-14.038-10.027-16.044-18.049
		C606.083,292.027,608.089,292.027,608.089,292.027z"
          />
          <path
            className="st5"
            d="M658.225,259.939l2.005,12.033c0,0,4.011,8.022,4.011,10.027s-6.016,0-6.016,0v5.625
		c0,0.25-0.099,0.491-0.277,0.668l-1.729,1.729h2.005v4.011c0,0,0,4.011-4.011,4.011s-8.022,0-10.027,2.005
		c-2.005,2.005-8.022,12.033-8.022,12.033h-6.016l-10.905-15.417l4.888-2.632v-24.066l6.016-10.027H658.225z"
          />
          <path
            d="M619.917,293.626c0.128,0.254,0.389,0.406,0.673,0.393c1.98-0.089,9.559-0.773,9.559-6.003c0-5.258-3.063-8.984-3.836-9.84
		c-0.118-0.13-0.175-0.287-0.173-0.463c0.022-1.409,0.22-7.746,2.003-7.746c1.781,0,5.145,1.582,5.875,1.936
		c0.098,0.048,0.199,0.069,0.308,0.069h1.119c0.398,0,0.72-0.322,0.72-0.72v-8.588c0-0.398,0.322-0.72,0.72-0.72h19.191
		c0.096,0,0.188-0.017,0.276-0.055c1.175-0.499,9.759-4.365,7.89-9.972c-2.005-6.016-2.005-10.027-6.016-12.033
		c-3.425-1.712-24.393-0.501-30.45-0.11c-1.114,0.072-2.181,0.419-3.125,1.015c-3.666,2.316-12.954,8.727-14.556,15.138
		c-2.005,8.022-2.005,18.049,0,20.055C611.91,277.799,618.655,291.118,619.917,293.626z"
          />
          <polygon
            className="st7"
            points="640.845,304.478 642.182,306.065 642.182,312.082 638.171,318.098 636.165,316.093 635.664,312.165 	
		"
          />
          <path
            className="st5"
            d="M672.264,332.136l-2.005-10.027l8.022-2.005v-2.005l8.022,2.005l6.016,18.049c0,0-6.016,8.022-8.022,6.016
		c-2.005-2.005-10.027-8.022-10.027-8.022L672.264,332.136z"
          />
          <path
            className="st8"
            d="M550.933,411.352c0,0-9.025,39.107-5.014,77.211c-18.049,10.027-56.153,32.087-56.153,32.087
		s8.022,18.049,14.038,18.049c6.016,0,64.175-34.093,68.186-36.098c4.011-2.005,16.043-58.159,16.044-60.164
		c0.002-4.944,6.016-8.022,10.027-6.016c4.011,2.005,28.077,12.033,28.077,12.033s-8.022,50.137-18.049,64.175
		c-10.027,14.038,20.055,8.022,20.055,8.022s30.082-68.186,30.082-76.208s-24.066-30.082-36.098-40.109
		S550.933,411.352,550.933,411.352z"
          />
          <path
            className="st4"
            d="M487.76,524.661c-4.011-2.005-8.022,0-8.022,2.005s8.022,38.104,14.038,46.126
		c6.016,8.022,10.027-22.06,6.016-28.077c-4.011-6.016-8.022-4.011-10.027-10.027C487.76,528.672,487.76,524.661,487.76,524.661z"
          />
          <path
            className="st4"
            d="M606.083,522.656c0,0-4.011,4.011-2.005,6.016c2.005,2.005,38.104,16.044,48.131,14.038
		c10.027-2.005-18.049-24.066-24.066-22.06C622.127,522.656,616.11,530.678,606.083,522.656z"
          />
        </g>
      </svg>
    </div>
  );
};

export default LandingPage;
