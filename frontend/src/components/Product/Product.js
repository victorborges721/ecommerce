import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Product = ({
  imageUrl,
  name,
  price,
  description,
  platforms,
  productId,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/product/${productId}`}>
          <Button>View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
