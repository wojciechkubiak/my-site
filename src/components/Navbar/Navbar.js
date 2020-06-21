import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Tooltip, OverlayTrigger, NavDropdown } from "react-bootstrap";
import { Navbar as Nb } from "react-bootstrap";
import SocialMedia from "./../SocialMedia/SocialMedia";

const Navbar = (props) => {
  const [lang, setLang] = useState("Polski");
  const [langShort, setLangShort] = useState("PL");

  let landing = ["nav--rect", props.landing ? "nav--rect-active" : ""];

  useEffect(() => {
    if (props.lang.toUpperCase() === "PL") {
      setLang("Polski");
      setLangShort("PL");
    } else if (props.lang.toUpperCase() === "EN") {
      setLang("English");
      setLangShort("UK");
    }
  }, [props.lang]);

  let projects = ["nav--rect", props.projects ? "nav--rect-active" : ""];

  let skills = ["nav--rect", props.skills ? "nav--rect-active" : ""];

  let contact = ["nav--rect", props.contact ? "nav--rect-active" : ""];

  return (
    <>
      <Nb style={{ top: "0%", padding: "0" }}>
        <NavDropdown
          title={`${lang} (${langShort})`}
          id="collasible-nav-dropdown dropdown-menu-align-right"
          className="language--dropdown"
          style={{
            position: "fixed",
            left: "1em",
            top: "1em",
            zIndex: "500",
            borderRadius: "2em",
            border: "1px solid #ffffff",
            backgroundColor: "#232323",
          }}
        >
          <NavDropdown.Item
            value="pl"
            onClick={() => props.languageHandler("pl")}
          >
            Polski (PL)
          </NavDropdown.Item>
          <NavDropdown.Item
            value="en"
            onClick={() => props.languageHandler("en")}
          >
            English (UK)
          </NavDropdown.Item>
        </NavDropdown>
      </Nb>
      <div className="nav--container" style={{ zIndex: "500" }}>
        <OverlayTrigger
          overlay={
            <Tooltip>
              {props.t("header.about", { framework: "react-i18next" })}
            </Tooltip>
          }
          placement="right"
        >
          <div className={landing.join(" ")} onClick={props.showLanding}>
            <span className="nav--circle"></span>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip>
              {props.t("header.projects", { framework: "react-i18next" })}
            </Tooltip>
          }
          placement="right"
        >
          <div className={projects.join(" ")} onClick={props.showProjects}>
            <span className="nav--circle"></span>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip>
              {props.t("header.skills", { framework: "react-i18next" })}
            </Tooltip>
          }
          placement="right"
        >
          <div className={skills.join(" ")} onClick={props.showSkills}>
            <span className="nav--circle"></span>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip>
              {props.t("header.contact", { framework: "react-i18next" })}
            </Tooltip>
          }
          placement="right"
        >
          <div className={contact.join(" ")} onClick={props.showContact}>
            <span className="nav--circle"></span>
          </div>
        </OverlayTrigger>
      </div>
      <div
        style={{
          position: "fixed",
          left: "1em",
          bottom: "1.5em",
          display: "inline-block",
          zIndex: "500",
        }}
      >
        <SocialMedia />
      </div>
    </>
  );
};

export default Navbar;
