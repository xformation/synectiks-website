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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto text-capitalize">
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown">
                    Enterprise Transformation
                </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/devops">
                      {" "}
                      DevOps Transformation{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Foundation{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Migration & Optimization{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/microservices">
                      {" "}
                      Microservices Transformation{" "}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbardrop1"
                    data-toggle="dropdown" >
                    Cloud Solutions
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/privatecloud">
                      {" "}
                      Private Cloud{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/hybridcloud">
                      {" "}
                      Hybrid Cloud{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/publiccloud">
                      {" "}
                      Public Cloud{" "}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbardrop2"
                    data-toggle="dropdown" >
                    SaaS
                   </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/universitymanagement">
                      {" "}
                      University Management System{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/projectmanagement">
                      {" "}
                      Project Management System{" "}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop3"
                    data-toggle="dropdown">
                    Services
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/migrationservices">
                      {" "}
                      Migration Services{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/applicationdevelopment">
                      {" "}
                      Application Development{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/managedservices">
                      {" "}
                      Managed Services{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/discovery">
                      {" "}
                      Discovery & Assesment{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/automation">
                      {" "}
                      Automation & Monitoring{" "}
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link"
                    href="#"
                    id="navbardrop4"
                    data-toggle="dropdown">
                    Resources
                  </a>
                  <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/resources">
                      {" "}
                      Featured{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Case Studies{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/videos">
                      {" "}
                      Videos{" "}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop5"
                    data-toggle="dropdown"
                    >
                  Company
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/aboutus">
                      {" "}
                      About Us{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/careers">
                      {" "}
                      Careers{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/partners">
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
      {/* <Background /> */}
      {/* <Main /> */}
    </div>
  );
};
