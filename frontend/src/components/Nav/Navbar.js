import React, { useState } from "react";
import logo from "../../assets/fanzLogo.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/CartContext";
import { useContext } from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

//stylesheets
import "./Navbar.css";

function NavbarComponent() {
  const { state } = useContext(Context);
  const { cart, totalPrice } = state;

  const { dispatch } = useContext(Context); //delete from cart dispatch

  const cartItems = Object.values(cart);
  const cartItemCount = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Navbar.Toggle id="burger" aria-controls="responsive-navbar-nav" />
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
              <NavDropdown
                menuVariant="dark"
                title="Learn"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none link-fanzRed"
                    to="/learn"
                  >
                    For Students
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
              <Button
                className="btn btn-sm"
                variant="outline-fanzRed"
                onClick={handleShow}
              >
                <i className="fa-solid fa-cart-shopping"></i> {cartItemCount}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-cart-shopping"></i>
            <strong> Your Cart Items</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Individual Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={`${item.id}-${item.name}`}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="">
                        <i
                          className="text-fanzRed fa-solid fa-square-minus fa-2xl"
                          onClick={() =>
                            dispatch({
                              type: "DECREASE_QUANTITY",
                              payload: item,
                            })
                          }
                        ></i>{" "}
                        <i
                          className="text-fanzGreen fa-solid fa-square-plus fa-2xl"
                          onClick={() =>
                            dispatch({
                              type: "INCREMENT_QUANTITY",
                              payload: item,
                            })
                          }
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="">Your cart is empty.</p>
          )}
          {cartItems.length > 0 && <p>Total: ${totalPrice.toFixed(2)} NZD</p>}
          <Button variant="fanzGreen">Checkout</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
