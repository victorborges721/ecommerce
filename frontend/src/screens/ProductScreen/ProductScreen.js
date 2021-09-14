import React, { useState, useEffect } from "react";
import {
  Image,
  ListGroup,
  Button,
  Row,
  Col,
  Container,
  Badge,
} from "react-bootstrap";
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
              <Col xs={12} md={4} className="productscreen-imagecontainer">
                <Image
                  src={product.imageUrlCase}
                  alt={product.name}
                  className="productscreen-image"
                />
              </Col>
              <Col xs={12} md={5} className="productscreen-text">
                <h3>{product.name}</h3>
                <p>
                  <strong>Platforms: </strong>
                  {product.platforms &&
                    product.platforms.map((platform, index) => (
                      <Badge
                        key={index}
                        pill
                        className="productscreen-platform"
                      >
                        {platform}
                      </Badge>
                    ))}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
              </Col>
              <Col xs={12} md={3} className="productscreen-cartoptions">
                <ListGroup>
                  <ListGroup.Item>
                    <p>
                      <strong>Price:</strong> ${product.price}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p>
                      <strong>Qty:</strong>{" "}
                      <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button onClick={addToCartHandler}>Add to Cart</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </main>
  );
};

export default ProductScreen;
