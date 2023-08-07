import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import teamImg1 from "../../img/team-1.jpg";
import teamImg2 from "../../img/team-2.jpg";
import teamImg3 from "../../img/team-3.jpg";
import teamImg4 from "../../img/team-4.jpg";
import teamImg5 from "../../img/team-5.jpg";
import teamImg6 from "../../img/team-6.jpg";
import "./style.css";

const Team = () => {
  return (
    <>
      <section className="team-section section_t_100 section_b_70">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title  ">
                <h2>
                  Our Expert <span>Team</span> <br />
                  Members{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Team Block Start */}
            <Col lg={4} md={6}>
              <div className="team-item  ">
                <div className="image">
                  <img src={teamImg1} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Alex Maxwel</h3>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </Col>
            {/* Team Block End */}
            {/* Team Block Start */}
            <div className="col-lg-4 col-md-6">
              <div className="team-item ">
                <div className="image">
                  <img src={teamImg2} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Jolly cage</h3>
                    <span>Chief Executive</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Block End */}
            {/* Team Block Start */}
            <div className="col-lg-4 col-md-6">
              <div className="team-item  ">
                <div className="image">
                  <img src={teamImg3} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Matt Murdock</h3>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Block End */}
            {/* Team Block Start */}
            <div className="col-lg-4 col-md-6">
              <div className="team-item ">
                <div className="image">
                  <img src={teamImg4} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>kelva Jhon</h3>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Block End */}
            {/* Team Block Start */}
            <div className="col-lg-4 col-md-6">
              <div className="team-item  ">
                <div className="image">
                  <img src={teamImg5} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Mica Willam</h3>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Block End */}
            {/* Team Block Start */}
            <div className="col-lg-4 col-md-6">
              <div className="team-item ">
                <div className="image">
                  <img src={teamImg6} alt="img" />
                  <ul className="social">
                    <li>
                      <Link to="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                  <div className="content">
                    <h3>Neil Xaron</h3>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Block End */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
