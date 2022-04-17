import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import UseFirebase from "../../Hooks/UseFirebase";
import Logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const { handleSignOut, signOutTxt, userDetails } = UseFirebase();
  console.log(userDetails);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav-color fixed-top"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={HashLink} to="/#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#overview">
              Overview
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about-me">
              About me
            </Nav.Link>
          </Nav>
          {userDetails ? (
            <button onClick={handleSignOut} className="signout-btn">
              Sign out
            </button>
          ) : (
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
