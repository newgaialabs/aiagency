import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./style.css";

const Pricing = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <section className="pricing-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title ">
                <h2>
                  We Have Pre-ready <span>Pricing</span>
                  <br /> for Our Services
                </h2>
              </div>
              <div className="check_toggle">
                <input id="checkbox" type="checkbox" className="checkbox" />
                <label
                  htmlFor="checkbox"
                  className="switch"
                  onClick={() => setVisible(!visible)}
                >
                  <span className="switch__circle">
                    <span className="switch__circle-inner" />
                  </span>
                  <span className="switch__left">Yearly</span>
                  <span className="switch__right">Monthly</span>
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div style={{ display: visible ? "none" : "block" }}>
                <Row>
                  <Col md={6} lg={4}>
                    <div className="single-price-box">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Basic</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>25{" "}
                          <span className="per-time">/yr.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li className="off-price">Unlimited Broadcasts</li>
                          <li className="off-price">24/7 Customer Support</li>
                          <li className="off-price">Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <div className="single-price-box active">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Professional</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>55{" "}
                          <span className="per-time">/yr.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li>Unlimited Broadcasts</li>
                          <li className="off-price">24/7 Customer Support</li>
                          <li className="off-price">Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <div className="single-price-box">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Business</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>75{" "}
                          <span className="per-time">/yr.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li>Unlimited Broadcasts</li>
                          <li>24/7 Customer Support</li>
                          <li>Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ display: visible ? "block" : "none" }}>
                <Row>
                  <Col md={6} lg={4}>
                    <div className="single-price-box">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Basic</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>35{" "}
                          <span className="per-time">/mo.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li className="off-price">Unlimited Broadcasts</li>
                          <li className="off-price">24/7 Customer Support</li>
                          <li className="off-price">Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <div className="single-price-box active">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Professional</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>75{" "}
                          <span className="per-time">/mo.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li>Unlimited Broadcasts</li>
                          <li className="off-price">24/7 Customer Support</li>
                          <li className="off-price">Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <div className="single-price-box">
                      <div className="pricing-head">
                        <div className="pricing-type">
                          <span>Business</span>
                        </div>
                        <div className="price">
                          <span className="dollar-sign">$</span>175{" "}
                          <span className="per-time">/mo.</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>Drag &amp; Drop Page Builder</li>
                          <li>Bot &amp; Digital Assistants</li>
                          <li>Up to 1000 Subscribers</li>
                          <li>Unlimited Broadcasts</li>
                          <li>24/7 Customer Support</li>
                          <li>Unlimited Staff</li>
                        </ul>
                        <Link to="/login" className="theme-btn mt-4">
                          Order Now
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                        <p className="hidden-charge mt-3">No hidden charges!</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
