import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../flaticon/flaticon.css";
import "./style.css";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="subscribe-box ">
                <div className="section-title">
                  <h2>
                    Subscribe for <span>Newsletter</span>
                  </h2>
                  <p>Subscribe to our newsletter &amp; Stay Updated</p>
                </div>
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Subscribe;
