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
      this.setState({ mode: ["ContactContainer", "ContactAnim"] }, () =>
        console.log(this.state.mode)
      );
    }
  };

  render() {
    return (
      <InView
        as="div"
        data-testid="Contact"
        id="contact"
        onChange={(inView, entry) => this.changeClass(inView)}
      >
        <h1> {this.props.language ? "Contact" : "Kontakt"}</h1>
        <div className={this.state.mode.join(" ")} data-testid="Contact">
          <h1> {this.props.language ? "Get in touch" : "Skontaktuj się"}</h1>
          <p>
            {" "}
            {this.props.language
              ? "Are you interested in working with me or just have a question?"
              : "Jesteś zainteresowana/y pracą ze mną lub masz jakieś pytanie?"}
          </p>
          <p>
            {this.props.language ? "Email me at" : "Napisz do mnie na adres"}{" "}
            <a href="mailto:wgkubiak@gmail.com" className="MailContainer">
              <strong>wgkubiak@gmail.com</strong>
            </a>
          </p>
          <p>{this.props.language ? "or" : "lub"}</p>
          <p>
            {this.props.language
              ? "Send me a message at "
              : "Wyślij wiadomość na numer "}
            <strong className="PhoneNumber">726 823 405</strong>
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
