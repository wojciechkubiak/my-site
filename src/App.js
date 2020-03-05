import React, { useState } from "react";
import { withTranslation } from "react-i18next";
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

const App = (
  props,
  { initMode = false, initLanguage = false, initImg = 0 }
) => {
  const [mode, setMode] = useState(initMode);
  const [language, setLanguage] = useState(initLanguage);
  const [img, setImg] = useState(initImg);

  const { t, i18n } = props;

  const headerOn = () => setMode(true);
  const headerOff = () => setMode(false);
  const languageHandler = () => {
    setLanguage(!language);

    language
      ? (document.documentElement.lang = "pl")
      : (document.documentElement.lang = "en");

    language ? i18n.changeLanguage("pl") : i18n.changeLanguage("en");

    return img ? setImg(0) : setImg(1);
  };

  return (
    <div className="App">
      <Header
        headerMode={mode}
        headerOn={headerOn}
        headerOff={headerOff}
        languageHandler={languageHandler}
        index={img}
        t={t}
      />
      <LandingPage headerOn={headerOn} headerOff={headerOff} t={t} />
      <About language={language} t={t} />
      <Projects language={language} t={t} />
      <Skills language={language} t={t} />
      <Contact language={language} t={t} />
      <SocialMedia />
      <Footer language={language} t={t} />
    </div>
  );
};

export default withTranslation("common")(App);
