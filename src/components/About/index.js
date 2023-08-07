import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import img1 from "../../img/about-shape.png";
import img2 from "../../img/about.png";
import img3 from "../../img/about.jpg";

import "./style.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-top-shape">
          <img src={img1} alt="about shape" />
        </div>
        <div className="about-bottom-shape">
          <img src={img1} alt="about shape" />
        </div>
        <div className="about-top section_100">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="about-left" data-aos="fade-right">
                  <h3>
                    We Create <br /> The Most Realistic <br /> Artificial
                    Intelligence
                  </h3>
                  <p>
                    consectetur adipisicing elit. Labore eius molestiae facere,
                    natus reprehenderit eaque eum, autem ipsam. Magni, error.
                    Tempora odit laborum iure inventore possimus laboriosam qui
                    nam.!
                  </p>
                  {/* <Link to="/about" className="theme-btn mt-4">
                    Read More
                    <span>
                      <FaChevronRight />
                    </span>
                  </Link> */}
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className="about-right" data-aos="fade-left">
                  <img src={img2} alt="about" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-bottom section_b_100">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="about-right  " data-aos="fade-right">
                  <img src={img3} alt="about" />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className="about-left" data-aos="fade-left">
                  <h3>
                    Use Machine Learning <br />
                    To Drive Intelligent <br />
                    Optimisation
                  </h3>
                  <p>
                    consectetur adipisicing elit. Labore eius molestiae facere,
                    natus reprehenderit eaque eum, autem ipsam. Magni, error.
                    Tempora odit laborum iure inventore possimus laboriosam qui
                    nam.
                  </p>
                  {/* <Link to="/about" className="theme-btn mt-4">
                    Read More
                    <span>
                      <FaChevronRight />
                    </span>
                  </Link> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
