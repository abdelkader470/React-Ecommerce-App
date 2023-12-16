import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/login"
                className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
              >
                <img src={login} className="login-img" alt="login" />
                <p style={{ color: "white" }}>دخول</p>
              </Link>
            </Nav.Link>
            <Nav.Link style={{ color: "white" }}>
              <Link
                to="/cart"
                className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
              >
                <img src={cart} className="login-img" alt="cart" />
                <p style={{ color: "white" }}>العربه</p>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
