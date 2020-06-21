import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { isMobile } from "react-device-detect";

const App = (props) => {
  const { t, i18n } = props;

  const [hideLandingAnim, setHideLandingAnim] = useState(false);
  const [hideProjectsAnim, setHideProjectsAnim] = useState(false);
  const [hideSkillsAnim, setHideSkillsAnim] = useState(false);
  const [hideContactAnim, setHideContactAnim] = useState(false);
  const [landing, setShowLanding] = useState(true);
  const [projects, setShowProjects] = useState(false);
  const [skills, setShowSkills] = useState(false);
  const [contact, setShowContact] = useState(false);
  const [landingAnimComplete, setLandingAnimComplete] = useState(false);
  const [projectsAnimComplete, setProjectsAnimComplete] = useState(false);
  const [skillsAnimComplete, setSkillsAnimComplete] = useState(false);
  const [contactAnimComplete, setContactAnimComplete] = useState(false);
  const [mode, setMode] = useState(true);
  const [lang, setLang] = useState("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const langHandler = (language) => {
    setLang(language);
  };

  const show = (landing, projects, skills, contact) => {
    setShowLanding(landing);
    setShowProjects(projects);
    setShowSkills(skills);
    setShowContact(contact);
  };

  const hide = (landing, projects, skills, contact) => {
    setHideLandingAnim(landing);
    setHideProjectsAnim(projects);
    setHideSkillsAnim(skills);
    setHideContactAnim(contact);
  };

  const showLanding = () => {
    hide(false, true, true, true);

    if (isMobile) {
      show(true, false, false, false);
    } else {
      setTimeout(() => {
        show(true, false, false, false);
      }, 1000);
    }
  };

  const showProjects = () => {
    hide(true, false, true, true);

    if (isMobile) {
      show(false, true, false, false);
    } else {
      setTimeout(() => {
        show(false, true, false, false);
      }, 1000);
    }
  };

  const showSkills = () => {
    hide(true, true, false, true);

    if (isMobile) {
      show(false, false, true, false);
    } else {
      setTimeout(() => {
        show(false, false, true, false);
      }, 1000);
    }
  };

  const showContact = () => {
    hide(true, true, true, false);

    if (isMobile) {
      show(false, false, false, true);
    } else {
      setTimeout(() => {
        show(false, false, false, true);
      }, 1000);
    }
  };

  const landingAnimCompleteHandler = () => setLandingAnimComplete(true);
  const projectsAnimCompleteHandler = () => setProjectsAnimComplete(true);
  const skillsAnimCompleteHandler = () => setSkillsAnimComplete(true);
  const contactAnimCompleteHandler = () => setContactAnimComplete(true);

  return (
    <div className="App">
      <Navbar
        t={t}
        landing={landing}
        projects={projects}
        skills={skills}
        lang={lang}
        languageHandler={langHandler}
        contact={contact}
        showLanding={showLanding}
        showProjects={showProjects}
        showSkills={showSkills}
        showContact={showContact}
        mode={mode}
      />
      {landing && (
        <LandingPage
          animComplete={landingAnimComplete}
          hide={hideLandingAnim}
          setHideAnim={setHideLandingAnim}
          setAnimComplete={landingAnimCompleteHandler}
          t={t}
          modeHandler={setMode}
        />
      )}
      {projects && (
        <Projects
          animComplete={projectsAnimComplete}
          hide={hideProjectsAnim}
          setHideAnim={setHideProjectsAnim}
          setAnimComplete={projectsAnimCompleteHandler}
          t={t}
          modeHandler={setMode}
        />
      )}
      {skills && (
        <Skills
          animComplete={skillsAnimComplete}
          hide={hideSkillsAnim}
          setHideAnim={setHideSkillsAnim}
          setAnimComplete={skillsAnimCompleteHandler}
          t={t}
          modeHandler={setMode}
        />
      )}
      {contact && (
        <Contact
          animComplete={contactAnimComplete}
          hide={hideContactAnim}
          setHideAnim={setHideContactAnim}
          setAnimComplete={contactAnimCompleteHandler}
          t={t}
          modeHandler={setMode}
        />
      )}
      <Footer t={t} />
    </div>
  );
};

export default withTranslation("common")(App);
