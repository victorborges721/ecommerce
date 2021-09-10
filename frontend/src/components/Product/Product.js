import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Product = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil5~1.jpg"
        alt=""
      />
      <Card.Body>
        <Card.Title>Resident Evil 5</Card.Title>
        <Card.Text>$22.45</Card.Text>
        <Link to={`/product/${1111}`}>
          <Button>View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
