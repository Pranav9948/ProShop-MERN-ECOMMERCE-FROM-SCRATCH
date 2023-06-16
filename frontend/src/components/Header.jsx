import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../pics/wristWorksRemove.png";
import { useDispatch, useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { Button, Form, NavDropdown } from "react-bootstrap";
import { removeCredentials } from "../redux/slices/loginSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logos from '../pics/output-onlinegiftools.gif'
import watch from '../pics/watttch24.png'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || "");

  const cartCount = cartItems.reduce((acc, curr) => acc + Number(curr.qty), 0);

  console.log("count", cartCount);

  const logoutHandler = () => {
    try {
      dispatch(removeCredentials());
      navigate("/login");
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleFormsSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar bg="dark" expand="md" className="p-4 navbarz">
        <Container>
          <Navbar.Brand className="fs-2" style={{ color: "white" }}>
            <LinkContainer to="/">
              <div className="logo">
                <img src={watch} alt="logo" style={{height:'60px',color:'white'}} />
                <span className="wristsLogo ms-2">WristWorks</span>
                
              </div>
            </LinkContainer>
          </Navbar.Brand>

          {userInfo !== null && 

          <div className="searchBox">
            <Form
              className="d-flex align-items-center searchBox"
              onSubmit={handleFormsSubmit}
            >
              <Form.Group className="mb-3 me-2  mt-3">
                <Form.Control
                  type="name"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="outline-danger"
                className="searchBTN"
              >
                Search
              </Button>
            </Form>
          </div>

          }

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo !== null && !userInfo?.isAdmin ? (
                <LinkContainer to="/cart">
                  <Nav.Link
                    style={{ color: "white" }}
                    className="ms-3 me-5 fw-bold fs-5 text-white"
                  >
                    {cartItems.length > 0 ? (
                      <Badge bg="danger" className="me-1">
                        {cartCount}
                      </Badge>
                    ) : (
                      ""
                    )}
                    Cart
                  </Nav.Link>
                </LinkContainer>
              ) : null}
              {userInfo !== null && userInfo?.isAdmin ? (
                <>
                <Nav.Link className="fw-bold pt-3 fs-5 text-warning">
                    {userInfo?.name}
                  </Nav.Link>

                  <NavDropdown
                    className="text-white mt-3"
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/admin/listallproducts">
                      <NavDropdown.Item style={{ color: "white" }}>
                        Products
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/showallusers">
                      <NavDropdown.Item style={{ color: "white" }}>
                        Users
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/ordersList">
                      <NavDropdown.Item style={{ color: "white" }}>
                        Orders
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => logoutHandler()}
                      style={{ color: "white" }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : null}

              {userInfo !== null && !userInfo?.isAdmin ? (
                <>
                  <Nav.Link className="fw-bold fs-5 text-warning">
                    {userInfo?.name}
                  </Nav.Link>

                  <NavDropdown className="text-white" id="basic-nav-dropdown">
                    <LinkContainer to="/view-myorders">
                      <NavDropdown.Item style={{ color: "white" }}>
                        View Orders
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => logoutHandler()}
                      style={{ color: "white" }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : null}

              {userInfo === null ? (
                <NavDropdown
                  className="text-white"
                  title={"Login"}
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/register">
                    <NavDropdown.Item style={{ color: "white" }}>
                      Register
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavDropdown.Item style={{ color: "white" }}>
                      Login
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
