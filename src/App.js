import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMode: false
    };
    this.headerHandler = this.headerHandler.bind(this);
  }

  headerHandler = (val) => {
    val
      ? this.setState({ headerMode: false })
      : this.setState({ headerMode: true });
  };

  render() {
    return (
      <div className="App">
        <img
          className="bg"
          src={require("./img/bg_blur.jpg")}
          alt="React-icon"
        />
        <Header headerMode={this.state.headerMode} />
        <LandingPage headerHandler={this.headerHandler}/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SocialMedia />
      </div>
    );
  }
}

export default App;
