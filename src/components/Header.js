import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { GoTriangleLeft } from 'react-icons/go';
import Topbar from './topbar';
import logo from '../images/logo.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './drop.css';

// const z = {
//   zIndex: "9999 !important",
// }

const Header = () => {

  return (
    <>
      <HeaderNav>
        <nav className='FixedHeader'>
          <Topbar />
          <div className="flex">
            <div className="logo">
              <a href="/">
                <img src={logo}
                  className='logo-syn' alt="synectiks" />
              </a>
            </div>
            <div className="flex">
              <a href="/what-we-do/index.html" className="nav-item fnt-nav w-mx nav-link">WHAT WE DO</a>
              <div class="dropdown">
                <a class="dropbtn">CLOUD SERVICES</a>
                <div className="flex-menu">
                  <div className="p-0 bcdl pl-md-2">
                    <div class="dropdown-content bg-white">
                      <div className="grid-sub-menu">
                        <div className="one">
                          <a className="main-sub-menu p-2 lt-colr" href="/synectiks-hosted-infrastructure-business-continuity/index.html">
                            Hosted
                            Infrastructure
                            & Business Continuity<GoTriangleLeft style={{
                              marginRight: '-1.2rem',
                              color: '#fff',
                              fontSize: '36px'
                            }} />
                          </a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/aws-managed-services/index.html">
                            AWS Managed Servicese</a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/microsoft-365-services/index.html">
                            Microsoft 365 Services
                          </a>
                        </div>
                        <div className="two">
                        <a className="main-sub-menu p-2 lt-colr" href="/business-continuity-cyber-security/index.html">
                          Business Continuity & Cyber Security<GoTriangleLeft className='gtr' /></a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/secure-custom-hosted-infrastructure/index.html">
                            Secure & Custom Hosted Infrastructure</a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/digital-workspace/index.html">
                            Cloud-Hosted Virtual Desktop</a></div>
                        <div className="three">
                          <a className="main-sub-menu p-2 dropdown-item" href="/protect-cloud/index.html">
                            Protect Cloud
                          </a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/cloud-backup-service/index.html">
                            Backup as a Service</a>
                          <a className="main-sub-menu p-2 dropdown-item" href="/cloud-disaster-recovery-service/index.html">
                            Disaster Recovery as a Service</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <a class="dropbtn">MIGRATION & MODERNIZATION</a>
                <div class="dropdown-content bg-white">
                  <a className='py-2 dropdown-item' href="/infrastructure-transformation/index.html">
                    Infrastructure Transformation</a>
                  <a className='py-2 dropdown-item' href="/application-transformation/index.html">
                    Application Transformation</a>
                  <a className='py-2 dropdown-item' href="/devops-transformation/index.html">
                    DevOps Transformation</a>
                </div>
              </div>
              <div class="dropdown">
                <a class="dropbtn">SOLUTIONS</a>
                <div class="dropdown-content bg-white">
                  <a className='py-2 dropdown-item' href="/microservices/index.html">
                    Microservices</a>
                  <a className='py-2 dropdown-item' href="/hybrid-cloud/index.html">
                    Hybrid Cloud</a>
                </div>
              </div>
              <div class="dropdown">
                <a class="dropbtn">COMPANY</a>
                <div class="dropdown-content bg-white">
                  <a className="py-2 dropdown-item" href="/about-us/index.html">
                    About Us</a>
                  <a className="py-2 dropdown-item" href="/careers/index.html">
                    Careers</a>
                  <a className="py-2 dropdown-item" href="/Contact-us.html">
                    Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </HeaderNav>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
export default Header;

const HeaderNav = styled.div`
  display: none !important;
  .main-tab {
    margin-left: -12px !important;
  }
  .icon-fnt {
    /* font-size: 2rem;
    color: white;
    margin-right: -2.2rem; */
    font-size: 1.2rem;
    color: white;
    margin-right: -30px;
  }
  .fnt-nav {
    font-size: 14px;
    margin-top: 2px;
    margin-left: 8px;
  }
  .bcdr {
    border-right: 1px solid rgba(0, 0, 0, 0.09) !important;
  }
  .bcdl {
    border-left: 1px solid rgba(0, 0, 0, 0.09) !important;
  }
  .lt-colr {
    background: rgba(0, 0, 0, 0.09) !important;
    color: rgba(0, 0, 0, 0.5);
  }
  .lt-colr:hover {
    background: #fbba00 !important;
    color: rgba(0, 0, 0, 0.5);
  }
  /* a.main-sub-menu.dropdown-item {
		padding-left: 0rem;
		font-size: 0.8rem;
	} */
  a.sublist.dropdown-item {
    padding-left: 5rem;
    font-size: 0.7rem;
  }
  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0);
  }
  .navbar-toggler > .close {
    display: inline;
  }
  .navbar-toggler > .navbar-toggler-icon {
    display: none;
  }
  .navbar-toggler:not(.collapsed) > .close {
    display: none;
  }
  .navbar-toggler:not(.collapsed) > .navbar-toggler-icon {
    display: inline;
    background-image: none;
  }
  .card-header {
    padding: 0.75rem 9.25rem !important;
  }
  .bg-top {
    background: var(--synectiksBlue) !important;
  }

  .ml-01 {
    margin-left: -10px !important;
  }
  @media (min-width: 576px) {
  height:0px;
    display: block !important;
    .ml-01 {
      margin-left: 0px !important;
    }
    .main-tab {
      margin-left: 0 !important;
    }
    .main-tab.dropdown.nav-item > .dropdown-menu {
      width: max-content;
      position: absolute;
      left: -15rem;
    }
    .nav-item > a.active,
    .nav-item > a:active {
      background-color: #c9ddf1 !important;
      border-radius: 0.25rem;
      height: 2.75rem;
    }
    .bg-top {
      background: var(--synectiksBlue) !important;
      height: auto;
    }
    .px-5 {
      padding-left: 3.75rem !important;
      padding-right: 3.75rem !important;
    }
    .dropdown-item {
      background-color: var(--synectiksWhite);
      color: var(--textColor);
    }
    .dropdown-menu {
      background: var(--synectiksWhite);
    }
  }
`;
