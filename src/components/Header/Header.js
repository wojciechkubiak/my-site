import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = props => {
 
  let mode = ["shadow p-3 mb-5", props.headerMode ? "HeaderOut" : "HeaderTop"];

  let textColor = [
    "HeaderLink",
    props.headerMode ? "HeaderTextColorWhite" : "HeaderTextColorDark"
  ];
  
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
              { props.t('header.Home', { framework: "react-i18next"}) }
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              { props.t('header.About', { framework: "react-i18next"}) }
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              { props.t('header.Skills', { framework: "react-i18next"}) }
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              { props.t('header.Projects', { framework: "react-i18next"}) }
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={textColor.join(" ")}
              onClick={props.headerOn}
            >
              { props.t('header.Contact', { framework: "react-i18next"}) }
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
