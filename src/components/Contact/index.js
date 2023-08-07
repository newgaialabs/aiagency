import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaChevronRight,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import "./style.css";

const Contact = () => {
  return (
    <>
      {/* Contact Map Start */}
      {/* <div className="map-area section_t_100">
        <div className="section-title ">
          <h2>
            Easily <span>Find us</span> on <br /> google Map
          </h2>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14612.975409527537!2d90.497437!3d23.7029844!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1590724346928!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div> */}
      {/* Contact Map End */}
      {/* Contact Form Start */}
      <section className="contact-form section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title  ">
                <h2>
                  Get in <span>Touch</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <div className="contact-form-wrapper ">
                <form>
                  <Row>
                    <Col lg={6}>
                      <div className="form-group">
                        <label htmlFor="name">Name </label>
                        <input
                          type="text"
                          className="input-field"
                          id="name"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label htmlFor="email">Email </label>
                        <input
                          type="text"
                          className="input-field"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label htmlFor="subjict">Subjict </label>
                        <input
                          type="text"
                          className="input-field"
                          id="subjict"
                          placeholder="Write Your Subjict"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label htmlFor="phone">Phone </label>
                        <input
                          type="text"
                          className="input-field"
                          id="phone"
                          placeholder="Enter Your Phone No"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group button-area">
                        <label htmlFor="message">Message </label>
                        <textarea
                          id="message"
                          className="input-field textarea"
                          placeholder="Write Your Message"
                          defaultValue={""}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group button-area">
                        <button type="submit" className="theme-btn">
                          Send Message
                          <span>
                            <FaChevronRight />
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <div className="col-lg-4 d-flex">
              <div className="address-area ">
                <h4 className="title">Contact Information</h4>
                <ul className="address-list">
                  <li>
                    <p>
                      <FaMapMarkerAlt /> 28 Green Tower, lavaca street, 2900,USA
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaPhoneAlt /> +88-123-4567-90
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaEnvelope /> info@example.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaGlobe />
                      www.example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* Contact Form End */}
    </>
  );
};

export default Contact;
