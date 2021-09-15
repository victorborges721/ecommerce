import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { months, days } from "../../assets/vars";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

// Actions
import { resetCart } from "../../redux/actions/cartActions";

const PaymentScreen = () => {
  const dispatch = useDispatch();

  const handlePayment = () => {
    dispatch(resetCart());
  };

  return (
    <main>
      <Container className="form-container">
        <Form className="payment-form">
          <h3 className="mb-3">Payment Information</h3>

          <Form.Group className="mb-3" controlId="formCardNum">
            <Form.Label>Card number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9123 4567" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Name on card</Form.Label>
            <Form.Control type="text" placeholder="John Smith" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCardExp">
                <Form.Label>Expiration date</Form.Label>
                <Row>
                  <Col>
                    <Form.Select defaultValue="United States">
                      {months.map((month, index) => (
                        <option key={index}>{month}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select defaultValue="United States">
                      {days.map((day, index) => (
                        <option key={index}>{day}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formCardCode">
                <Form.Label>Security Code (CVV/CVC)</Form.Label>
                <Form.Control type="number" placeholder="000" />
              </Form.Group>
            </Col>
          </Row>

          <Link to="/confirmation">
            <Button onClick={() => handlePayment()}>Place Order</Button>
          </Link>
        </Form>
      </Container>
    </main>
  );
};

export default PaymentScreen;
