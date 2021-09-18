import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const ShippingScreen = () => {
  return (
    <main>
      <Container className="form-container">
        <Form className="shipping-form">
          <h3 className="mb-3">Shipping Information</h3>
          <Form.Group className="mb-3" controlId="formRegion">
            <Form.Label>Country/Region</Form.Label>
            <Form.Select defaultValue="United States">
              <option>United States</option>
              <option>Canada</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full name (First and Last name)</Form.Label>
            <Form.Control type="text" placeholder="John Smith" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="(123) 456-7891" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street Address or P.O. Box"
              className="mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Box, Apt, Suite, Unit, Building, Floor, etc."
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="New York" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="NY" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formZip">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control type="text" placeholder="12345" />
              </Form.Group>
            </Col>
          </Row>

          <Link to="/payment">
            <Button>Continue to Payment</Button>
          </Link>
        </Form>
      </Container>
    </main>
  );
};

export default ShippingScreen;
