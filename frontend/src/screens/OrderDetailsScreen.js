import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../redux/slices/orderApiSlice";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Message from "../components/Message";

function OrderDetailsScreen() {
  const { id } = useParams();

  const { userInfo } = useSelector((state) => state.login);

  const {
    data: order,
    refetch,
    isLoading,
    isError,
  } = useGetOrderDetailsQuery(id);

  console.log("34", order);

  return (
    <div>
      <Container>
        <Row>
          <Col md={7} xs={12} className="ms-2 orderDBox">
            <div className="shipping border-bottom pb-5">
              <h3 className="mb-4 fs-2 fw-bold">Shipping</h3>

              <h5 className="mb-3">
                Name : <span className="ms-2">{userInfo?.name}</span>
              </h5>

              <h5 className="mb-3">
                Email : <span className="ms-2">{userInfo?.email} ></span>
              </h5>
              <h5 className="mb-4">
                Address :
                <span className="ms-2">
                  {`${order?.shippingAddress?.address} ${order?.shippingAddress?.city}
           ${order?.shippingAddress?.postalCode}  ${order?.shippingAddress?.country}`}{" "}
                </span>
              </h5>

              <div className="alertBox mt-4">
                {order?.isDelivered ? (
                  <Message variant={"info"}>
                    Order Delivered Successfully{" "}
                  </Message>
                ) : (
                  <Message variant={"danger"}>Order not Delivered </Message>
                )}
              </div>
            </div>

            <div className="payment border-bottom pb-5 pt-4">
              <h3 className="mb-4 fs-2 fw-bold">Payment Method</h3>

              <h5 className="mb-3">
                Method: <span className="ms-2">{order?.paymentMethod}</span>
              </h5>

              <div className="alertBox mt-4">
                {order?.isPaid ? (
                  <Message variant={"info"} className="alertbox">
                    payment done succesfully
                  </Message>
                ) : (
                  <Message variant={"danger"}>Payment not done </Message>
                )}
              </div>
            </div>

            <div className="payment border-bottom pb-5 pt-4">
              <h3 className="mb-4 fs-2 fw-bold mb-4 mt-3">Order Items</h3>

              {order?.orderItems.map((orders) => (
                <div className="orderbox p-4 text-center border">
                  <Row className="my-auto">
                    <Col md={2} xs={2}>
                      <img
                        src={orders.image}
                        alt=""
                        style={{ height: "50px" }}
                      />
                    </Col>

                    <Col md={4} xs={5} className="">
                      <p className="fw-bold">{orders.name}</p>
                    </Col>

                    <Col md={2} xs={1}></Col>

                    <Col md={3} xs={4} className="fw-bold">
                      {orders.qty} x {orders.price} ={" "}
                      <span className="text-warning fw-bold">
                        {" "}
                        ₹ {Math.round(orders.qty * orders.price)}{" "}
                      </span>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>

          <Col md={1} className="">

          </Col>

          <Col md={3} xs={12} className="my-auto">
            <ListGroup as="ul" className="border">

              <ListGroup.Item as="li" active className="bg-warning text-white">
                Order Summary
              </ListGroup.Item>

              <ListGroup.Item as="li" className="border" >
                item price : ₹ {order.itemsPrice}
              </ListGroup.Item>


              <ListGroup.Item as="li" className="border" >
                Shipping price : ₹ {order.shippingPrice}
              </ListGroup.Item>

              
              <ListGroup.Item as="li" className="border" >
                Tax price : ₹ {order.taxPrice}
              </ListGroup.Item>

              <ListGroup.Item as="li" className="border" >
                Total price : ₹ {order.totalPrice}
              </ListGroup.Item>
              
              
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetailsScreen;
