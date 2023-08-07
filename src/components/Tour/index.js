import React from "react";
import VideoModal from "../../components/ModalVideo";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../img/video-banner.jpg";
import shape from "../../img/her-pattarn-5.png";
import "../../flaticon/flaticon.css";
import "./style.css";

const Tour = () => {
  return (
    <>
      <section className="video-section section_t_100">
        <div className="video-bg-shape" />
        <div className="video-pattern">
          <img src={shape} alt="video patter" />
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title  ">
                <p>take a tour</p>
                <h2>
                  Make Your <span>Business</span> More <br />
                  Competitive And Enduring
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="video-holder  " data-aos="fade-up">
                <div className="video-inn">
                  <img src={img1} alt="theater thumb" />
                  <VideoModal videoId="111" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tour;
