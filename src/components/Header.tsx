import * as React from "react";
import { NavLink } from "react-router-dom";
import Background from "./Background/Background";
import { Main } from "./Main/Main";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <nav
            className="px-6 navbar fixed-top navbar-expand-lg navbar-dark menu-bg w-100"
            id="navbar"
          >
            <div className="nav-top">
              <div className="navtop-heading">
                <h6 className="nav-line">Contact Us</h6>
              </div>
              <div className="social-icon">
                <i className="fa fa-facebook-square mr-2" aria-hidden="true" />
                <i className="fa fa-twitter-square mr-2" aria-hidden="true" />
                <i className="fa fa-youtube-play mr-2" aria-hidden="true" />
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </div>
            </div>
            <NavLink className="navbar-brand" to="/">
              <img className="navbar-icon" src="img/logo.png" alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto text-capitalize">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Solutions
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/enterprise">
                      {" "}
                      Cloud{" "}
                    </NavLink>

                    <NavLink className="dropdown-item" to="/optimization">
                      {" "}
                      Digital Transformation{" "}
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/enterprise">
                      {" "}
                      Assessments{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Security Assessments{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Cloud Services{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/operation">
                      {" "}
                      Managed Services{" "}
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Resources
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Featured{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Case Studies{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/operation">
                      {" "}
                      Videos{" "}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Company
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      About Us{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Careers{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Partners{" "}
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
