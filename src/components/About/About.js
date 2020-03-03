import React, { Component } from "react";
import "./About.css";
import { InView } from "react-intersection-observer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ["AboutContainer"]
    };
    this.animHandler = this.animHandler.bind(this);
  }

  animHandler = val => {
    if (val) {
      this.setState({ mode: ["AboutContainer", "AboutAnim"] });
    }
  };

  render() {
    const engAbout =
      "Hi! My name is Wojtek and I'm student of Computer Science and" +
      "Measuring Systems at the University of Wroclaw. I am passionate" +
      "about creating nice looking web applications using modern technologies." +
      "I got into it during numerous individual and university projects. In " +
      "each of them I showed creativity, consistency and attention to the quality " +
      "of the application and code. During my studies, I also had the opportunity " +
      "to participate in internships and programming internships. During them I " +
      "learned how to work in the SCRUM system, how to communicate with client " +
      "while receiving an application creation order and how to program with " +
      "modern standards.";
    const plAbout =
      "Cześć! Nazywam się Wojtek i jestem studentem Informatyki Stosowanej " +
      "i Systemów Pomiarowych, UWr. Moją pasją jest tworzenie miłych dla oka " +
      "aplikacji webowych z użyciem nowoczesnych technologii. Pasja ta została " +
      "zapoczątkowana podczas licznych indywidualnych i studenckich projektów. " +
      "W każdym z nich wykazałem się kreatywnością, konsekwencją oraz dbałością " +
      "o jakość aplikacji i kodu. Podczas moich studiów miałem również okazję " +
      "uczestniczyć w praktyce oraz stażu programistycznym. Podczas ich trwania " +
      "nauczyłem się specyfiki pracy w systemie SCRUM, komunikacji z klientem podczas " +
      "otrzymywania zlecenia oraz jak programować z zachowaniem nowoczesnych " +
      "standardów.";
    const engHeader = "About me";
    const plHeader = "O mnie";

    const currentAbout = this.props.language ? engAbout : plAbout;
    const currentAboutHeader = this.props.language ? engHeader : plHeader;

    const {mode} = this.state;

    return (
      <InView
        as="div"
        data-testid="About"
        id="about"
        onChange={(inView, entry) => this.animHandler(inView)}
      >
        <div className={mode.join(" ")}>
          <img
            className="AboutImg"
            alt="Writing"
            src={require("./../../img/writing.png")}
          ></img>
          <h1>{currentAboutHeader}</h1>
          <div className="AboutText">
            <p>{currentAbout}</p>
          </div>
        </div>
      </InView>
    );
  }
}

export default About;
