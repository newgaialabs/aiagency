import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

import "../../flaticon/flaticon.css";
import "./style.css";

const ServicePage = () => {
  return (
    <>
      <section className="service-section service-page section_100">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="section-title  ">
                <h2>
                  Our Professional <span>Services</span>
                  <br /> For You
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6}>
              <div className="service-box">
                <div className="service-icon">
                  <i className="flaticon-chip" />
                </div>
                <div className="service-title">
                  <h3>Robotics &amp; Drones</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-chip" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-box  ">
                <div className="service-icon">
                  <i className="flaticon-picture" />
                </div>
                <div className="service-title">
                  <h3>Image Processing</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-picture" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-box  ">
                <div className="service-icon">
                  <i className="flaticon-box" />
                </div>
                <div className="service-title">
                  <h3>Data Visualization</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-box" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-box  ">
                <div className="service-icon">
                  <i className="flaticon-mobile" />
                </div>
                <div className="service-title">
                  <h3>Virtually Reality</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-mobile" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-box  ">
                <div className="service-icon">
                  <i className="flaticon-facial-recognition" />
                </div>
                <div className="service-title">
                  <h3>Face Recognition</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-facial-recognition" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-box  ">
                <div className="service-icon">
                  <i className="flaticon-video-player" />
                </div>
                <div className="service-title">
                  <h3>Video Analytics</h3>
                </div>
                <div className="service-desc">
                  <p>
                    Capitalize on low hanging fruit to identify a ball park
                    value added activity to beta test. Override the digital
                    divide with additional
                  </p>
                  {/* <Link className="btn-simple mt-3" to="/single-service">
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
                <div className="service-icon-bottom">
                  <i className="flaticon-video-player" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicePage;
