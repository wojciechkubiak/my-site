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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMode: false,
      language: false, // true = EN | false = PL
      img: 0
    };
    this.headerHandler = this.headerHandler.bind(this);
  }

  headerHandler = val => {
    val
      ? this.setState({ headerMode: false })
      : this.setState({ headerMode: true });
  };

  headerHandlerOn = () => {
    this.setState({ headerMode: true });
  };

  headerHandlerOff = () => {
    this.setState({ headerMode: false });
  };

  languageHandler = () => {
    const { language, img } = this.state;

    this.setState({ language: !language });

    return img ? this.setState({ img: 0 }) : this.setState({ img: 1 });
  };

  render() {
    const imgSrc = ["uk-flag.jpg", "pl-flag.jpg"];

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
        <button className="LanguageBtn" onClick={this.languageHandler}>
          <img
            className="LanguageImg"
            src={require(`./img/${imgSrc[this.state.img]}`)}
            alt="flag-icon"
          />
        </button>
      </div>
    );
  }
}

export default App;
