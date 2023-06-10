import React, { useState } from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'react-bootstrap/Image';
import { FaTrash } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import Message from '../components/Message';

const CartScreen = () => {

const dispatch=useDispatch()
const [qty,setQty]=useState(0)

const cart=useSelector((state)=>state.cart)

const addTocartHandler=(product,qty)=>{
 
    dispatch(addToCart({...product,qty}))
    
}


const deleteCartItemHandler=(id)=>{

    dispatch(removeFromCart(id))
}



const {cartItems}=cart


const cartCount= cartItems.reduce((acc,curr)=>acc +Number(curr.qty),0)
const cartTotalPrice=cartItems.reduce((acc,curr)=>acc+Number(curr.price)*Number(curr.qty),0)

console.log('count',cartCount);


  return (
    <div>
    <Container>


    {

        cartItems.length===0 ? <Message variant={'danger'}>No items in cart </Message> :
   




      <Row >

      <h2>Shopping Cart</h2>

      {
        cartItems.map((items)=>(

      
         <Col lg={7} md={7} xs={12} className='m-4' style={{marginTop:'150px'}}>

         

           <Row className='text-center'>

             <Col md={2}>
    
             <Image src={items.image} rounded  className='border-none' style={{height:'70px',width:'100px'}}/>
             </Col>

             <Col md={4}>

               <h6>{items.name}</h6>
    
             </Col>

             <Col md={2}>
    
             <h5>₹{items.price}</h5>
             </Col>

             <Col md={1}>

             
                          <Form.Control
                            as="select"
                            value={items.qty}
                            onChange={(e) => addTocartHandler(items,Number(e.target.value))}
                            
                          >
                            {[...Array(items.countInStock).keys()].map(
                              (x) => (
                                <option value={x}>{x}</option>
                              )
                            )}
                          </Form.Control>

                        </Col>
    
             

             <Col md={2}>

              <Button variant='danger' onClick={()=>deleteCartItemHandler(items._id)}><FaTrash/></Button>
    
             </Col>


           </Row>

         </Col>

               
        ))
      }

           
           <Col lg={4} md={4} xs={12}>

             
           <Card style={{ width: '18rem' }} className='text-center'>
           <ListGroup className='border-warning'>
      <Card.Body>
      <ListGroup.Item className='p-2'> <Card.Title>SubTotal ({cartCount}) Items</Card.Title></ListGroup.Item>
       
      <ListGroup.Item className='p-2 text-white'> <Card.Subtitle className="mb-2 text-white">₹{cartTotalPrice}</Card.Subtitle></ListGroup.Item>
        
      <ListGroup.Item className='p-2'> <Button variant='warning'>Proceed to checkout</Button></ListGroup.Item>


        
    
       
      </Card.Body>
      </ListGroup>
    </Card>

           </Col>



      </Row>

    }

    </Container>
    
    </div>
  )
}

export default CartScreen
