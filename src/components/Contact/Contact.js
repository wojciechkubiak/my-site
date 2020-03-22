import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import "./Contact.css";

const Contact = props => {
  const [mode, setMode] = useState(["ContactContainer"]);

  const animHandler = value => {
    if (value) {
      setMode(["ContactContainer", "anim"]);
    }
  };

  //TODO BEM Css
  return (
    <InView
      as="div"
      data-testid="Contact"
      id="contact"
      onChange={(inView, entry) => animHandler(inView)}
    >
      <h1>{props.t("contact.header", { framework: "react-i18next" })}</h1>
      <section className={mode.join(" ")} data-testid="Contact">
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
