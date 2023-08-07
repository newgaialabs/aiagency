import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaChevronRight,
  FaDownload,
  FaFilePdf,
  FaFileWord,
  FaPhoneAlt,
} from "react-icons/fa";
import img1 from "../../img/about.jpg";
import img2 from "../../img/strategy.png";
import img3 from "../../img/track-record.png";
import img4 from "../../img/research.png";
import img5 from "../../img/analysis.png";
import "./style.css";

const ServiceDetails = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="service-details section_100">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="single-service-left">
                <div className="single-service-left-widget">
                  <ul>
                    <li>
                      <Link to="/single-service">
                        Robotics &amp; Drones
                        <FaChevronRight />
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/single-service">
                        Image Processing
                        <FaChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="/single-service">
                        Data Visualization
                        <FaChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="/single-service">
                        Virtually Reality
                        <FaChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="/single-service">
                        Face Recognition
                        <FaChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="/single-service">
                        Video Analytics
                        <FaChevronRight />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-service-left-widget">
                  <div className="widget-title">
                    <h3>Service Brochures</h3>
                  </div>
                  <div className="broucher-item">
                    <Link to="/" onClick={onClick} className="theme-btn">
                      Download.Pdf{" "}
                      <span>
                        <FaDownload />
                      </span>
                    </Link>
                    <FaFilePdf />
                  </div>
                  <div className="broucher-item">
                    <Link to="/" onClick={onClick} className="theme-btn">
                      Download.Doc{" "}
                      <span>
                        <FaDownload />
                      </span>
                    </Link>
                    <FaFileWord />
                  </div>
                </div>
                <div className="single-service-left-widget">
                  <div className="page-banner">
                    <h3>How can we help you ?</h3>
                    <p>
                      Fusce vulputate eleifend uam sapien. Vestibulum purus
                      quam, risque
                    </p>
                    <h4>
                      <FaPhoneAlt />
                      +917 8124 – 3527
                    </h4>
                    <Link to="/contact" className="theme-btn-white">
                      Contact Us{" "}
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="service-details-inn">
                <img src={img1} alt="service" />
                <div className="service-details-text">
                  <h3>Image Processing</h3>
                  <p>
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat.{" "}
                  </p>
                  <p>
                    Nemore tincidunt ea mel, eos cu alii insolens signiferumque.
                    Te nec dolor clita partem, mea ne iuvaret aliquid. Id nam
                    illum augue commodo, diam dolores philosophia nec. ad his
                    putent latine. Et iudicabit theophrastus signiferumque vis.
                    Ne stet adolescens efficiendi te pri. Et nec natum
                    inciderint, eos ex gubergren
                  </p>
                </div>
                <div className="service-details-text">
                  <h4>How it works?</h4>
                  <p>
                    voluptatum deleniti atque corrupti is es et quas stias
                    cepturi sint aete non provident, similique sunt dunt ut
                    labore et dolore magnam aliquam quaerat Neque porro quisquam
                    est, qui dolorem ipsum
                  </p>
                  <div className="service-works">
                    <Row>
                      <Col md={6}>
                        <div className="service-works-item">
                          <div className="service-works-icon">
                            <img src={img2} alt="How we work" />
                          </div>
                          <div className="service-works-info">
                            <h5>Case Strategy</h5>
                            <p>
                              voluptatum deleniti atqued corrupti cepturi sinte
                              aeted psamtem quia voluptas sit aut odit aut
                              fugit.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="service-works-item">
                          <div className="service-works-icon">
                            <img src={img3} alt="How we work" />
                          </div>
                          <div className="service-works-info">
                            <h5>Track Record</h5>
                            <p>
                              voluptatum deleniti atqued corrupti cepturi sinte
                              aeted psamtem quia voluptas sit aut odit aut
                              fugit.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="service-works-item">
                          <div className="service-works-icon">
                            <img src={img4} alt="How we work" />
                          </div>
                          <div className="service-works-info">
                            <h5>Research &amp; Investigation</h5>
                            <p>
                              voluptatum deleniti atqued corrupti cepturi sinte
                              aeted psamtem quia voluptas sit aut odit aut
                              fugit.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="service-works-item">
                          <div className="service-works-icon">
                            <img src={img5} alt="How we work" />
                          </div>
                          <div className="service-works-info">
                            <h5>Case Analysis</h5>
                            <p>
                              voluptatum deleniti atqued corrupti cepturi sinte
                              aeted psamtem quia voluptas sit aut odit aut
                              fugit.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
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

export default ServiceDetails;
