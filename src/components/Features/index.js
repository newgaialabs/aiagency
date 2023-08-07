import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaCheckSquare,
  FaCube,
  FaThumbsUp,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import shape from "../../img/choose-shape.png";

import "./style.css";

const Features = () => {
  return (
    <>
      <section className="choose-section section_100">
        <div className="choose-shape-bg">
          <img src={shape} alt="choose" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="choose-left  " data-aos="fade-right">
                <div className="section-title">
                  <h2>
                    Why <span>you should</span> <br />
                    choose us
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industrys stan dard
                  dummy text ever since the 1500s.
                </p>
                <ul>
                  <li>
                    <FaCheckSquare /> Managed Sucre Backups
                  </li>
                  <li>
                    <FaCheckSquare /> 14 days free trial
                  </li>
                  <li>
                    <FaCheckSquare /> 24/7 Expert Support
                  </li>
                  <li>
                    <FaCheckSquare /> Competitive Pricing
                  </li>
                  <li>
                    <FaCheckSquare /> Advanced Tchnology
                  </li>
                  <li>
                    <FaCheckSquare /> PHP ready serves
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="choose-right">
                <Row>
                  <Col lg={6} sm={12} md={6}>
                    <div className="choose-box " data-aos="fade-up">
                      <div className="choose-icon">
                        <FaUsers />
                      </div>
                      <h2>
                        <span className="counter">2500</span>+
                      </h2>
                      <p>Happy Customers</p>
                      <div className="choose-icon-bottom">
                        <FaUsers />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} sm={12} md={6}>
                    <div className="choose-box " data-aos="fade-up">
                      <div className="choose-icon">
                        <FaCube />
                      </div>
                      <h2>
                        <span className="counter">120</span>+
                      </h2>
                      <p>Awesome Team</p>
                      <div className="choose-icon-bottom">
                        <FaCube />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} sm={12} md={6}>
                    <div className="choose-box  " data-aos="fade-up">
                      <div className="choose-icon">
                        <FaThumbsUp />
                      </div>
                      <h2>
                        <span className="counter">135</span>+
                      </h2>
                      <p>Success Mission</p>
                      <div className="choose-icon-bottom">
                        <FaThumbsUp />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} sm={12} md={6}>
                    <div className="choose-box  " data-aos="fade-up">
                      <div className="choose-icon">
                        <FaTrophy />
                      </div>
                      <h2>
                        <span className="counter">1400</span>+
                      </h2>
                      <p>Awards Winning</p>
                      <div className="choose-icon-bottom">
                        <FaTrophy />
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

export default Features;
