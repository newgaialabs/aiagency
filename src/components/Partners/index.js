import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../../img/sponsor1.png";
import Img2 from "../../img/sponsor2.png";
import Img3 from "../../img/sponsor3.png";
import Img4 from "../../img/sponsor4.png";
import Img5 from "../../img/sponsor5.png";
import Img6 from "../../img/sponsor6.png";
import Img7 from "../../img/sponsor7.png";
import Img8 from "../../img/sponsor8.png";
import Img9 from "../../img/sponsor9.png";
import "./style.css";

const Partners = () => {
  return (
    <>
      <section className="partners-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title">
                <h2>
                  Meet with Our <span>Honorable</span> <br />
                  Partners{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="sponsor-box-item">
                <div className="sponsor-box">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={Img1} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img2} alt="sponsor" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="sponsor-box-item">
                <div className="sponsor-box">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={Img9} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img3} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img8} alt="sponsor" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="sponsor-box-item">
                <div className="sponsor-box">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={Img4} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img5} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img7} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Img6} alt="sponsor" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Partners;
