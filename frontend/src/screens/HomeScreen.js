import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../components/Product";
import axios from 'axios'

const HomeScreen = () => {


  const [products,setProducts]=useState([])

useEffect(()=>{

  getAllProducts()

},[])


const getAllProducts=async()=>{

  try{

      const {data}=await axios.get('/api/products')
      setProducts(data)
      console.log('mh',products)
  }

  catch(err){

    console.log(err)
  }

}



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
