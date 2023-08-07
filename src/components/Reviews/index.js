import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import img1 from "../../img/t1.png";
import img2 from "../../img/t3.png";
import "./style.css";

const Reviews = () => {
  const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
  };
  return (
    <>
      <section className="testimonial-section section_b_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title ">
                <h2>
                  Some <span>reviews</span> from <br /> our clients
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="testimonial-pos">
                <h3>feedback</h3>
              </div>
            </Col>
            <Col lg={12}>
              <Slider {...settings} className="testimonial-slider">
                <div className="slide">
                  <div className="testimonial-item">
                    <div className="client-image">
                      <img src={img1} alt="testimonial" />
                    </div>
                    <div className="testimonial-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla mauris dolor, gravida a varius blandit Lorem sit
                        dix dolor sit. consectetur adipiscing. Nulla mauris
                        dolor, gravida a varius blandit, Lorem ipsum dolor sit
                        Lorem ipsum dolor sit. consectetur adipiscing elit.{" "}
                      </p>
                    </div>
                    <div className="testimonial-meta">
                      <h3>Lina doris</h3>
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testimonial-item">
                    <div className="client-image">
                      <img src={img2} alt="testimonial" />
                    </div>
                    <div className="testimonial-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla mauris dolor, gravida a varius blandit Lorem sit
                        dix dolor sit. consectetur adipiscing. Nulla mauris
                        dolor, gravida a varius blandit, Lorem ipsum dolor sit
                        Lorem ipsum dolor sit. consectetur adipiscing elit.{" "}
                      </p>
                    </div>
                    <div className="testimonial-meta">
                      <h3>Lina doris</h3>
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Reviews;
