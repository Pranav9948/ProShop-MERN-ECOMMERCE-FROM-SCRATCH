import React  from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../components/Product";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";

const HomeScreen = () => {

  const {pageNumber}=useParams()

   const {data:products,isLoading,isError}=useGetProductsQuery({pageNumber});

 

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
        {products.products?.map((product,idx) => (
          <Col sm={12} md={6} lg={4} key={idx+2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>


   
    <Row>

    <Col md={9} xs={8}>

    </Col>


    <Col md={3} xs={4}>

    <Paginate pages={products.pages} page={products.page} />

      
    </Col>

    </Row>
 
    

  




         
    </div>
  )
}

</>
    )

}



  
export default HomeScreen;
