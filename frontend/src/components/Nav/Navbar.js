import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import logo from "../../assets/fanzLogo.png";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="logo"
              height="50px"
              width="50px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Brand className="fw-bold fs-4" href="/">
            First Aid NZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey={2}>
                <Link
                  className="text-decoration-none link-fanzRed"
                  to="/products"
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link
                  className="text-decoration-none link-fanzRed"
                  to="/courses"
                >
                  Courses
                </Link>
              </Nav.Link>
              <NavDropdown
                menuVariant="dark"
                title="Services"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none link-fanzRed"
                    to="/screening"
                  >
                    Health & Drug Screening
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none link-fanzRed"
                    to="/medics"
                  >
                    Event Medics
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none link-fanzRed"
                    to="/courses"
                  >
                    First Aid Courses
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                <Link className="text-decoration-none link-fanzRed" to="/about">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link
                  className="text-decoration-none link-fanzRed"
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
