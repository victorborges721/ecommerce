import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

// Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <div>
                Your cart is empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                />
              ))
            )}
          </Col>
          <Col xs={12} md={4}>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubtotal().toFixed(2)}</p>
            <Button>Proceed to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CartScreen;
