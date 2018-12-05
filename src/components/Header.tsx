import * as React from "react";
import { Link } from "react-router-dom";

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
                <Link className="nav-link" to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Clolud Services{" "}
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Solution{" "}
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Scloud{" "}
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Resources{" "}
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Technology Partners{" "}
                </Link>
              </li>
              <li className="nav-item hvrcenter">
                <Link className="nav-link" to="/members">
                  {" "}
                  Company{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
