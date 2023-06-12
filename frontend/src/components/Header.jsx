import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';
import { NavDropdown } from "react-bootstrap";
import { removeCredentials } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";



const Header = () => {


  const {cartItems}=useSelector((state)=>state.cart)
  const {userInfo}=useSelector((state)=>state.login)

  const dispatch=useDispatch()
  const navigate=useNavigate()

   const cartCount= cartItems.reduce((acc,curr)=>acc +Number(curr.qty),0)

  console.log('count',cartCount);


  const logoutHandler=()=>{

    try{
    dispatch(removeCredentials())
    navigate('/login')
    }

    catch(err){
      console.log('error',err)
    }
     
  }


  


  return (
    <div>
      <Navbar bg="dark" expand="md" className="p-4 navbarz">
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
             
{
  userInfo ?  <NavDropdown className="text-white" title={userInfo.name}  id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>logoutHandler()} href="#action/3.1" style={{color:'white'}}>Logout</NavDropdown.Item>
              
            </NavDropdown>

            :

            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">register</NavDropdown.Item>
              
            </NavDropdown>
}
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
