import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./style.css";

const CartItem = () => {
  return (
    <Card className="cartitem">
      <Row>
        <Col xs={12} md={5} className="cartitem-left">
          <img
            src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil5~1.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Col>
        <Col xs={12} md={7} className="cartitem-right">
          <Link to={`/product/${1111}`}>
            <h5>Resident Evil 5</h5>
          </Link>
          <p>Price: $19.99</p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <Button variant="danger" style={{ display: "flex" }}>
            <BsTrash />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
