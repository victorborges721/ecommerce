import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import CartItem from "../../components/CartItem";
import "./style.css";

const CartScreen = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h2>Your Cart</h2>
            <CartItem />
          </Col>
          <Col xs={12} md={4}>
            <p>Subtotal (0) items</p>
            <p>$19.99</p>
            <Button>Proceed to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CartScreen;
