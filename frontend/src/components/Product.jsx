import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="m-5">
        <Card.Img variant="top" src={product.image} style={{height:'260px'}} />
        <Card.Body className="text-center">
          <Card.Title>{product.name.substring(0,20)}</Card.Title>
          <Card.Text>
           {product.category}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
