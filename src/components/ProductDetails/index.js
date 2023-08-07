import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlus,
  FaPinterestP,
  FaShoppingCart,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import img1 from "../../img/product-details.png";
import product1 from "../../img/product-1.jpg";
import product2 from "../../img/product-2.jpg";
import product3 from "../../img/product-3.jpg";
import product4 from "../../img/product-4.jpg";
import "./style.css";

const ProductDetails = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="product-details section_100">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="product-details-image ">
                <img src={img1} alt="product" />
              </div>
            </Col>
            <div className="col-lg-6">
              <div className="product-details-text ">
                <h3>Hand Gloves</h3>
                <div className="tour-rating">
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
                  <p>(23 rating)</p>
                </div>
                <div className="single-pro-page-para">
                  <p>
                    Cursus mal suada faci lisis. Lorem ipsum dolor.ipsum dolor
                    sit amet, cons ectetur elit. Ves tibulum nec odios Suspe
                    ndisse cursus mal suada faci lisis. Lorem ipsum dolor.ipsum
                    dolor sit amet,.Lorem ipsum dolor.ipsum dolor sit amet, cons
                    ectetur elit. Ves tibulum nec odios
                  </p>
                </div>
                <div className="single-shop-price">
                  <p>
                    Price:<span>$18</span>
                  </p>
                  <p>
                    Available:<span>In Stock</span>
                  </p>
                </div>
                <div className="quantity">
                  <p>Quantity: </p>
                  <div className="num-block skin-2">
                    <div className="num-in">
                      <input type="number" defaultValue={1} />
                    </div>
                  </div>
                </div>
                <div className="single-shop-page-btn">
                  <Link to="/cart" className="theme-btn">
                    <FaShoppingCart />
                    add to cart{" "}
                    <span>
                      <FaChevronRight />
                    </span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaGooglePlus />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaPinterestP />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="related-product-section section_b_70">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title  ">
                <h2>
                  Related <span>Products</span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="product-list-box">
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <div className="product-item ">
                      <div className="product-image">
                        <Link to="/" onClick={onClick}>
                          <img src={product1} alt="product 1" />
                        </Link>
                      </div>
                      <div className="product-text">
                        <div className="product-title">
                          <h3>
                            <Link to="/" onClick={onClick}>
                              Travel Bag
                            </Link>
                          </h3>
                          <p>$180.00</p>
                        </div>
                        <div className="product-action">
                          <Link to="/" onClick={onClick}>
                            <FaShoppingCart />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div className="product-item ">
                      <div className="product-image">
                        <Link to="/" onClick={onClick}>
                          <img src={product2} alt="product 1" />
                        </Link>
                      </div>
                      <div className="product-text">
                        <div className="product-title">
                          <h3>
                            <Link to="/" onClick={onClick}>
                              Flying Ninja
                            </Link>
                          </h3>
                          <p>$80.00</p>
                        </div>
                        <div className="product-action">
                          <Link to="/" onClick={onClick}>
                            <FaShoppingCart />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div className="product-item ">
                      <div className="product-image">
                        <Link to="/" onClick={onClick}>
                          <img src={product3} alt="product 1" />
                        </Link>
                      </div>
                      <div className="product-text">
                        <div className="product-title">
                          <h3>
                            <Link to="/" onClick={onClick}>
                              Basic Principles
                            </Link>
                          </h3>
                          <p>$110.00</p>
                        </div>
                        <div className="product-action">
                          <Link to="/" onClick={onClick}>
                            <FaShoppingCart />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div className="product-item ">
                      <div className="product-image">
                        <Link to="/" onClick={onClick}>
                          <img src={product4} alt="product 1" />
                        </Link>
                      </div>
                      <div className="product-text">
                        <div className="product-title">
                          <h3>
                            <Link kto="/" onClick={onClick}>
                              Skis Wallet
                            </Link>
                          </h3>
                          <p>$20.00</p>
                        </div>
                        <div className="product-action">
                          <Link to="/" onClick={onClick}>
                            <FaShoppingCart />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
