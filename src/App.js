import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import "./App.css";

//TODO: Resize everything em -> vh/vw
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMode: false,
      language: false, // true = EN | false = PL
      img: 0,
      imgSrc: ["uk-flag.jpg", "pl-flag.jpg"]
    };
    this.headerHandler = this.headerHandler.bind(this);
  }

  headerHandler = val => {
    val
      ? this.setState({ headerMode: false })
      : this.setState({ headerMode: true });
  };

  headerHandlerOn = () => {
    this.setState({ headerMode: true }, () =>
      console.log(`headermode:${this.state.headerMode}`)
    );
  };

  headerHandlerOff = () => {
    this.setState({ headerMode: false }, () =>
      console.log(`headermode:${this.state.headerMode}`)
    );
  };

  languageHandler = () => {
    const { language, img } = this.state;

    this.setState({ language: !language }, () => console.log(language));

    if (img === 1) {
      this.setState({ img: 0 });
    }

    if (img === 0) {
      this.setState({ img: 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          language={this.state.language}
          headerMode={this.state.headerMode}
          headerOn={this.headerHandlerOn}
          headerOff={this.headerHandlerOff}
        />
        <LandingPage
          headerHandler={this.headerHandler}
          headerOn={this.headerHandlerOn}
        />
        <About language={this.state.language} />
        <Skills language={this.state.language} />
        <Projects language={this.state.language} />
        <Contact language={this.state.language} />
        <SocialMedia />
        <Footer language={this.state.language} />
        <button className="languageBtn" onClick={this.languageHandler}>
          <img
            className="languageImg"
            src={require(`./img/${this.state.imgSrc[this.state.img]}`)}
            alt="flag-icon"
          />
        </button>
      </div>
    );
  }
}

export default App;
