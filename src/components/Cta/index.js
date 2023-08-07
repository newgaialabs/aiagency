import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "../../flaticon/flaticon.css";
import "./style.css";

const Cta = () => {
  return (
    <>
      <section className="trial-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              {/* <div className="trial-box">
                <div className="section-title ">
                  <h2>
                    We are offering <span>14 days</span> free trial
                  </h2>
                  <p>with our all professional services for early 1k users</p>
                </div>
                <Link to="/login" className="theme-btn-white ">
                  Try 14 days free trial
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cta;
