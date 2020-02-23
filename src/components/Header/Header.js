import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center HeaderText">
        <Nav>
          <Nav.Link href="#about" className="HeaderLink">O mnie</Nav.Link>
          <Nav.Link href="#skills" className="HeaderLink">Umiejętności</Nav.Link>
          <Nav.Link href="#projects" className="HeaderLink">Projekty</Nav.Link>
          <Nav.Link href="#contact" className="HeaderLink">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
