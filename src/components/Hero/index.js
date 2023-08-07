import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import shape1 from "../../img/hero-pattarn-1.png";
import shape2 from "../../img/hero-pattarn-2.png";
import shape3 from "../../img/hero-pattarn-3.png";
import shape4 from "../../img/hero-pattarn-4.png";
import shape5 from "../../img/her-pattarn-5.png";
import shape6 from "../../img/hero_shape.png";
import shape7 from "../../img/hero-dot-shape.png";
import img1 from "../../img/hero-right.jpg";

import "./style.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-shape1">
          <img src={shape1} alt="shape" />
        </div>
        <div className="hero-shape2">
          <img src={shape2} alt="shape" />
        </div>
        <div className="hero-shape3">
          <img src={shape3} alt="shape" />
        </div>
        <div className="hero-shape4">
          <img src={shape4} alt="shape" />
        </div>
        <div className="hero-shape5">
          <img src={shape5} alt="shape" />
        </div>
        <div className="hero-bg">
          <img src={shape6} alt="hero shape" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-left" data-aos="fade-right">
                <h2>
                  <span className="underline">Transforming</span>
                  <span>
                    businesses with <br /> Artificial Intelligence
                  </span>
                </h2>
                <Link to="/login" className="theme-btn">
                  Get Started{" "}
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="hero-right" data-aos="fade-left">
                <img src={img1} alt="hero" />
                <div className="hero-dot-shape">
                  <img src={shape7} alt="shape" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
