import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const ConfirmationScreen = () => {
  return (
    <main>
      <Container className="confirmation-container">
        <div className="confirmation">
          <h1 className="mb-3">Thank you!</h1>
          <p className="mb-3">Your order has been placed successfully. </p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default ConfirmationScreen;
