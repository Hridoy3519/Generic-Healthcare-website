import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className="navbar fixed-top" bg="dark" collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">Generic</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link as={Link} className="nav-link" to="/home">Home</Nav.Link>
              <Nav.Link as={Link} className="nav-link" to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} className="nav-link" to="/appointment">Appointment</Nav.Link>
            </Nav>
            <Nav className="nav">
              <Nav.Link as={Link} className="nav-link login" to="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// <Nav.Link  className="nav-link" eventKey={2} href="#memes">
//                 Dank memes
//               </Nav.Link>
