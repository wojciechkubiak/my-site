import React, { Component } from "react";
import "./Contact.css";
import { FaGit } from "react-icons/fa";
import { InView } from "react-intersection-observer";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ["ContactContainer"]
    };
    this.changeClass = this.changeClass.bind(this);
  }

  changeClass = val => {
    if (val) {
      this.setState({ mode: ["ContactContainer", "ContactAnim"] });
    }
  };

  render() {
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

    const currentHeader = this.props.language
      ? contactHeaderEng
      : contactHeaderPl;
    const currentBoxHeader = this.props.language ? boxHeaderEng : boxHeaderPl;
    const currentFirstContactLine = this.props.language
      ? firstContactLineEng
      : firstContactLinePl;
    const currentContactMeLine = this.props.language
      ? contactMeLineEng
      : contactMeLinePl;
    const currentOr = this.props.language ? orEng : orPl;
    const currentPhoneMsg = this.props.language
      ? phoneMessageEng
      : phoneMessagePl;

    const { mode } = this.state;

    return (
      <InView
        as="div"
        data-testid="Contact"
        id="contact"
        onChange={(inView, entry) => this.changeClass(inView)}
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
  }
}

export default Contact;
