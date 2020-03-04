import React, { useState } from "react";
import { FaGit, FaFileDownload } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import ResumePL from "./../../doc/WojciechKubiakCV_PL.pdf";
import ResumeEN from "./../../doc/WojciechKubiakCV_EN.pdf";
import "./Contact.css";

const Contact = props => {
  const [mode, setMode] = useState(["ContactContainer"]);

  const contactHeaderEng = "Contact";
  const contactHeaderPl = "Kontakt";
  const boxHeaderEng = "Get in touch";
  const boxHeaderPl = "Skontaktuj się";
  const firstContactLineEng =
    "Are you interested in working with me or just have a question?";
  const firstContactLinePl =
    "Jesteś zainteresowana/y pracą ze mną lub masz jakieś pytanie?";
  const contactMeLineEng = "Email me at";
  const contactMeLinePl = "Napisz do mnie na adres";
  const orEng = "or";
  const orPl = "lub";
  const phoneMessageEng = "Send me a message at";
  const phoneMessagePl = "Wyślij wiadomość na numer";

  const currentHeader = props.language ? contactHeaderEng : contactHeaderPl;
  const currentBoxHeader = props.language ? boxHeaderEng : boxHeaderPl;
  const currentFirstContactLine = props.language
    ? firstContactLineEng
    : firstContactLinePl;
  const currentContactMeLine = props.language
    ? contactMeLineEng
    : contactMeLinePl;
  const currentOr = props.language ? orEng : orPl;
  const currentPhoneMsg = props.language ? phoneMessageEng : phoneMessagePl;

  const animHandler = value => {
    if (value) {
      setMode(["ContactContainer", "ContactAnim"]);
    }
  };

  return (
    <InView
      as="div"
      data-testid="Contact"
      id="contact"
      onChange={(inView, entry) => animHandler(inView)}
    >
      <h1>{currentHeader}</h1>
      <div className={mode.join(" ")} data-testid="Contact">
        <h1>{currentBoxHeader}</h1>
        <p>{currentFirstContactLine}</p>
        <p>
          {currentContactMeLine}
          <a href="mailto:wgkubiak@gmail.com" className="MailContainer">
            <strong> wgkubiak@gmail.com</strong>
          </a>
        </p>
        <p>{currentOr}</p>
        <p>
          {currentPhoneMsg}
          <strong className="PhoneNumber"> 726 823 405</strong>
        </p>
      </div>
      <div className="ResumeContainer">
        <FaFileDownload className="DownloadIcon"></FaFileDownload>
        <div className="ResumeLinks">
          <span>
            <a href={ResumePL} download="WojciechKubiakCV_PL.pdf">
              <strong>PL</strong>
            </a>
          </span>
          <strong style={{ color: "#292930" }}> | </strong>
          <span>
            <a href={ResumeEN} download="WojciechKubiakCV_EN.pdf">
              <strong>EN</strong>
            </a>
          </span>
        </div>
      </div>
      <div className="GitContainer">
        <a href={"https://www.github.com/wgkubiak"}>
          <button className="GitBtn">
            <FaGit className="GitIcon" />
          </button>
        </a>
        <p>/wgkubiak</p>
      </div>
    </InView>
  );
};

export default Contact;
