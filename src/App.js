import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (
  props,
  {
    initMode = false,
    initLanguage = false,
    initArrow = false
  }
) => {
  const [mode, setMode] = useState(initMode);
  const [language, setLanguage] = useState(initLanguage);
  const [arrow, setArrow] = useState(initArrow);
  const [scroll, setScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const { t, i18n } = props;

  const headerOn = () => setMode(true);
  const headerOff = () => setMode(false);
  const showHeaderHandler = () => setShowHeader(true);

  const [lang, setLang] = useState("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
    console.log(lang)
  }, [lang])
  

  const langHandler = language => {
    setLang(language);
  }

  const arrowHandler = (value = false) => {
    setArrow(value);
  };

  window.addEventListener("scroll", function (event) {
    if (typeof window.orientation === "undefined") {
      if (
        this.scrollY < 3 ||
        window.pageYOffset || document.documentElement.scrollTop < 3
      ) {
        setScroll(this.scrollY);

        if (
          this.scrollY !== 0 ||
          window.pageYOffset || document.documentElement.scrollTop !== 0
        ) {
          headerOn();
          arrowHandler(true);
          showHeaderHandler();
        } else {
          headerOff();
          arrowHandler(false);
        }
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
        lang={lang}
        languageHandler={langHandler}
        t={t}
        show={showHeader}
      />
      <LandingPage arrowHandler={arrowHandler} showHeaderHandler={showHeaderHandler} showArrow={arrow} t={t} />
      <Projects t={t} />
      <Skills t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
};

export default withTranslation("common")(App);
