import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../img/companies-1.png";
import img2 from "../../img/companies-2.png";
import img3 from "../../img/companies-3.png";
import img4 from "../../img/companies-4.png";
import img5 from "../../img/companies-5.png";

import "./style.css";

const Companies = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <section className="companies-section section_b_70">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="companies-left">
                <h4>Trusted by over 2500+ companies worldwide</h4>
              </div>
            </Col>
            <Col lg={6}>
              <Slider {...settings} className="companies-slider">
                <div className="slide">
                  <div className="single-com-slider">
                    <Link to="/">
                      <img src={img1} alt="companies" />
                    </Link>
                  </div>
                </div>
                <div className="slide">
                  <div className="single-com-slider">
                    <Link to="/">
                      <img src={img2} alt="companies" />
                    </Link>
                  </div>
                </div>
                <div className="slide">
                  <div className="single-com-slider">
                    <Link to="/">
                      <img src={img3} alt="companies" />
                    </Link>
                  </div>
                </div>
                <div className="slide">
                  <div className="single-com-slider">
                    <Link to="/">
                      <img src={img4} alt="companies" />
                    </Link>
                  </div>
                </div>
                <div className="slide">
                  <div className="single-com-slider">
                    <Link to="/">
                      <img src={img5} alt="companies" />
                    </Link>
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

export default Companies;
