import * as React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Background from "./Background/Background";
import { Main } from "./Main/Main";

const colorBlack = {
  color: '#000000',
  textDecoration: 'none'
};
const togglerBg = {
  backgroundColor: '#007cc2',
=======
import Background from "./Background/Background";
import { Main } from "./Main/Main";

const colorWhite = {
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
  color: '#ffffff',
  textDecoration: 'none'
};

<<<<<<< HEAD
=======
const float = {
marginLeft: '60em',
marginBottom: '-1em',
};

>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
export const Header: React.StatelessComponent<{}> = () => {
  return (  
    <div>    
      <div className="container">
        <div className="row">     
          <nav
<<<<<<< HEAD
            className="px-5 navbar fixed-top navbar-expand-lg navbar-dark menu-bg-white box-shadow w-100"
            id="navbar">     

            <div >      
              <div className="w-100 ">
              <button id="toggler" style={togglerBg}
=======
            className="px-5 navbar fixed-top navbar-expand-lg navbar-dark menu-bg w-100"
            id="navbar"
          >   
          
            <div className="w-100">                        
              <button id="toggler"
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                className="navbar-toggler navbar-toggler-right collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span  className="navbar-toggler-icon"/>
<<<<<<< HEAD
               <span className=" my-1 mx-2 close ">X</span>       
            </button>
            </div>           
           
            <div className="pb-2 alignRight pr-2">
                <NavLink className="navlink navfont noLine" style={colorBlack} to="/contactus"><small>Contact&nbsp;Us&nbsp;&emsp;|</small></NavLink>&emsp;&nbsp;
                  {/* <a className="fa fa-facebook-square"  href="https://www.facebook.com/synectikscloud/" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp; */}
                  {/* <a className="fa fa-twitter-square"   href="https://twitter.com/synectiks" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp; */}
                  {/* <a className="fa fa-youtube-play"  href="https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/featured" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp; */}
                  <a className="fa fa-linkedin-square"  href="https://www.linkedin.com/company/synectiks/" target="_blank" aria-hidden="true"></a>&nbsp;
            </div> 

       
          
            <div className="d-flex navList" >
            <div>
            <a id="logo" className="navbar-brand pt-6" href="/">
            <img className="navbar-icon" src="img/synectiks-logo.png" alt="logo" />
=======
               <span className=" my-1 mx-2 close text-white">X</span>       
            </button>
           
            <div className="pb-2 alignRight pr-1">
                <NavLink className="navlink navfont" to="/contactus"><small style={colorWhite}>Contact&nbsp;Us&nbsp;&emsp;|</small></NavLink>&emsp;&nbsp;
                  <a className="fa fa-facebook-square" style={colorWhite} href="https://www.facebook.com/synectikscloud/" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-twitter-square" style={colorWhite} href="https://twitter.com/synectiks" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-youtube-play" style={colorWhite} href="https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/featured" target="_blank" aria-hidden="true"></a>&nbsp;&nbsp;
                  <a className="fa fa-linkedin-square" style={colorWhite} href="https://www.linkedin.com/company/synectiks/" target="_blank" aria-hidden="true"></a>&nbsp;
            </div>  

            <div className="d-flex navList" >
            <div>
            <a id="logo" className="navbar-brand pt-6" href="/">
            <img className="navbar-icon" src="img/logo.png" alt="logo" />
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
            </a> 
            </div>

            <div
<<<<<<< HEAD
              className="collapse navbar-collapse pr-5 ml-15"
=======
              className="collapse navbar-collapse pr-3"
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
              id="navbarSupportedContent"
            >                          
          
              <ul className="navbar-nav navfont ml-auto text-capitalize pt-6">
<<<<<<< HEAD
                <li className="nav-item dropdown  " >
                  <a className="nav-link px-3"     
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown" >
                  
                    Transformation
=======
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown">
                    Enterprise&nbsp;Transformation
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                </a>
                  <div className="dropdown-menu w17em">
                    <NavLink className="dropdown-item" to="/devops">
                      {" "}
                      DevOps Transformation{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Foundation{" "}
                    </NavLink>
<<<<<<< HEAD
                    <NavLink className="dropdown-item" to="/migrations">
                      {" "}
                      Migrations &amp; Optimization{" "}
=======
                    <NavLink className="dropdown-item" to="/migration">
                      {" "}
                      Migration &amp; Optimization{" "}
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                    </NavLink>
                    <NavLink className="dropdown-item" to="/microservices">
                      {" "}
                      Microservices&nbsp;Transformation{" "}
                    </NavLink>
                  </div>
                </li>
<<<<<<< HEAD
                {/* <li className="nav-item dropdown">
=======
                <li className="nav-item dropdown">
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                  <a
                    className="nav-link"
                    href="#"
                    id="navbardrop2"
                    data-toggle="dropdown" >
                    SaaS
                   </a>
                  <div className="dropdown-menu w17em">
                    <NavLink className="dropdown-item" to="/universitymanagement">
                      {" "}
<<<<<<< HEAD
                      Education Management System{" "}
=======
                      University Management System{" "}
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                    </NavLink>
                    <NavLink className="dropdown-item" to="/projectmanagement">
                      {" "}
                      Project Management System{" "}
                    </NavLink>
                  </div>
<<<<<<< HEAD
                </li> */}
                <li className="nav-item dropdown  ">
                  <a
                    className="nav-link px-3" 
                    href="#"
                    id="navbardrop1"
                    data-toggle="dropdown" >
                  
                    Cloud
                  </a>
                  <div className="dropdown-menu w17em">
                  <NavLink className="dropdown-item" to="/publiccloud">
                      {" "}
                      Public&nbsp;Cloud{" "}                      
                    </NavLink>
                    <NavLink className="dropdown-item" to="/privatecloud">
                      {" "}
                      Private&nbsp;Cloud{" "}                      
                    </NavLink>
                    <NavLink className="dropdown-item" to="/hybridcloud">
                      {" "}
                      Hybrid&nbsp;Cloud{" "}                      
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/synectikscloud">
                      {" "}
                      SYNECTIKS Cloud{" "}
                    </NavLink> */}
                    {/* <NavLink className="dropdown-item" to="/managedcontainer">
                      {" "}
                     Managed Container Platform{" "}
                    </NavLink> */}
                    <NavLink className="dropdown-item" to="/colocation">
                      {" "}
                      Colocation{" "}                      
                    </NavLink>
                    <NavLink className="dropdown-item" to="/HostedInfrastructure">
                      {" "}
                     Cloud Hosted Services{" "}                     
=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                    </NavLink>
                  </div>
                </li>
                
<<<<<<< HEAD
                <li className="nav-item dropdown  ">
                  <a className="nav-link px-3" 
                    href="#"
                    id="navbardrop3"
                    data-toggle="dropdown">
                    
                    Services
                  </a>
                  <div className="dropdown-menu w17em">
                  <NavLink className="dropdown-item" to="/applicationservices">
                      {" "}
                      Application Services{" "}
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/automation">
                      {" "}
                      Automation &amp; Monitoring{" "}
                    </NavLink> */}
                    {/* <NavLink className="dropdown-item" to="/discovery">
                      {" "}
                      Discovery &amp; Assesment{" "}
                    </NavLink> */}
=======
                <li className="nav-item dropdown">
                  <a className="nav-link"
                    href="#"
                    id="navbardrop3"
                    data-toggle="dropdown">
                    Services
                  </a>
                  <div className="dropdown-menu w17em">
                    <NavLink className="dropdown-item" to="/migrationservices">
                      {" "}
                      Migration Services{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/applicationdevelopment">
                      {" "}
                      Application Development{" "}
                    </NavLink>
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                    <NavLink className="dropdown-item" to="/managedservices">
                      {" "}
                      Managed Services{" "}
                    </NavLink>
<<<<<<< HEAD
                    <NavLink className="dropdown-item" to="/networkservices">
                      {" "}
                      Network Services{" "}
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/managedservices">
                      {" "}
                     Storage&nbsp;as a Service{" "}
                    </NavLink> */}

                    {/* <NavLink className="dropdown-item" to="/migrationservices">
                      {" "}
                      Migration Services{" "}
                    </NavLink>
                    */}
              
                  
                    
                  </div>
                </li>
                
            
                    <li className="nav-item dropdown">
                <a className="nav-link px-3" 
=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
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
<<<<<<< HEAD
                
                <li className="nav-item dropdown  ">
                  <a className="nav-link px-3"
=======
                <li className="nav-item dropdown">
                  <a className="nav-link"
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                    href="#"
                    id="navbardrop5"
                    data-toggle="dropdown"
                    >
<<<<<<< HEAD
                 Company
=======
                  Company
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
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
<<<<<<< HEAD
                    {/* <NavLink className="dropdown-item" to="/partners">
                      {" "}
                      Partners{" "}
                    </NavLink> */}
=======
                    <NavLink className="dropdown-item" to="/partners">
                      {" "}
                      Partners{" "}
                    </NavLink>
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                  </div>

                </li>                                
              </ul>          
            </div>
<<<<<<< HEAD
      
         
            </div>

          

            </div>
            <div>
            <div className="btn btn-demo noLine">
            <Link to="/askfordemo" className="noLine text-white">Ask For Demo</Link>
          </div>
          </div>
            

          </nav>

         
=======

            </div>

            </div>

          </nav>
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
        </div>

      </div>
      {/* <Background /> */}
      {/* <Main /> */}
    </div>
  );
};
