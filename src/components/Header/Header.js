import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = props => {
  let mode = ["shadow p-3 mb-5", props.headerMode ? "HeaderOut" : "HeaderTop"];

  let textColor = [
    "HeaderLink",
    props.headerMode ? "HeaderTextColorWhite" : "HeaderTextColorDark"
  ];

  const handler = () => {
    props.headerOn();
    props.arrowHandler(true);
  };

  return (
    <header>
      <Navbar
        className={mode.join(" ")}
        collapseOnSelect
        expand="xl"
        fixed="bottom"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center HeaderText"
        >
          <Nav>
            {typeof window.orientation !== "undefined" && (
              <Nav.Link
                href="#landing"
                className={textColor.join(" ")}
                onClick={handler}
              >
                {props.t("header.about", { framework: "react-i18next" })}
              </Nav.Link>
            )}
            <Nav.Link
              href="#skills"
              className={textColor.join(" ")}
              onClick={handler}
            >
              {props.t("header.skills", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={textColor.join(" ")}
              onClick={handler}
            >
              {props.t("header.projects", { framework: "react-i18next" })}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={textColor.join(" ")}
              onClick={handler}
            >
              {props.t("header.contact", { framework: "react-i18next" })}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
