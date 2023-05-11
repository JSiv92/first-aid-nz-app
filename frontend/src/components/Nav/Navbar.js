import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import logo from "../../assets/fanzLogo.png";

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
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/screening">
                  Health & Drug Screening
                </NavDropdown.Item>
                <NavDropdown.Item href="/medics">Event Medics</NavDropdown.Item>
                <NavDropdown.Item href="/courses">
                  First Aid Courses
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
