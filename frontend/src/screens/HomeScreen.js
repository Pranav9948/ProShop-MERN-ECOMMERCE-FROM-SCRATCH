import React  from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../components/Product";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {


   const {data:products,isLoading,isError}=useGetProductsQuery();


  return (

    <>
    

{

    isLoading ? (
           
           <Loader/>
    ) 
    
    : isError ? (

      <Message variant={'danger'}>{isError?.data.message || isError.error }</Message>
    ) : 
    (

      <div>
      <h1 className="text-center mt-5 mb-5">welcome to proshop</h1>

      <Row>
        {products?.map((product,idx) => (
          <Col sm={12} md={6} lg={4} key={idx+2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

</>
    )

}



  
export default HomeScreen;
