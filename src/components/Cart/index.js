import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import product1 from "../../img/product-1.jpg";
import product2 from "../../img/product-3.jpg";
import "./style.css";

const Cart = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="cart-area section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <form action="#">
                <h3>Shopping Cart</h3>
                <div className="table-content table-responsive ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link to="/single-product">
                            <img src={product1} alt="product" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="/single-product">Travel Bag</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <input type="number" defaultValue={1} />
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link to="/single-product">
                            <img src={product2} alt="product" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="/single-product">Basic Principles</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-quantity">
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <input
                                type="number"
                                className="in-num"
                                defaultValue={1}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-remove">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="coupon-all clearfix ">
                  <div className="coupon">
                    <input
                      id="coupon_code"
                      className="input-text"
                      name="coupon_code"
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button
                      className="theme-btn"
                      name="apply_coupon"
                      type="submit"
                    >
                      Apply coupon{" "}
                      <span>
                        <FaChevronRight />
                      </span>
                    </button>
                  </div>
                  <div className="coupon2">
                    <button className="theme-btn" type="submit">
                      Update Cart{" "}
                      <span>
                        <FaChevronRight />
                      </span>
                    </button>
                  </div>
                </div>
                <Row>
                  <div className="col-md-4 ms-auto">
                    <div className="cart-page-total ">
                      <h3>Cart totals</h3>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>$250.00</span>
                        </li>
                        <li>
                          Total <span>$250.00</span>
                        </li>
                      </ul>
                      <div className="cart-action">
                        <Link to="/checkout" className="theme-btn">
                          Proceed to checkout{" "}
                          <span>
                            <FaChevronRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
