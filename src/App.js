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
    this.headerHandlerOn = this.headerHandlerOn.bind(this);
    this.headerHandlerOff = this.headerHandlerOff.bind(this);
  }

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
    return (
      <div className="App">
        <Header
          language={this.state.language}
          headerMode={this.state.headerMode}
          headerOn={this.headerHandlerOn}
          headerOff={this.headerHandlerOff}
          languageHandler={this.languageHandler}
          index={this.state.img}
        />
        <LandingPage
          headerOn={this.headerHandlerOn}
          headerOff={this.headerHandlerOff}
        />
        <About language={this.state.language} />
        <Skills language={this.state.language} />
        <Projects language={this.state.language} />
        <Contact language={this.state.language} />
        <SocialMedia />
        <Footer language={this.state.language} />
        
      </div>
    );
  }
}

export default App;
