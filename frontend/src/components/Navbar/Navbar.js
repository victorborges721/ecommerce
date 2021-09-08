import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
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
              }}
            >
              <Nav.Link>
                <AiOutlineShoppingCart />
                &nbsp;Cart&nbsp;
                <Badge pill bg="secondary">
                  0
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
