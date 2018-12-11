import * as React from "react";
import { NavLink } from "react-router-dom";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="container">
      <div className="row">
        <nav
          className="px-6 navbar fixed-top navbar-expand-lg navbar-dark menu-bg w-100"
          id="navbar"
        >
          <a className="navbar-brand" href="#">
            <img className="navbar-icon" src="img/logo.png" alt="logo" />
          </a>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-capitalize">
              <li className="nav-item hvrcenter">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  {" "}
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/enterprise">
                    {" "}
                    Enterprise Transformation{" "}
                  </NavLink>
                  <NavLink className="dropdown-item" to="/foundation">
                    {" "}
                    Foundation{" "}
                  </NavLink>
                  <NavLink className="dropdown-item" to="/migration">
                    {" "}
                    Migration & Deployment{" "}
                  </NavLink>
                  <NavLink className="dropdown-item" to="/operation">
                    {" "}
                    Operations{" "}
                  </NavLink>
                  <NavLink className="dropdown-item" to="/optimization">
                    {" "}
                    Optimization{" "}
                  </NavLink>
                </div>
              </li>
              <li className="nav-item hvrcenter">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/solution"
                >
                  {" "}
                  Solution{" "}
                </NavLink>
              </li>
              <li className="nav-item hvrcenter">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/scloud"
                >
                  {" "}
                  Scloud{" "}
                </NavLink>
              </li>
              <li className="nav-item hvrcenter">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/resources"
                >
                  {" "}
                  Resources{" "}
                </NavLink>
              </li>
              <li className="nav-item hvrcenter">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/company"
                >
                  {" "}
                  Company{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
