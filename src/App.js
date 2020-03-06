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
import { MdKeyboardArrowUp } from "react-icons/md";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (
  props,
  { initMode = false, initLanguage = false, initImg = 0, initArrow = false }
) => {
  const [mode, setMode] = useState(initMode);
  const [language, setLanguage] = useState(initLanguage);
  const [img, setImg] = useState(initImg);
  const [arrow, setArrow] = useState(initArrow);

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

  const arrowHandler = (value = false) => {
    setArrow(value);
  };

  return (
    <div className="App">
      <Header
        headerMode={mode}
        headerOn={headerOn}
        headerOff={headerOff}
        languageHandler={languageHandler}
        index={img}
        arrowHandler={arrowHandler}
        t={t}
      />
      <LandingPage
        headerOn={headerOn}
        headerOff={headerOff}
        arrowHandler={arrowHandler}
        t={t}
      />
      <About t={t} arrow={arrowHandler} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <SocialMedia />
      <Footer t={t} />
      {arrow && (
        <Nav.Link href="#landing">
          {/* TODO zfixuj ją na topa i przewijaj do góry do landing po jej kliknięciu */}
          <MdKeyboardArrowUp
            className="arrow"
            onClick={() => {
              headerOff();
              arrowHandler();
            }}
          ></MdKeyboardArrowUp>
        </Nav.Link>
      )}
    </div>
  );
};

export default withTranslation("common")(App);
