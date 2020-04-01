import React, { useRef, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import gsap from "gsap";
import "./Header.css";
import SocialMedia from "./../../components/SocialMedia/SocialMedia";

const Header = props => {
  let headerRef = useRef(null);

  let mode = [
    "shadow p-3 mb-5",
    props.headerMode ? "header--out" : "header--top"
  ];

  let textColor = [
    "header--link",
    props.headerMode ? "text--gold" : "text--gray"
  ];

  const handler = () => {
    props.headerOn();
    props.arrowHandler(true);
  };

  const headerHandler = () => {
    props.headerOff();
  }

  useEffect(() => {
    console.log(props.landingOn, props.projectsOn, props.skillsOn, props.contactOn)
  }, [props.landingOn, props.projectsOn, props.skillsOn, props.contactOn])

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
          <Nav>
            <Nav.Link
              href="#landing"
              className={textColor.join(" ")}
              onClick={headerHandler}
            >
              {props.t("header.about", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={textColor.join(" ")}
              onClick={handler}
            >
              {props.t("header.projects", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={textColor.join(" ")}
              onClick={handler}
              // style={{borderLeft: "3px solid #fbd791", borderRight: "3px solid #fbd791"}}
            >
              {props.t("header.skills", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={textColor.join(" ")}
              onClick={handler}
            >
              {props.t("header.contact", { framework: "react-i18next" })}
            </Nav.Link>
          </Nav>
          <NavDropdown title={props.lang.toUpperCase()} id="collasible-nav-dropdown dropdown-menu-align-right" style={{position: "absolute", left: "0"}}>
            <NavDropdown.Item value="pl" onClick={() => props.languageHandler("pl")} href="#pl">Polski</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item value="en" onClick={() => props.languageHandler("en")} href="#eng">English</NavDropdown.Item>
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
