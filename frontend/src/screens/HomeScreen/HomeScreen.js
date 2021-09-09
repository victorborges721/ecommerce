import React from "react";
import { CardColumns, Container } from "react-bootstrap";
import Product from "../../components/Product";
import "./style.css";

const HomeScreen = () => {
  return (
    <main>
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
    </main>
  );
};

export default HomeScreen;
