import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <Navbar
      className="shadow p-3 mb-5 rounded"
      collapseOnSelect
      expand="md"
      fixed="top"     
      variant="light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center HeaderText">
        <Nav>
          <Nav.Link href="#landing" className="HeaderLink">Home</Nav.Link>
          <Nav.Link href="#about" className="HeaderLink">About</Nav.Link>
          <Nav.Link href="#skills" className="HeaderLink">Skills</Nav.Link>
          <Nav.Link href="#projects" className="HeaderLink">Projects</Nav.Link>
          <Nav.Link href="#contact" className="HeaderLink">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
