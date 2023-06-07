import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {

  console.log('product',product);
  return (
    <div>
      <Card className="m-5">
       <Link to={`/product/${product.id}`}> <Card.Img variant="top" src={product.image} style={{height:'260px'}} /></Link>
        <Card.Body className="text-center">
        <Link to={`/product/${product.id}`}><Card.Title>{product.name.substring(0,20)}</Card.Title></Link>
        <Card.Text>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
          </Card.Text>
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
