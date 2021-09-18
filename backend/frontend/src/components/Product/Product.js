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
    <Card style={{ width: "18rem" }} className="grow">
      <Card.Img src={imageUrl} alt={name} style={{ height: "160.88px" }} />
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-price">${price}</Card.Text>
        <Link to={`/product/${productId}`}>
          <Button>View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
