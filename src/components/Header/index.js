import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import MobileMenu from "../../components/MobileMenu";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../img/logo.png";
import "./style.css";

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header
        className={
          fix ? "animated header-area fixed-header" : "animated header-area"
        }
      >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="logo-area  scroll-hide-logo">
                  <Link to="/">
                    <img src={props.Logo} alt="logo" />
                  </Link>
                </div>
                <div className="logo-area scroll-show-logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="menu-area d-flex justify-content-end align-items-center">
                  <div className="mobile-menu" />
                  <div className="main-menu">
                    <nav className="menu-box">
                      <ul className="nav-menu" id="mobile-menu">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <MobileMenu />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div
        className={
          active ? "search-overlay-active search-overlay" : "search-overlay"
        }
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />
            <div
              className="search-overlay-close"
              onClick={() => setActive(!active)}
            >
              <span className="search-overlay-close-line" />
              <span className="search-overlay-close-line" />
            </div>
            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
