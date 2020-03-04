import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = props => {
  let mode = ["shadow p-3 mb-5", props.headerMode ? "HeaderOut" : "HeaderTop"];

  let textColor = [
    "HeaderLink",
    props.headerMode ? "HeaderTextColorWhite" : "HeaderTextColorDark"
  ];

  let header = props.language ? "Home" : "Strona główna";
  let about = props.language ? "About" : "O mnie";
  let skills = props.language ? "Skills" : "Technologie";
  let projects = props.language ? "Projects" : "Projekty";
  let contact = props.language ? "Contact" : "Kontakt";
  const imgSrc = ["uk-flag.jpg", "pl-flag.jpg"];

  return (
    <div className="Header">
      <Navbar
        className={mode.join(" ")}
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center HeaderText"
        >
          <Nav>
            <Nav.Link
              href="#landing"
              className={textColor.join(" ")}
              onClick={props.headerOff}
              active
            >
              {header}
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {about}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {skills}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {projects}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {contact}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="LanguageBtn">
          <img
            className="LanguageImg"
            src={require(`./../../img/${imgSrc[props.index]}`)}
            alt="flag-icon"
            onClick={props.languageHandler}
          />
        </button>
      </Navbar>
    </div>
  );
};

export default Header;
