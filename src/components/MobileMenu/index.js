import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 3,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [MenuShow, SetMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${MenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id} className="has-child">
                  {item.submenu ? (
                    <p
                      onClick={() => setIsOpen(isOpen ? 0 : item.id)}
                      aria-expanded={MenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${MenuShow ? "active" : ""}`}
          onClick={() => SetMenuShow(!MenuShow)}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
