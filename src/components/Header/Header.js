import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = props => {
  let mode = ["shadow p-3 mb-5", props.headerMode ? "HeaderOut" : "HeaderTop"];

  let textColor = [
    "HeaderLink",
    props.headerMode ? "HeaderTextColorWhite" : "HeaderTextColorDark"
  ];

  // Handle header color onClick
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
              {props.language ? "Home" : "Strona główna"}
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {props.language ? "About" : "O mnie"}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {props.language ? "Skills" : "Technologie"}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {props.language ? "Projects" : "Projekty"}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              {props.language ? "Contact" : "Kontakt"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
