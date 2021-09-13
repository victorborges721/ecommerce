import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./style.css";

const NavigationBar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#1b1b3a" }}>
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer
              to="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <Nav.Link>
                <AiOutlineShoppingCart />
                &nbsp;Cart&nbsp;
                <Badge pill bg="secondary">
                  {getCartCount()}
                </Badge>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
