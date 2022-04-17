import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav-color fixed-top"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
