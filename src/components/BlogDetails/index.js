import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaCalendar,
  FaChevronRight,
  FaCommentDots,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import SideBar from "../SideBar";
import post1 from "../../img/blog-2.jpg";
import author1 from "../../img/author-1.jpg";
import author2 from "../../img/author-2.jpg";
import "./style.css";

const BlogDetails = () => {
  return (
    <>
      <section className="blog-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-page-left blog-details-page">
                <div className="blog-item-box">
                  <div className="blog_info">
                    <figure className="blog-img">
                      <img src={post1} alt="blog imag" />
                    </figure>
                    <div className="blog-detail">
                      <div className="other_info">
                        <div className="blog-meta">
                          <figure>
                            <img src={author1} alt="img" />
                          </figure>
                          <h4>John Deo</h4>
                        </div>
                        <label>
                          <FaCalendar />
                          Jan 30, 2020
                        </label>
                        <label>
                          <FaCommentDots />
                          Comments <Link to="/">(144)</Link>
                        </label>
                      </div>
                      <h3>Keep Work, For Safe Communities</h3>
                      <p className="text-length">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and prai.craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer. Fusce quis nulla volutpat, rhoncus
                        ligula ut, pulvinar nisi. In dapibus urna sit amet
                        accumsan tristique. Donec odio ligula, luctus venenatis
                        varius id, tincidunt ac ipsum. Cras commodo, velit nec
                        aliquam dictum, tortor velit dictum ipsum, sed ornare
                        nunc leo nec ipsum.
                      </p>
                      <p>
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                      <p>
                        Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar
                        nisi. In dapibus urna sit amet accumsan tristique. Donec
                        odio ligula, luctus venenatis varius id, tincidunt ac
                        ipsum. Cras commodo, velit nec aliquam dictum, tortor
                        velit dictum ipsum, sed ornare nunc leo nec ipsum.
                      </p>
                      <blockquote>
                        <p className="blockquote_desc">
                          There are no secrets to success. It is the result of
                          preparation, hard work, and learning from
                          failure.lorem ipsum dolor sit amet.
                        </p>
                        <h4 className="qoute_meta">- Jhon Doe</h4>
                        <FaQuoteLeft />
                      </blockquote>
                      <p>
                        Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                      <div className="blog-cat">
                        <Link to="/">AI</Link>
                        <Link to="/">Data Science</Link>
                        <Link to="/">Robotics</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /end blog item*/}
                <div className="comment-list">
                  <div className="comment-group-title">
                    <h3>Comments (03)</h3>
                  </div>
                  <div className="single-comment-item">
                    <div className="single-comment-box">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>lona Mendil</h4>
                            <ul>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                            </ul>
                            <p>4 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Ne erat velit invidunt his. Eum in dicta veniam
                              interesset, harum lupta definitionem. Vocibus
                              suscipit prodesset vim ei, equidem perpetua eu
                              per.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-box comment_reply">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author2} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>Jerix Ablin</h4>
                            <ul>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                            </ul>
                            <p>12 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              orem ipsum dolor sit amet, consectetur adipisicing
                              elit. Velit omnis animi et iure laudantium vitae,
                              praesentium optio, sapiente distinctio illo?{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-box">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>lona Mendil</h4>
                            <ul>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                              <li>
                                <FaStar />
                              </li>
                            </ul>
                            <p>4 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Ne erat velit invidunt his. Eum in dicta veniam
                              interesset, harum lupta definitionem. Vocibus
                              suscipit prodesset vim ei, equidem perpetua eu
                              per.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /end comment list */}
                <div className="leave-comment">
                  <h3>Leave a Comment</h3>
                  <form>
                    <Row>
                      <Col lg={6}>
                        <div className="comment-field">
                          <label>Your Name</label>
                          <input
                            className="ns-com-name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="comment-field">
                          <label>Email Address</label>
                          <input
                            className="ns-com-name"
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="comment-field">
                          <label>Your Comment</label>
                          <textarea
                            className="comment"
                            placeholder="Comment..."
                            name="comment"
                            defaultValue={""}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="comment-field">
                          <button type="submit" className="theme-btn">
                            post comment{" "}
                            <span>
                              <FaChevronRight />
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                {/* /end comment form */}
              </div>
            </Col>
            <SideBar />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
