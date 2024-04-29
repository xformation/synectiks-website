import React, { useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/header.css";

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isCloudSubMenu, setIsCloudSubMenu] = useState(false);
  const [isMigrationSubMenu, setIsMigrationSubMenu] = useState(false);
  const [isSolutionsSubMenu, setIsSolutionsSubMenu] = useState(false);
  const [isCompanySubMenu, setIsCompanySubMenu] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    setIsResponsive(false);
  };
  const toggleCloudSubMenu = () => {
    setIsCloudSubMenu((prevState) => !prevState);
  };
  const toggleMigrationSubMenu = () => {
    setIsMigrationSubMenu((prevState) => !prevState);
  };
  const toggleSolutionsSubMenu = () => {
    setIsSolutionsSubMenu((prevState) => !prevState);
  };
  const toggleCompanySubMenu = () => {
    setIsCompanySubMenu((prevState) => !prevState);
  };
  return (
    <nav className="FixedHeader">
      <div className="d-flex w-100 py-2 px-md-5 TopBarWrapper">
        <div className="container-fluid text-right">
          <div className="d-flex w-100 align-items-center justify-content-end">
            <a href="/Contact-us.html" className="border-0">
              CONTACT US
            </a>
            <h6>QUESTIONS? 609 608 0388 X 1</h6>
            <a
              href="mailto:info@synectiks.com"
              className="d-none d-md-inline-flex"
            >
              <FaEnvelope className="social me-1" />
              info@synectiks.com
            </a>
            <a
              className="pe-0"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/synectiks/"
            >
              <FaLinkedin className="social" />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 px-md-5 BottomBarWrapper">
        <div className="container-fluid">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src={logo} className="logo-syn" alt="synectiks" />
              </a>
            </div>
            <div className="menu-btn">
              {isResponsive ? (
                <a
                  href="javascript:void(0);"
                  className="icon flex-menu-btn-open"
                  onClick={closeMobileMenu}
                >
                  <AiOutlineClose />
                </a>
              ) : (
                <a
                  href="javascript:void(0);"
                  className="icon flex-menu-btn-open"
                  onClick={toggleResponsive}
                >
                  &#9776;
                </a>
              )}
            </div>
            <div
              className={`topnav ${isResponsive ? "responsive" : ""}`}
              id="myTopnav"
            >
              <ul className="flex align-items-center justify-content-end main-menu">
                <li>
                  <a
                    className="nav-item fnt-nav w-mx nav-link"
                    href="/what-we-do/index.html"
                  >
                    WHAT WE DO
                  </a>
                </li>
                <li className="full-menu">
                  <a
                    className="nav-item fnt-nav w-mx nav-link"
                    href="javascript:void(0)"
                  >
                    CLOUD SERVICES
                    <i
                      className={`${
                        isCloudSubMenu
                          ? "fa fa-caret-up mlft"
                          : "fa fa-caret-down mlft"
                      }`}
                      onClick={toggleCloudSubMenu}
                    ></i>
                  </a>
                  <div
                    className={`${
                      isCloudSubMenu
                        ? "dropdown full responsive"
                        : "dropdown full"
                    }`}
                  >
                    <div className="sub-menu">
                      <a
                        className="main-sub-menu p-2 lt-colr"
                        href="/synectiks-hosted-infrastructure-business-continuity/index.html"
                      >
                        Hosted Infrastructure & Business Continuity
                        <GoTriangleLeft className="gtr" />
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/aws-managed-services/index.html"
                      >
                        AWS Managed Servicese
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/microsoft-365-services/index.html"
                      >
                        Microsoft 365 Services
                      </a>
                    </div>
                    <div className="sub-menu two">
                      <a
                        className="main-sub-menu p-2 lt-colr"
                        href="/business-continuity-cyber-security/index.html"
                      >
                        Business Continuity &amp; Cyber Security{" "}
                        <GoTriangleLeft className="gtr" />
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/secure-custom-hosted-infrastructure/index.html"
                      >
                        Secure &amp; Custom Hosted Infrastructure
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/digital-workspace/index.html"
                      >
                        Cloud-Hosted Virtual Desktop
                      </a>
                    </div>
                    <div className="sub-menu">
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/protect-cloud/index.html"
                      >
                        Protect Cloud
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/cloud-backup-service/index.html"
                      >
                        Backup as a Service
                      </a>
                      <a
                        className="main-sub-menu p-2 dropdown-item"
                        href="/cloud-disaster-recovery-service/index.html"
                      >
                        Disaster Recovery as a Service
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-item fnt-nav w-mx nav-link"
                    href="javascript:void(0)"
                  >
                    MIGRATION & MODERNIZATION
                    <i
                      className={`${
                        isMigrationSubMenu
                          ? "fa fa-caret-up mlft"
                          : "fa fa-caret-down mlft"
                      }`}
                      onClick={toggleMigrationSubMenu}
                    ></i>
                  </a>
                  <div
                    className={`${
                      isMigrationSubMenu ? "dropdown responsive" : "dropdown"
                    }`}
                  >
                    <a
                      className="py-2 dropdown-item"
                      href="/infrastructure-transformation/index.html"
                    >
                      Infrastructure Transformation
                    </a>
                    <a
                      className="py-2 dropdown-item"
                      href="/application-transformation/index.html"
                    >
                      Application Transformation
                    </a>
                    <a
                      className="py-2 dropdown-item"
                      href="/devops-transformation/index.html"
                    >
                      DevOps Transformation
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-item fnt-nav w-mx nav-link"
                    href="javascript:void(0)"
                  >
                    SOLUTIONS
                    <i
                      className={`${
                        isSolutionsSubMenu
                          ? "fa fa-caret-up mlft"
                          : "fa fa-caret-down mlft"
                      }`}
                      onClick={toggleSolutionsSubMenu}
                    ></i>
                  </a>
                  <div
                    className={`${
                      isSolutionsSubMenu ? "dropdown responsive" : "dropdown"
                    }`}
                  >
                    <a
                      className="py-2 dropdown-item"
                      href="/microservices/index.html"
                    >
                      Microservices
                    </a>
                    <a
                      className="py-2 dropdown-item"
                      href="/hybrid-cloud/index.html"
                    >
                      Hybrid Cloud
                    </a>
                  </div>
                </li>
                <li className="company-menu">
                  <a
                    className="nav-item fnt-nav w-mx nav-link"
                    href="javascript:void(0)"
                  >
                    COMPANY
                    <i
                      className={`${
                        isCompanySubMenu
                          ? "fa fa-caret-up mlft"
                          : "fa fa-caret-down mlft"
                      }`}
                      onClick={toggleCompanySubMenu}
                    ></i>
                  </a>
                  <div
                    className={`${
                      isCompanySubMenu ? "dropdown responsive" : "dropdown"
                    }`}
                  >
                    <a
                      className="py-2 dropdown-item"
                      href="/about-us/index.html"
                    >
                      About Us
                    </a>
                    <a
                      className="py-2 dropdown-item"
                      href="/careers/index.html"
                    >
                      Careers
                    </a>
                    <a className="py-2 dropdown-item" href="/Contact-us.html">
                      Contact Us
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
