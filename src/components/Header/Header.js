import React, { useRef, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import gsap from "gsap";
import "./Header.css";
import SocialMedia from "./../../components/SocialMedia/SocialMedia";

const Header = (props, {initWithoutUnderline = {}}) => {
  let headerRef = useRef(null);
  const [landing, setLanding] = useState(initWithoutUnderline);
  const [projects, setProjects] = useState(initWithoutUnderline);
  const [skills, setSkills] = useState(initWithoutUnderline);
  const [contact, setContact] = useState(initWithoutUnderline);
  const [lang, setLang] = useState("Polski");
  const [langShort, setLangShort] = useState("PL");
  const [arrowRotation, setArrowRotation] = useState("180deg");
  const [activeKey, setActiveKey] = useState(1);

  let mode = [
    "shadow p-3 mb-5",
    props.headerMode ? "header--out" : "header--top"
  ];

  let textColor = [
    "header--link",
    props.headerMode ? "text--gold" : "text--gray"
  ];

  const rotateElement = () => {
    const rotation = arrowRotation;
    
    if(rotation === "0deg") {
      setArrowRotation("180deg")
    } else if (rotation === "180deg") {
      setArrowRotation("0deg")
    }
  }

  const headerLinkHandler = (value, action) => {
    if(value) {
      action({textDecoration: "underline 1px"})
    } else {
      action({})
    }
  }

  useEffect(() => {
    headerLinkHandler(props.landingOn, setLanding)
    headerLinkHandler(props.projectsOn, setProjects)
    headerLinkHandler(props.skillsOn, setSkills)
    headerLinkHandler(props.contactOn, setContact)

    if(props.lang.toUpperCase() === "PL") {
      setLang("Polski");
      setLangShort("PL");
      console.log(props.lang.toUpperCase())
    } else if(props.lang.toUpperCase() === "EN") {
      setLang("English");
      setLangShort("UK");
      console.log(props.lang.toUpperCase())
    }

    const dropdownArrow = document.querySelector('.dropdown-toggle').style;
    dropdownArrow.setProperty('--val', `${arrowRotation}`)

  }, [props.landingOn, props.projectsOn, props.skillsOn, props.contactOn, props.lang, arrowRotation])

  useEffect(() => {
    if (props.show) {
      gsap.to(headerRef, {
        duration: 0.5,
        opacity: 1,
        visibility: "visible"
      });
    }
  }, [props.show]);

  return (
    <header>
      <Navbar
        className={mode.join(" ")}
        collapseOnSelect
        expand="xl"
        fixed="top"
        style={{ visibility: "hidden", opacity: "0" }}
        ref={e => {
          headerRef = e;
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center header--container"
        >
          <Nav variant="pills" activeKey={activeKey}>
            <Nav.Link
              eventKey="1"
              href="#landing"
              className={textColor.join(" ")}
              onClick={() => {
                setActiveKey(1);
                props.showLanding();
              }}
              style={landing}
            >
              {props.t("header.about", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              href="#projects"
              className={textColor.join(" ")}
              onClick={() => {
                setActiveKey(2);
                props.showProjects();
              }}
              style={projects}
            >
              {props.t("header.projects", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              eventKey="3"
              className={textColor.join(" ")}
              onClick={() => {
                setActiveKey(3);
                props.showSkills();
              }}
              style={skills}
            >
              {props.t("header.skills", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              eventKey="4"
              className={textColor.join(" ")}
              onClick={() => {
                setActiveKey(4);
                props.showContact();
              }}
              style={contact}
            >
              {props.t("header.contact", { framework: "react-i18next" })}
            </Nav.Link>
          </Nav>
          <NavDropdown onClick={() => rotateElement() } title={`${lang} (${langShort})`} id="collasible-nav-dropdown dropdown-menu-align-right" className="language--dropdown" style={{position: "absolute", left: "0"}}>
            <NavDropdown.Item value="pl" onClick={() => props.languageHandler("pl")} href="#pl">Polski (PL)</NavDropdown.Item>
            <NavDropdown.Item value="en" onClick={() => props.languageHandler("en")} href="#eng">English (UK)</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end socials" style={{position: "absolute", right: "0"}}>
          <SocialMedia/>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
