import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
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
    initArrow = false
  }
) => {
  const [mode, setMode] = useState(initMode);
  const [arrow, setArrow] = useState(initArrow);
  const [scroll, setScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const { t, i18n } = props;

  const [isMobile, setIsMobile] = useState(false);
  const [landingOn, setLandingOn] = useState(true);
  const [projectsOn, setProjectsOn] = useState(false);
  const [skillsOn, setSkillsOn] = useState(false);
  const [contactOn, setContactOn] = useState(false);

  const [landing, setShowLanding] = useState(true);
  const [projects, setShowProjects] = useState(false);
  const [skills, setShowSkills] = useState(false);
  const [contact, setShowContact] = useState(false);

  const [landingAnimComplete, setLandingAnimComplete] = useState(false);
  const [projectsAnimComplete, setProjectsAnimComplete] = useState(false);
  const [skillsAnimComplete, setSkillsAnimComplete] = useState(false);
  const [contactAnimComplete, setContactAnimComplete] = useState(false);

  const headerOn = () => setMode(true);
  const headerOff = () => setMode(false);
  const showHeaderHandler = () => setShowHeader(true);

  const [lang, setLang] = useState("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n])

  useEffect(() => {
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {     
          setIsMobile(true);
      }
  }, [])

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

  const show = (landing, projects, skills, contact) => {
    setShowLanding(landing);
    setShowProjects(projects);
    setShowSkills(skills);
    setShowContact(contact);
  }

  const showLanding = () => show(true, false, false, false);
  const showProjects = () => show(false, true, false, false);
  const showSkills = () => show(false, false, true, false);
  const showContact = () => show(false, false, false, true);

  const landingAnimCompleteHandler = () => setLandingAnimComplete(true);
  const projectsAnimCompleteHandler = () => setProjectsAnimComplete(true);
  const skillsAnimCompleteHandler = () => setSkillsAnimComplete(true);
  const contactAnimCompleteHandler = () => setContactAnimComplete(true);

  return (
    <div className="App">
        <Navbar t={t}
        landing={landing}
        projects={projects}
        skills={skills}
        lang={lang}
        languageHandler={langHandler}
        contact={contact}
        showLanding={showLanding}
        showProjects={showProjects}
        showSkills={showSkills}
        showContact={showContact} />
      {landing && (
        <LandingPage animComplete={landingAnimComplete} setAnimComplete={landingAnimCompleteHandler} showHeaderHandler={showHeaderHandler} t={t} />
      )}
      {skills && (
        <Skills animComplete={skillsAnimComplete} setAnimComplete={skillsAnimCompleteHandler} t={t} />
      )}
      {projects && (
        <Projects animComplete={projectsAnimComplete} setAnimComplete={projectsAnimCompleteHandler} t={t} />
      )}
      {contact && (
        <Contact animComplete={contactAnimComplete} setAnimComplete={contactAnimCompleteHandler} t={t} />
      )}
       <Footer t={t} />
    </div>
  );
};

export default withTranslation("common")(App);
