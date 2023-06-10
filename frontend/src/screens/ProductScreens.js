import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useGetProductDetailsQuery } from "../redux/slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Form from "react-bootstrap/Form";
import { useDispatch} from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";



const ProductScreens = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()


  const { id } = useParams();


  const [qty, setQty] = useState();


  const {
    data: productDetails,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(id);



const addToCartHandler=()=>{


  dispatch(addToCart({...productDetails,qty}))
  navigate('/cart')
   

}











  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant={"danger"}>
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <div>
          <Container>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <Link to="/">
                  <Button className="bg-dark mt-4 mb-5">Go Back</Button>
                </Link>

                <Image
                  src={productDetails.image}
                  thumbnail
                  className="pe-5"
                  style={{ border: "none" }}
                />
              </Col>

              <Col lg={4} md={4} sm={12} className="text-center">
                <h3 className="font-bold mt-5 fs-3 text-white pb-5 border-bottom">
                  {productDetails.name}
                </h3>

                <h3 className="pt-3 pb-3 fs-5  border-bottom">
                  <Rating
                    rating={productDetails.rating}
                    numReviews={productDetails.numReviews}
                  />
                </h3>

                <h3 className="pt-3 pb-3 fs-5  border-bottom text-white">
                  Price : ₹ {productDetails.price}
                </h3>

                <p className="pt-2 pb-3 fs-5">
                  <span className="fw-bold text-white"> Description :</span>{" "}
                  {productDetails.description}
                </p>
              </Col>

              <Col lg={3} md={3} sm={12} className="text-center">
                <ListGroup className="ps-4 productDetailsPrice">
                  <ListGroup.Item>
                    Price :{" "}
                    <span className="ps-3">₹ {productDetails.price} </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    status:{" "}
                    <span className="ps-3">
                      {productDetails.countInStock === 0
                        ? "out of stock"
                        : `In stock`}{" "}
                    </span>
                  </ListGroup.Item>

                  {productDetails.countInStock > 0 && (
                    <ListGroup.Item className="p-3">
                      <Row>
                        <Col>Qty :</Col>

                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(productDetails.countInStock).keys()].map(
                              (x) => (
                                <option value={x}>{x}</option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  {productDetails.countInStock === 0 ? (
                    <ListGroup.Item>
                      <Button className="bg-success" disabled>
                        Add to Cart{" "}
                      </Button>
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item className="p-3">
                      <Button className="bg-success" onClick={addToCartHandler}>Add to Cart </Button>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductScreens;
