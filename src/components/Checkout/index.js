import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import paypal from "../../img/paypal.jpg";
import card from "../../img/master-card.jpg";
import "./style.css";

const Checkout = () => {
  return (
    <>
      <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="checkout-left-box  ">
                <h3>Billing Details</h3>
                <form>
                  <Row className="checkout-form">
                    <Col md={6}>
                      <label htmlFor="name23">First Name</label>
                      <input type="text" name="firstname" id="name23" />
                    </Col>
                    <Col md={6}>
                      <label htmlFor="name22">Last Name</label>
                      <input type="text" name="lastname" id="name22" />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <label htmlFor="cntr2">Country</label>
                      <input type="text" name="country" id="cntr2" />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <label htmlFor="addr2">Address</label>
                      <input type="text" name="address" id="addr2" />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <label htmlFor="Town2">Town / City *</label>
                      <input type="text" name="town" id="Town2" />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={6}>
                      <label htmlFor="info2">Email Address *</label>
                      <input type="email" name="info2" id="info2" />
                    </Col>
                    <Col md={6}>
                      <label htmlFor="info2">Mobile Number *</label>
                      <input type="text" name="info2" id="info12" />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <label htmlFor="info2">Order Note *</label>
                      <textarea name="ordernote" defaultValue={""} />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box ">
                <h3>Order Summury</h3>
                <div className="summury-inn">
                  <table>
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>$270</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$270</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="booking-right">
                <div className="booking-payment clearfix">
                  <div className="payment">
                    <input type="radio" id="ss-option" name="selector" />
                    <label htmlFor="ss-option">Direct Bank Transfer</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.order won’t be
                      shipped until the funds have cleared.
                    </p>
                  </div>
                  <div className="payment">
                    <input type="radio" id="f-option" name="selector" />
                    <label htmlFor="f-option">Cheque Payment</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                  </div>
                  <div className="payment">
                    <input type="radio" id="s-option" name="selector" />
                    <label htmlFor="s-option">Credit Card</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={card} alt="credit card" />
                  </div>
                  <div className="payment">
                    <input type="radio" id="t-option" name="selector" />
                    <label htmlFor="t-option">Paypal</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={paypal} alt="credit card" />
                  </div>
                </div>
                <div className="action-btn">
                  <Link to="/login" className="theme-btn">
                    place order{" "}
                    <span>
                      <FaChevronRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Checkout;
