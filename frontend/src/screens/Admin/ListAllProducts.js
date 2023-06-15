import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { Link } from "react-router-dom";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useAddProductMutation, useDeleteProductMutation } from "../../redux/slices/adminSlice";
import { toast } from "react-toastify";

const ListAllProducts = () => {

  const { data: products, isLoading, isError,refetch } = useGetProductsQuery();
  const [addProduct, { isLoading: addProLoad, isError: addproErr }] =useAddProductMutation();
  const [deleteProduct,{isLoading:deletePro,isError:deleteErr}]=useDeleteProductMutation()


const addProductHandler=async()=>{

    if(window.confirm('are you sure to add new product')){

           try{

                await addProduct();
                refetch();
           }

           catch(err){

            console.log(err)

            toast.error(err.data.message|| err.error)
           }

    }
}




const deleteProductHandler=async(ids)=>{

  

    if(window.confirm('are you sure to delete product')){

           try{
                
                await deleteProduct(ids);
                toast.success('product Deleted succesfully')
                refetch();
           }

           catch(err){

            console.log(err)

            toast.error(err.data.message|| err.error)
           }

    }
}





  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <div>
          <Container>
            <Row>
              <Col md={9}></Col>

              <Col md={3}>
              <Button onClick={addProductHandler} className="bg-success text-white mb-5">
              Add New Product
            </Button>
              </Col>
            </Row>

          

            <Row>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>image</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((pro, idx) => (
                    <tr className="p-5" key={pro.price}>
                      <td>{idx + 1}</td>
                      <td>
                        <img
                          src={pro.image}
                          alt="image"
                          style={{ height: "40px" }}
                        />
                      </td>
                      <td>{pro.name}</td>
                      <td>{pro.category}</td>
                      <td>{pro.price}</td>

                      <td className="mt-3">
                       <Link to={`/admin/editproduct/${pro._id}`}> <Button variant="success">
                          <FaRegEdit style={{ color: "white" }} />
                        </Button> </Link>
                      </td>

                      <td className="mt-3">
                        <Button variant="danger" onClick={()=>deleteProductHandler(pro._id)}>
                          <FaRegTrashAlt style={{ color: "white" }} />
                        </Button>
                      </td>

                      <td className="p-3">
                        {" "}
                        <Link to={`/product/${pro._id}`}>
                          <Button>view Details</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default ListAllProducts;
