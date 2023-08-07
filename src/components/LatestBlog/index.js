import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../img/blog-1.jpg";
import img2 from "../../img/blog-2.jpg";
import img3 from "../../img/blog-3.jpg";
import author1 from "../../img/author-1.jpg";
import author2 from "../../img/author-2.jpg";
import "./style.css";

const LatestBlog = () => {
  return (
    <>
      <section className="blog-section section_100">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={12}>
              <div className="section-title ">
                <h2>
                  Our <span>Latest Media</span> <br />
                  Stay tuned!
                </h2>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div className="section-para  ">
                <p>
                  Etiam nec odio vestibulum est mattis effic iturut magna. Pelle
                  ntesque sit am et tellus blandit. Etiam nec odio vestibul.
                  Etiam nec odio vestibulum est mattis effic iturut.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6}>
              <div className="blog-item">
                <div className="blog-image">
                  <Link to="/single-blog">
                    <img src={img1} alt="blog" />
                  </Link>
                </div>
                <div className="blog-desc">
                  <div className="meta-image">
                    <div className="author-round">
                      <img src={author1} alt="author" />
                    </div>
                    <div className="tags">
                      <h4>
                        By: <span>lona Mendil</span>
                      </h4>
                      <h5>5 August 2020</h5>
                    </div>
                  </div>
                  <div className="blog-text">
                    <Link to="/single-blog">
                      <h3>Is Machine Learning Right For You</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="blog-item ">
                <div className="blog-image">
                  <Link to="/single-blog">
                    <img src={img2} alt="blog" />
                  </Link>
                </div>
                <div className="blog-desc">
                  <div className="meta-image">
                    <div className="author-round">
                      <img src={author2} alt="author" />
                    </div>
                    <div className="tags">
                      <h4>
                        By: <span>Dana Kamal</span>
                      </h4>
                      <h5>5 August 2020</h5>
                    </div>
                  </div>
                  <div className="blog-text">
                    <Link to="/single-blog">
                      <h3>The State Of Artificial Intelligence</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="blog-item ">
                <div className="blog-image">
                  <Link to="/single-blog">
                    <img src={img3} alt="blog" />
                  </Link>
                </div>
                <div className="blog-desc">
                  <div className="meta-image">
                    <div className="author-round">
                      <img src={author1} alt="author" />
                    </div>
                    <div className="tags">
                      <h4>
                        By: <span>lona Mendil</span>
                      </h4>
                      <h5>5 August 2020</h5>
                    </div>
                  </div>
                  <div className="blog-text">
                    <Link to="/single-blog">
                      <h3>Your Workplace from Cyber Attacks</h3>
                    </Link>
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

export default LatestBlog;
