import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ({ initMode = false, initLanguage = false, initImg = 0 }) => {
  const [mode, setMode] = useState(initMode);
  const [language, setLanguage] = useState(initLanguage);
  const [img, setImg] = useState(initImg);

  const headerOn = () => setMode(true);
  const headerOff = () => setMode(false);
  const languageHandler = () => {
    setLanguage(!language);
    return img ? setImg(0) : setImg(1);
  };

  return (
    <div className="App">
      <Header
        language={language}
        headerMode={mode}
        headerOn={headerOn}
        headerOff={headerOff}
        languageHandler={languageHandler}
        index={img}
      />
      <LandingPage headerOn={headerOn} headerOff={headerOff} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <SocialMedia />
      <Footer language={language} />
    </div>
  );
};

export default App;
