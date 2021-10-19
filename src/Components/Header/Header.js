import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="navbar fixed-top"
        bg="dark"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">
            Generic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link as={Link} className="nav-link" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="nav-link" to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} className="nav-link" to="/appointment">
                Appointment
              </Nav.Link>
            </Nav>
            <Nav className="nav">
              {user.email ? (
                <div className="loggedIn-user d-flex align-items-center justify-content-between">
                  <h5 className="colored-text me-2">
                    <i className="fas fa-user"></i> {user.displayName}
                  </h5>
                  <button onClick={logOut} className="generic-customized-btn">
                    Logout
                  </button>
                </div>
              ) : (
                <Nav.Link as={Link} className="nav-link login" to="/login">
                  Log In
                </Nav.Link>
              )}
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
