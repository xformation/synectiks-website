// import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import styled from 'styled-components';
// import { breakpoints } from '../utils/breakpoints';
// import logo from '../images/logo.png';
// const MobileNavMenu = () => {
// 	const [ menuOpen, toggleMenuOpen ] = useState(false);

// 	return (
// 		<MenuBar>
// 			<div>
// 				<img src={logo} alt='synectiks' />
// 			</div>
// 			<MenuIconContainer>
// 				<MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
// 					<div />
// 					<div />
// 					<div />
// 				</MenuIcon>
// 			</MenuIconContainer>
// 			<MenuLinks menuOpen={menuOpen}>
// 				<ul>
// 					<li>
// 						<Link to='/'>Home</Link>
// 					</li>
// 					<li>
// 						<Link to='/about'>About</Link>
// 					</li>
// 					<li>
// 						<Link to='/merch'>Merch</Link>
// 					</li>
// 					<li>
// 						<Link to='/about'>Contact</Link>
// 					</li>
// 				</ul>
// 			</MenuLinks>
// 		</MenuBar>
// 	);
// };

// export default MobileNavMenu;

// const MenuBar = styled.header`
// 	@media ${breakpoints.lg} {
// 		display: none;
// 	}
// 	height: 3rem;
// 	position: fixed;
// 	width: 100%;
// 	background: white;
// 	border-bottom: "blue";
// 	z-index: 10;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// `;

// const MenuIconContainer = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// `;

// const MenuIcon = styled.a`
// 	cursor: pointer;
// 	background: transparent;
// 	border: none;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	height: 2rem;
// 	outline: thin-dotted;
// 	z-index: 11;

// 	div {
// 		width: 2rem;
// 		height: 0.25rem;
// 		background: ${({ menuOpen }) => (menuOpen ? 'red' : 'black')};
// 		border-radius: 10px;
// 		transform-origin: 1px;
// 		transition: opacity 300ms, transform 300ms;

// 		:first-child {
// 			transform: ${({ menuOpen }) => (menuOpen ? 'rotate(45deg)' : 'rotate(0)')};
// 		}

// 		:nth-child(2) {
// 			opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
// 			transform: ${({ menuOpen }) => (menuOpen ? 'translateX(-20px)' : 'translateX(0)')};
// 		}

// 		:nth-child(3) {
// 			transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
// 		}
// 	}
// `;

// const MenuLinks = styled.nav`
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	display: flex;
// 	background: blue;
// 	position: absolute;
// 	z-index: 5;
// 	top: 0;
// 	right: 0;
// 	height: 100vh;
// 	width: 100%;
// 	transition: transform 300ms;
// 	transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(100%)')};

// 	ul {
// 		width: 100%;
// 		margin: 0;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 		display: flex;

// 		li {
// 			list-style: none;

// 			a {
// 				text-decoration: none;
// 				color: white;
// 			}
// 		}
// 	}
// `;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Dropdowna,
  aGroup,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { GoTriangleLeft } from 'react-icons/go';
import { FaCaretDown } from 'react-icons/fa';
import Topbar from './topbar';
import logo from '../images/logo.png';
import styled from 'styled-components';
import DesktopNavMenu from './DesktopNav';
import MobileNavMenu from './MobileNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mobilenav.css'
// const z = {
//   zIndex: "9999 !important",
// }

const MobileHeader = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    setIsResponsive(false);
  };
  return (
    <>
      <div className="">

        {/* <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`flex ${isMobileMenuOpen ? 'show' : ''}`}>
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
                      <a className="main-sub-menu p-2 dropdown-item" href="/protect-cloud/index.html">
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
                      <a className="main-sub-menu p-2 dropdown-item" href="/microsoft-365-services/index.html">
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
        </div> */}
        <Topbar />
        <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
          <div className="logo">
            <a href="/">
              <img src={logo}
                className='logo-syn' alt="synectiks" />
            </a>
            <div className='flex-menu-btn'>
              {isResponsive ? (
                <a href="javascript:void(0);"  className="icon flex-menu-btn-open" onClick={closeMobileMenu}>
                  <AiOutlineClose />
                </a>
              ) : (
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon flex-menu-btn-open" onClick={toggleResponsive}>
                  &#9776;
                </a>
              )}
            </div>
          </div>
          <a href="/what-we-do/index.html" className="nav-item fnt-nav w-mx nav-link">WHAT WE DO</a>
          <div class="dropdown-mobile">
            <a class="dropbtn-mobile">CLOUD SERVICES
              <i class="fa fa-caret-down mlft"></i>
            </a>
            <div class="dropdown-content-mobile">

              <a href="/aws-managed-services/index.html">
                AWS Managed Servicese</a>
              <a href="/protect-cloud/index.html">
                Microsoft 365 Services</a>


              <a href="/secure-custom-hosted-infrastructure/index.html">
                Secure & Custom Hosted Infrastructure</a>

              <a href="/digital-workspace/index.html">
                Cloud-Hosted Virtual Desktop</a>

              <a href="/protect-cloud/index.html">
                Protect Cloud</a>

              <a href="/cloud-backup-service/index.html">
                Backup as a Service</a>

              <a href="/microsoft-365-services/index.html">
                Disaster Recovery as a Service</a>
            </div>
          </div>
          <div class="dropdown-mobile">
            <a class="dropbtn-mobile">MIGRATION & MODERNIZATION
              <i class="fa fa-caret-down mlft"></i>
            </a>
            <div class="dropdown-content-mobile">
              <a href="/infrastructure-transformation/index.html">
                Infrastructure Transformation</a>
              <a href="/application-transformation/index.html">
                Application Transformation</a>
              <a href="/devops-transformation/index.html">
                DevOps Transformation</a>
            </div>
          </div>
          <div class="dropdown-mobile">
            <a class="dropbtn-mobile">SOLUTIONS
              <i class="fa fa-caret-down mlft"></i>
            </a>
            <div class="dropdown-content-mobile">
              <a href="/microservices/index.html">
                Microservices</a>
              <a href="/hybrid-cloud/index.html">
                Hybrid Cloud</a>

            </div>
          </div>
          <div class="dropdown-mobile">
            <a class="dropbtn-mobile">COMPANY
              <i class="fa fa-caret-down mlft"></i>
            </a>
            <div class="dropdown-content-mobile">
              <a href="/about-us/index.html">
                About Us</a>
              <a href="/careers/index.html">
                Careers</a>
              <a href="/Contact-us.html">
                Contact Us</a>

            </div>
          </div>



        </div>
      </div>
    </>

  );
};

MobileHeader.propTypes = {
  siteTitle: PropTypes.string
};

MobileHeader.defaultProps = {
  siteTitle: ``
};
export default MobileHeader;

const MobileNav = styled.div`
  display: block !important;
  .main-tab {
    margin-left: -12px !important;
  }
  .icon-fnt {
    font-size: 2rem;
    color: white;
    margin-right: -2.2rem;
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
  .flex{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 576px) {
    display: none !important;
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
