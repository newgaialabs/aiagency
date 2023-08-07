import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import logo from "../../img/logo.png";
import "../../flaticon/flaticon.css";
import "./style.css";

const Error = () => {
  return (
    <>
      {/* Login Page Header Area Start */}
      <div className="error-page-header-area">
        <div className="container-fluid">
          <Row>
            <Col md={4} sm={4}>
              <div className="error-page-logo">
                <Link to="/">
                  <img src={logo} alt="Site Logo" />
                </Link>
              </div>
            </Col>
            <Col md={8} sm={8}>
              <div className="error-page-logo-right">
                <Link to="/" className="theme-btn">
                  back to home{" "}
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Login Page Header Area End */}
      {/* Error Page Area Start */}
      <div className="error-page-area">
        <div className="container-fluid">
          <Row>
            <Col md={12}>
              <div className="error-page-box">
                <h2 className="error_bg">Oops!</h2>
                <h4>404 - page not found</h4>
                <p>
                  The page you are looking for might have been remmoved had its
                  name changed or is temporarily unavailable
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Error Page Area End */}
    </>
  );
};

export default Error;
