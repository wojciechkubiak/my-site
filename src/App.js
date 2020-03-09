import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Button } from "react-bootstrap";
import UKFlag from "./../src/img/uk-flag.jpg";
import PLFlag from "./../src/img/pl-flag.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (
  props,
  {
    initMode = false,
    initLanguage = false,
    initImg = UKFlag,
    initArrow = false
  }
) => {
  const [mode, setMode] = useState(initMode);
  const [language, setLanguage] = useState(initLanguage);
  const [img, setImg] = useState(initImg);
  const [arrow, setArrow] = useState(initArrow);
  const [scroll, setScroll] = useState(0);

  const { t, i18n } = props;

  const headerOn = () => setMode(true);
  const headerOff = () => setMode(false);
  const languageHandler = () => {
    setLanguage(!language);

    language
      ? (document.documentElement.lang = "pl")
      : (document.documentElement.lang = "en");

    language ? i18n.changeLanguage("pl") : i18n.changeLanguage("en");

    return img === UKFlag ? setImg(PLFlag) : setImg(UKFlag);
  };

  const arrowHandler = (value = false) => {
    setArrow(value);
  };

  const isOnMobile = () => {
    return navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
      ? true
      : false;
  };

  window.addEventListener("scroll", function(event) {
    if (!isOnMobile) {
      setScroll(this.scrollY);

      if (this.scrollY > 5) {
        headerOn();
      } else {
        headerOff();
        arrowHandler(false);
      }
    }
  });

  return (
    <div className="App">
      <Header
        headerMode={mode}
        headerOn={headerOn}
        headerOff={headerOff}
        arrowHandler={arrowHandler}
        scrollPos={scroll}
        t={t}
      />
      <LandingPage arrowHandler={arrowHandler} t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <SocialMedia />
      <Footer t={t} />
      <button
        className="LanguageBtn"
        style={{ backgroundImage: `url(${img})` }}
        onClick={languageHandler}
      ></button>
      {(arrow || scroll > 5) && (
        <Button
          href="#landing"
          className="arrow"
          variant="dark"
          onClick={() => arrowHandler(false)}
        >
          <MdKeyboardArrowUp></MdKeyboardArrowUp>
        </Button>
      )}
    </div>
  );
};

export default withTranslation("common")(App);
