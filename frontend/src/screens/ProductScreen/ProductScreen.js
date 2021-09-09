import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./style.css";

const ProductScreen = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img
              src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil5~1.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={5}>
            <h3>Resident Evil 5</h3>
            <p>Platforms: PS3, Xbox One, PC</p>
            <p>Price: $19.99</p>
            <p>
              One of the most popular Resident Evil titles comes to PlayStation
              4 in full 1080p HD with an increased frame rate. Featuring
              single-player and co-op modes and a dramatic storyline, this
              fully-loaded release includes all previously released DLC (Lost in
              Nightmares and Desperate Escape story expansions, Versus mode,
              extra figures and 4 costumes), and the previously PC-exclusive No
              Mercy mode, as well as the new mode 'The Mercenaries United' which
              combines the two fan-favorite modes, The Mercenaries and The
              Mercenaries Reunion for an even more intense experience.
            </p>
          </Col>
          <Col xs={12} md={3}>
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
            <Button>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductScreen;
