import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../img/logo.png";
import "../../flaticon/flaticon.css";
import "./style.css";
import {
  FaFacebookF,
  FaGooglePlus,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Cta = () => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="footer-section">
        {/* Footer Top Start */}
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={4} md={6}>
                <div className="single-footer ">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <p>
                    Utenim ad minim veniam quis nostrud exercitation ullamco
                    lorem ipsum dolor sit ametullamco{" "}
                  </p>
                  <ul className="footer-social">
                    <li>
                      <Link to="/" onClick={onClick} className="tw">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick} className="fb">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick} className="gp">
                        <FaGooglePlus />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick} className="pin">
                        <FaPinterestP />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick} className="ln">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} md={6}>
                <Row>
                  <Col lg={6} md={6}>
                    <div className="single-footer  ">
                      <h3>Services</h3>
                      <ul>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Big Data{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Desktop Application{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Product Engineering{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Machine Learning{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Machine Learning{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="single-footer  ">
                      <h3>Community</h3>
                      <ul>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Our Product
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Documentation
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            Company
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={onClick}>
                            What We Do?
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={6}>
                <div className="single-footer ">
                  <h3>Contact Us</h3>
                  <ul className="footer-contact-info">
                    <li>3407 Wilkinson Court, Denver Colorado 33901</li>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:hello@example.com">hello@example.com</a>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+44587154756">+44 587 154756</a>
                    </li>
                    <li>
                      <span>Fax:</span>
                      <a href="tel:+557854578964">+55 785 4578964</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer Top End */}
        {/* Footer Bottom Start */}
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="copyright ">
                  <p>
                    &copy; 2023 Your Company Name - Website by <span>New Gaia Labs</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer Bottom End */}
      </footer>
    </>
  );
};

export default Cta;
