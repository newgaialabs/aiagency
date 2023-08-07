import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAngleDoubleRight,
  FaCalendar,
  FaChevronRight,
  FaCommentDots,
} from "react-icons/fa";
import SideBar from "../SideBar";
import post1 from "../../img/blog-2.jpg";
import post2 from "../../img/blog-1.jpg";
import post3 from "../../img/blog-3.jpg";
import author1 from "../../img/author-1.jpg";
import author2 from "../../img/author-2.jpg";
import "./style.css";

const Blogs = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="blog-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-page-left">
                <div className="blog-item-box">
                  <div className="blog_info">
                    <figure className="blog-img">
                      <Link to="/single-blog">
                        <img src={post1} alt="blog imag" />
                      </Link>
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
                          Comments{" "}
                          <Link to="/" onClick={onClick}>
                            (144)
                          </Link>
                        </label>
                      </div>
                      <h3>
                        <Link to="/single-blog">
                          Keep Work, For Safe Communities
                        </Link>
                      </h3>
                      <p className="text-length">
                        "But I must explain to you how all this mistaken idea of
                        denouncing pleasure and prai.craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer"
                      </p>
                      <Link to="/single-blog" className="theme-btn">
                        Read More
                        <span>
                          <FaChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /end blog item*/}
                <div className="blog-item-box">
                  <div className="blog_info">
                    <figure className="blog-img">
                      <Link to="/single-blog">
                        <img src={post2} alt="blog imag" />
                      </Link>
                    </figure>
                    <div className="blog-detail">
                      <div className="other_info">
                        <div className="blog-meta">
                          <figure>
                            <img src={author2} alt="img" />
                          </figure>
                          <h4>S. Smith</h4>
                        </div>
                        <label>
                          <FaCalendar />
                          Jan 30, 2020
                        </label>
                        <label>
                          <FaCommentDots />
                          Comments{" "}
                          <Link to="/" onClick={onClick}>
                            (109)
                          </Link>
                        </label>
                      </div>
                      <h3>
                        <Link to="/single-blog">
                          Reporting Qouncil Arei Not Could More.
                        </Link>
                      </h3>
                      <p className="text-length">
                        "But I must explain to you how all this mistaken idea of
                        denouncing pleasure and prai.craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer"
                      </p>
                      <Link to="/single-blog" className="theme-btn">
                        Read More
                        <span>
                          <FaChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /end blog item*/}
                <div className="blog-item-box">
                  <div className="blog_info">
                    <figure className="blog-img">
                      <Link to="/single-blog">
                        <img src={post3} alt="blog imag" />
                      </Link>
                    </figure>
                    <div className="blog-detail">
                      <div className="other_info">
                        <div className="blog-meta">
                          <figure>
                            <img src={author1} alt="img" />
                          </figure>
                          <h4>Lio jhon</h4>
                        </div>
                        <label>
                          <FaCalendar />
                          Jan 30, 2020
                        </label>
                        <label>
                          <FaCommentDots />
                          Comments{" "}
                          <Link to="/" onClick={onClick}>
                            (132)
                          </Link>
                        </label>
                      </div>
                      <h3>
                        <Link to="/single-blog">
                          factsheet provides an coronavirus situation
                        </Link>
                      </h3>
                      <p className="text-length">
                        "But I must explain to you how all this mistaken idea of
                        denouncing pleasure and prai.craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer"
                      </p>
                      <Link to="/single-blog" className="theme-btn">
                        Read More
                        <span>
                          <FaChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /end blog item*/}
                <div className="pagination-box-row">
                  <p>Page 1 of 6</p>
                  <ul className="pagination">
                    <li>
                      <Link to="/" onClick={onClick}>
                        1
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/" onClick={onClick}>
                        2
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        3
                      </Link>
                    </li>
                    <li>...</li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        6
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaAngleDoubleRight />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /end pagination*/}
              </div>
            </Col>
            <SideBar />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
