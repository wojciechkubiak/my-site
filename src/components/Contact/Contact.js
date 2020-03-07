import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import ResumePL from "./../../doc/WojciechKubiakCV_PL.pdf";
import ResumeEN from "./../../doc/WojciechKubiakCV_EN.pdf";
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
      <div className={mode.join(" ")} data-testid="Contact">
        <h1>{props.t("contact.box", { framework: "react-i18next" })}</h1>
        <p>{props.t("contact.firstLine", { framework: "react-i18next" })}</p>
        <p>
          {props.t("contact.contactMe", { framework: "react-i18next" })} {' '}
          <a href="mailto:wgkubiak@gmail.com" className="MailContainer">
            <strong>wgkubiak@gmail.com</strong>
          </a>
        </p>
        <div className="ResumeContainer">
          <FaFileDownload className="DownloadIcon"></FaFileDownload>
          <div className="ResumeLinks">
            <span>
              <a href={ResumePL} download="WojciechKubiakCV_PL.pdf">
                <strong>PL</strong>
              </a>
            </span>
            <strong style={{ color: "#ffffff", fontWeight: 500 }}> | </strong>
            <span>
              <a href={ResumeEN} download="WojciechKubiakCV_EN.pdf">
                <strong>EN</strong>
              </a>
            </span>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Contact;
