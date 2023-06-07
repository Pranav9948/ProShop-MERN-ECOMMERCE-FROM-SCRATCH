import React from "react";
import products from "../Products";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../components/Product";
import Header from "../components/Header";

const HomeScreen = () => {
  return (

   
    <div>



      <h1 className="text-center mt-5 mb-5">welcome to proshop</h1>

      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      
    </div>
  );
};

export default HomeScreen;
