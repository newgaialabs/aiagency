import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleDoubleRight, FaCartPlus } from "react-icons/fa";
import productData from "./productData";
import "../../flaticon/flaticon.css";
import "./style.css";

const Products = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="product-section section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="product-list-box">
                <Row>
                  {productData.map((data, index) => {
                    return (
                      <Col lg={3} md={6} sm={12} key={data.id}>
                        <div className="product-item">
                          <div className="product-image">
                            <Link to="/single-product">
                              <img src={data.imgSrc} alt="product 1" />
                            </Link>
                          </div>
                          <div className="product-text">
                            <div className="product-title">
                              <h3>
                                <Link to="/single-product">{data.title}</Link>
                              </h3>
                              <p>{data.price}</p>
                            </div>
                            <div className="product-action">
                              <Link to="/single-product">
                                <FaCartPlus />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
                {/* Pagination Start */}
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
                {/* Pagination End */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
