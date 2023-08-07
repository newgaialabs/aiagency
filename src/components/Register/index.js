import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../img/login-image-2.png";
import img3 from "../../img/login-image-3.png";
import logo from "../../img/logo.png";
import "./style.css";

const Register = () => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };
  return (
    <>
      <div className="login">
        <section className="login-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="login-left">
                  <Slider {...settings} className="login-text">
                    <div className="slide">
                      <div className="login-slide-item">
                        <img src={img2} alt="login img" />
                        <h2>
                          A few more clicks to <br />
                          sign in to your account.{" "}
                        </h2>
                      </div>
                    </div>
                    <div className="slide">
                      <div className="login-slide-item">
                        <img src={img3} alt="login img" />
                        <h2>
                          A few more clicks to <br />
                          sign in to your account.{" "}
                        </h2>
                      </div>
                    </div>
                    <div className="slide">
                      <div className="login-slide-item">
                        <img src={img2} alt="login img" />
                        <h2>
                          A few more clicks to <br />
                          sign in to your account.{" "}
                        </h2>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Col>
              <Col lg={6}>
                <div className="login-right">
                  <div className="login-logo pt-4 ">
                    <a href="index.html">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>
                  <div className="login-form">
                    <h3>sign up to your account</h3>
                    <form>
                      <p>
                        <input type="email" placeholder="Email Address" />
                      </p>
                      <p>
                        <input type="password" placeholder="Password" />
                      </p>
                      <p>
                        <input type="password" placeholder="Confirm Password" />
                      </p>
                      <p className="custom-checkbox ">
                        <input id="agree" type="checkbox" name="type5" />
                        <label htmlFor="agree">
                          I agree to the <Link to="/">Privacy Policy</Link>
                        </label>
                        <span className="checkbox" />
                      </p>
                      <p>
                        <button type="submit">Register</button>
                      </p>
                    </form>
                    <div className="login-action ">
                      <p>
                        <Link to="/login">Already have an account?</Link>
                      </p>
                    </div>
                    <div className="login-policy ">
                      <p>
                        <Link to="/">Terms of use</Link>
                      </p>
                      <p>
                        <Link to="/">Privacy Policy</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Register;
