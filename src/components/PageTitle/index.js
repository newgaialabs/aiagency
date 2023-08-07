import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section className="breadcrumb-area">
      <div className="breadcrumb-shape" />
      <Container>
        <Row>
          <Col lg={12}>
            <div className="breadcrumb-inn">
              <div className="section-title ">
                <h2>{props.PageTitle}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
