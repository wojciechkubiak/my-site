import React, { useState, useRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import gsap from "gsap";
import "./Contact.css";

const Contact = props => {
  const [notAnimated, setNotAnimated] = useState(false);

  let contactItem = useRef(null);

  const anim = () => {
    gsap.fromTo(
      contactItem,
      { opacity: 0},
      { duration: 2, opacity: 1, ease: "slow (0.7, 0.7, false)", display: "block", onComplete: function() {
        setNotAnimated(true);
      }}
    );
  }

  //TODO BEM Css
  return (
    <InView
      as="div"
      data-testid="Contact"
      id="contact"
      onChange={(inView, entry) => {
        if(inView && !notAnimated) {
          anim();
        }
      }}
    >
      <h1>{props.t("contact.header", { framework: "react-i18next" })}</h1>
      <section className="ContactContainer" ref={e => {contactItem = e}} data-testid="Contact">
        <article>
          <h1>{props.t("contact.box", { framework: "react-i18next" })}</h1>
          <p>{props.t("contact.firstLine", { framework: "react-i18next" })}</p>
          <p>
            {props.t("contact.contactMe", { framework: "react-i18next" })}{" "}
            <a href="mailto:wgkubiak@gmail.com" className="MailContainer">
              wgkubiak@gmail.com
            </a>
          </p>
          <figure className="ResumeContainer">
            <FaFileDownload className="DownloadIcon"></FaFileDownload>
            <figcaption
              className="ResumeDownloadText"
              style={{ color: "#ffffff", fontWeight: 500 }}
            >
              {props.t("download.cv", { framework: "react-i18next" })}
            </figcaption>
            <figcaption className="ResumeLinks">
              <span>
                <a href={ResumePL} download="WojciechKubiakCV_PL.pdf">
                  PL
                </a>
              </span>
              <strong style={{ color: "#ffffff", fontWeight: 500 }}> | </strong>
              <span>
                <a href={ResumeEN} download="WojciechKubiakCV_EN.pdf">
                  EN
                </a>
              </span>
            </figcaption>
          </figure>
        </article>
      </section>
    </InView>
  );
};

export default Contact;
