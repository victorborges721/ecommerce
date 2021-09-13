import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <main>
      <Container>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Row>
              <Col xs={12} md={4}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xs={12} md={5}>
                <h3>{product.name}</h3>
                <p>
                  Platforms:
                  {/* {product.platforms.map((platform, index) => (
                    <span key={index}>{platform}</span>
                  ))} */}
                </p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </Col>
              <Col xs={12} md={3}>
                <p>Price: ${product.price}</p>
                <p>
                  Qty
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </p>
                <Button onClick={addToCartHandler}>Add to Cart</Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </main>
  );
};

export default ProductScreen;
