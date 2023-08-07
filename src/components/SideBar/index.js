import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaTwitter,
  FaWordpress,
} from "react-icons/fa";
import insta1 from "../../img/insta_01.jpg";
import insta2 from "../../img/insta_02.jpg";
import insta3 from "../../img/insta_03.jpg";
import insta4 from "../../img/insta_04.jpg";
import insta5 from "../../img/insta_05.jpg";
import insta6 from "../../img/insta_06.jpg";
import insta7 from "../../img/insta_07.jpg";
import insta8 from "../../img/insta_08.jpg";
import insta9 from "../../img/insta_09.jpg";
import post1 from "../../img/post_01.jpg";
import post2 from "../../img/post_02.jpg";
import post3 from "../../img/post_03.jpg";
import post4 from "../../img/post_04.jpg";
import "./style.css";

const SideBar = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Col lg={4}>
        <aside>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Search</h4>
            </div>
            <div className="slidebar__form">
              <form action="#">
                <input type="text" placeholder="Search your keyword..." />
                <button>
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Instagram</h4>
            </div>
            <ul className="widget-insta-post">
              <li>
                <Link to="/" onClick={onClick}>
                  <img src={insta1} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  <img src={insta2} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  <img src={insta3} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  <img src={insta4} alt="img" />
                </Link>
              </li>
              <li>
                <Link kto="/" onClick={onClick}>
                  <img src={insta5} alt="img" />
                </Link>
              </li>
              <li>
                <Link kto="/" onClick={onClick}>
                  <img src={insta6} alt="img" />
                </Link>
              </li>
              <li>
                <Link kto="/" onClick={onClick}>
                  <img src={insta7} alt="img" />
                </Link>
              </li>
              <li>
                <Link kto="/" onClick={onClick}>
                  <img src={insta8} alt="img" />
                </Link>
              </li>
              <li>
                <Link kto="/" onClick={onClick}>
                  <img src={insta9} alt="img" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Follow Us</h4>
            </div>
            <div className="widget-social text-center">
              <Link to="/" onClick={onClick}>
                <FaTwitter />
              </Link>
              <Link to="/" onClick={onClick}>
                <FaPinterestP />
              </Link>
              <Link to="/" onClick={onClick}>
                <FaFacebookF />
              </Link>
              <Link to="/" onClick={onClick}>
                <FaInstagram />
              </Link>
              <Link to="/" onClick={onClick}>
                <FaWordpress />
              </Link>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Categories</h4>
            </div>
            <ul className="cat__list">
              <li>
                <Link to="/" onClick={onClick}>
                  Lifestyle <span>(05)</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  Travel <span>(34)</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  Fashion <span>(89)</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  Music <span>(92)</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClick}>
                  Branding <span>(56)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Feeds</h4>
            </div>
            <div className="widget__post">
              <ul>
                <li>
                  <div className="widget__post-thumb">
                    <img src={post1} alt="img" />
                  </div>
                  <div className="widget__post-content">
                    <h6>
                      <Link to="/single-blog">
                        Alonso kelina falao asiano pero
                      </Link>
                    </h6>
                    <span>
                      <FaClock />1 Hours ago
                    </span>
                  </div>
                </li>
                <li>
                  <div className="widget__post-thumb">
                    <img src={post2} alt="img" />
                  </div>
                  <div className="widget__post-content">
                    <h6>
                      <Link to="/single-blog">
                        It is a long established fact that a reader
                      </Link>
                    </h6>
                    <span>
                      <FaClock />3 Hours ago
                    </span>
                  </div>
                </li>
                <li>
                  <div className="widget__post-thumb">
                    <img src={post3} alt="img" />
                  </div>
                  <div className="widget__post-content">
                    <h6>
                      <Link to="/single-blog">
                        Many desktop publish packages and web
                      </Link>
                    </h6>
                    <span>
                      <FaClock />5 Hours ago
                    </span>
                  </div>
                </li>
                <li>
                  <div className="widget__post-thumb">
                    <img src={post4} alt="img" />
                  </div>
                  <div className="widget__post-content">
                    <h6>
                      <Link to="/single-blog">
                        Various versions have evolved over the years
                      </Link>
                    </h6>
                    <span>
                      <FaClock />6 Hours ago
                    </span>
                  </div>
                </li>
                <li>
                  <div className="widget__post-thumb">
                    <img src={post3} alt="img" />
                  </div>
                  <div className="widget__post-content">
                    <h6>
                      <Link to="/single-blog">
                        Photo booth anim 8-bit PBR 3 wolf moon.
                      </Link>
                    </h6>
                    <span>
                      <FaClock />8 Hours ago
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title text-center">
              <h4>Tags</h4>
            </div>
            <div className="widget__tag">
              <ul>
                <li>
                  <Link to="/" onClick={onClick}>
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Photo
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Adventures
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Musician
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    08
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Photo
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Adventures
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    Musician
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={onClick}>
                    08
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </Col>
    </>
  );
};

export default SideBar;
