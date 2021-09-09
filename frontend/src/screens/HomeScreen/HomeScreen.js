import React from "react";
import { CardColumns, Container } from "react-bootstrap";
import Product from "../../components/Product";
import "./style.css";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CardColumns>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </CardColumns>
      </Container>
    </div>
  );
};

export default HomeScreen;
