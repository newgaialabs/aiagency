import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "../../flaticon/flaticon.css";
import img1 from "../../img/about-post-1.jpeg";
import img2 from "../../img/about-post-2.jpeg";
import img3 from "../../img/about-post-3.jpeg";
import shape1 from "../../img/about-shape.png";
import "./style.css";

const AboutPages = () => {
  return (
    <>
      <section className="about-page-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title ">
                <h2>
                  World’s <span>Leading</span> Machine
                  <br />
                  Learning Company
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="about-page-left ">
                <h2 className="mr-5">
                  <span className="mark-text">40</span>Years’ Experience in IT
                </h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-page-text ">
                <p>
                  Etiam nec odio vestibulum est mattis effic iturut magna. Pelle
                  ntesque sit am et tellus blandit. Etiam nec odio vestibul.
                  Etiam nec odio vestibulum est mattis effic iturutEtiam nec
                  odio vestibulum est mattis effic iturut magna. Pelle ntesque
                  sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                  odio vestibulum est mattis effic.Etiam nec odio vestibulum est
                  mattis effic iturutEtiam nec
                </p>
                <Link to="/contact" className="btn-simple mt-4">
                  Explore More <FaChevronRight />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-post-section section_b_70">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="single-about-post ">
                <div className="about-post-image">
                  <img src={img1} alt="img" />
                </div>
                <div className="about-post-text">
                  <h3>If you're having trouble coming up with</h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="single-about-post  ">
                <div className="about-post-image">
                  <img src={img2} alt="img" />
                </div>
                <div className="about-post-text">
                  <h3>what are those Steps to be a Successful developer</h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="single-about-post  ">
                <div className="about-post-image">
                  <img src={img3} alt="img" />
                </div>
                <div className="about-post-text">
                  <h3>details about Apple’s new iPad Pro models</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="timeline-area section_100">
        <div className="about-top-shape">
          <img src={shape1} alt="about shape" />
        </div>
        <div className="about-bottom-shape">
          <img src={shape1} alt="about shape" />
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="ui-timline-container">
                <div className="ui-timeline">
                  <div className="tl-item">
                    <div className="tl-body">
                      <div className="tl-entry">
                        <div className="tl-caption">
                          <p>
                            Our <br /> Journey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tl-item  ">
                    <div className="tl-body">
                      <div className="tl-entry">
                        <div className="tl-time">2020</div>
                        <div className="tl-icon" />
                        <div className="tl-content">
                          <h3 className="tl-tile">Startup Consultation</h3>
                          <h4 className="tl-date">March 26</h4>
                          <p>
                            Interdum iusto pulvinar elit.accusantium debitis
                            voluptatem dolore excepturi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tl-item alt  ">
                    <div className="tl-body">
                      <div className="tl-entry">
                        <div className="tl-time">2019</div>
                        <div className="tl-icon" />
                        <div className="tl-content">
                          <h3 className="tl-tile">Audit &amp; assurance</h3>
                          <h4 className="tl-date">February 19</h4>
                          <p>
                            Interdum iusto pulvinar elit.accusantium debitis
                            voluptatem dolore excepturi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tl-item  ">
                    <div className="tl-body">
                      <div className="tl-entry">
                        <div className="tl-time">2018</div>
                        <div className="tl-icon" />
                        <div className="tl-content">
                          <h3 className="tl-tile">Expert Team Mates</h3>
                          <h4 className="tl-date">April 04</h4>
                          <p>
                            Interdum iusto pulvinar elit.accusantium debitis
                            voluptatem dolore excepturi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPages;
