import * as React from "react";
import { NavLink } from "react-router-dom";
import Background from "./Background/Background";
import { Main } from "./Main/Main";



const colorWhite = {
  color: '#ffffff',
  textDecoration: 'none'
};

const float = {
marginLeft: '60em',
marginBottom: '-1em',

};
export const Header: React.StatelessComponent<{}> = () => {
  return (  
    <div>    
      <div className="container">
        <div className="row">     
          <nav
            className="px-6 navbar fixed-top navbar-expand-lg navbar-dark menu-bg w-100"
            id="navbar"
          >   
          
            <div>                        
              <button id="toggler"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span  className="navbar-toggler-icon" />
            </button>
           
            <div className="pb-2 alignRight">
                <NavLink className="navlink navfont" to="/contactus"><small style={colorWhite}>Contact&nbsp;Us&nbsp;&emsp;|</small></NavLink>&emsp;&nbsp;
                  <a className="fa fa-facebook-square" style={colorWhite} href="https://www.facebook.com/synectikscloud/" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-twitter-square" style={colorWhite} href="https://twitter.com/synectiks" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-youtube-play" style={colorWhite} href="https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/featured" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-linkedin-square" style={colorWhite} href="https://www.linkedin.com/company/synectiks/" target="_blank" aria-hidden="true"></a>&nbsp;
            </div>  
<div className="d-flex" >
            <div>
            <a id="logo" className="navbar-brand pt-6" href="/">
              <img className="navbar-icon" src="img/logo.png" alt="logo" />
            </a> 
            </div>

            <div
              className="collapse navbar-collapse mr-l-8"
              id="navbarSupportedContent"
            >                          
              {/* <a className="navbar-brand pt-6" href="/">
              <img className="navbar-icon" src="img/logo.png" alt="logo" />
            </a>     */}

              <ul className="navbar-nav navfont ml-auto text-capitalize pt-6 pl-5">
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown">
                    Enterprise&nbsp;Transformation
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
                      Migration &amp; Optimization{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/microservices">
                      {" "}
                      Microservices&nbsp;Transformation{" "}
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
                  <a
                    className="nav-link"
                    href="#"
                    id="navbardrop1"
                    data-toggle="dropdown" >
                    Cloud&nbsp;Solutions
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
                      Discovery &amp; Assesment{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/automation">
                      {" "}
                      Automation &amp; Monitoring{" "}
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
                  <NavLink className="dropdown-item" to="/featured">
                      {" "}
                      Featured{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/casestudy">
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
              {/* <div className="pb-2">
                <NavLink className="navlink" to="/contactus"><small style={colorWhite}>Contact&nbsp;Us&nbsp;|</small></NavLink>&emsp;&nbsp;
                  <a className="fa fa-facebook-square" style={colorWhite} href="https://www.facebook.com/synectikscloud/" target="_blank" aria-hidden="true"></a>&nbsp;
                  <a className="fa fa-twitter-square" style={colorWhite} href="https://twitter.com/synectiks" target="_blank" aria-hidden="true"></a>&nbsp;
                  <a className="fa fa-youtube-play" style={colorWhite} href="https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/featured" target="_blank" aria-hidden="true"></a>&nbsp;
                  <a className="fa fa-linkedin-square" style={colorWhite} href="https://www.linkedin.com/company/synectiks/" target="_blank" aria-hidden="true"></a>
            </div>  */}

            </div>

            </div>

            </div>

          </nav>
        </div>

      </div>
      {/* <Background /> */}
      {/* <Main /> */}
    </div>
  );
};
