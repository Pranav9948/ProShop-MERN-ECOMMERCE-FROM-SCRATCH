import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/logo.png'
import { useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';



const Header = () => {


  const {cartItems}=useSelector((state)=>state.cart)

   const cartCount= cartItems.reduce((acc,curr)=>acc +Number(curr.qty),0)

  console.log('count',cartCount);

  


  return (
    <div>
      <Navbar bg="dark" expand="md" className="p-4">
        <Container>
          <Navbar.Brand href="#home" className="fs-2" style={{color:'white'}}>
            <img src={logo} alt="logo" />
             <span className="mt-4">Pro Shop</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{color:'white'}} className="ms-3">
              
               {
                 cartItems.length >0 ? 
        <Badge bg="danger" className="me-1">{cartCount}</Badge>:''
      
               }
              
              Cart</Nav.Link>
              <Nav.Link href="#link" style={{color:'white'}} className="ms-3">Sign In</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
