import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
const Header = () => (
  <header>
    <Navbar sticky="top" bg="primary" variant="dark">
      <Navbar.Brand className="brand-name" href="#home">
        Thomas Stimac
      </Navbar.Brand>
      <Nav className="nav-bar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
