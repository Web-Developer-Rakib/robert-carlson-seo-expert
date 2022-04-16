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
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
            <Nav.Link href="#pricing">About me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link href="#deets">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
