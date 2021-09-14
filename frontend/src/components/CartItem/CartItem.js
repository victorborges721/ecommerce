import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./style.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Card className="cartitem">
      <Row>
        <Col xs={12} md={6} className="cartitem-left">
          <img src={item.imageUrl} alt={item.name} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={6} className="cartitem-right">
          <Link
            to={`/product/${item.product}`}
            className="cartitem-productname"
          >
            <h5>{item.name}</h5>
          </Link>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <p>
            <strong>Qty:</strong>{" "}
            <select
              value={item.qty}
              onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <Button
            className="btn-trash"
            style={{ display: "flex" }}
            onClick={() => removeHandler(item.product)}
          >
            <BsTrash />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
