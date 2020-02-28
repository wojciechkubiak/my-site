import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = props => {
  let mode = [
    "shadow p-3 mb-5 rounded",
    props.headerMode ? "HeaderOut" : "HeaderTop"
  ]
  
  let textColor = [
    "HeaderLink",
    props.headerMode ? "HeaderTextColorWhite" :  "HeaderTextColorDark"
  ]


  // Handle header color onClick
return (
  <div className="Header">
    <Navbar
      className={mode.join(' ')}
      collapseOnSelect
      expand="md"
      fixed="top"     
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center HeaderText">
        <Nav>
          <Nav.Link href="#landing" className={textColor.join(' ')}>Home</Nav.Link>
          <Nav.Link href="#about" className={textColor.join(' ')}>About</Nav.Link>
          <Nav.Link href="#skills" className={textColor.join(' ')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={textColor.join(' ')}>Projects</Nav.Link>
          <Nav.Link href="#contact" className={textColor.join(' ')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
};

export default Header;
