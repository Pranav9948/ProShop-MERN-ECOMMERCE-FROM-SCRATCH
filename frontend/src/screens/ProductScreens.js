import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import { Link, useParams } from "react-router-dom";
import products from "../Products";
import Rating from "../components/Rating";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

const ProductScreens = () => {
  const { id } = useParams();

  console.log('234',id);

  const [productDetails, setproductDetails] = useState({});

  useEffect(() => {
    getProductDetails();
  }, [id]);

  const getProductDetails = () => {
    console.log("e", id);

    const productDetail = products.find((p) => (p.id = id));

    console.log("2334", productDetail);

    setproductDetails(productDetail);
  };

  return (
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

          <Col lg={3} md={3} sm={12} className="text-center" >
            <ListGroup className="ps-4 productDetailsPrice" >
              <ListGroup.Item>Price : <span className="ps-3">₹ {productDetails.price} </span></ListGroup.Item>
              <ListGroup.Item>status: <span className="ps-3">{productDetails.countInStock} </span></ListGroup.Item>
              
                {
                     productDetails.countInStock===0 ? <ListGroup.Item><Button className="bg-success"  disabled >Add to Cart </Button></ListGroup.Item> :
                     <ListGroup.Item><Button className="bg-success" >Add to Cart </Button></ListGroup.Item> 
                }
                
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductScreens;
