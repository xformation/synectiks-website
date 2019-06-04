import * as React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Background from "./Background/Background";
import { Main } from "./Main/Main";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const colorBlack = {
  color: '#000000',
  textDecoration: 'none'
};
const togglerBg = {
  backgroundColor: '#007cc2',
  color: '#ffffff',
  textDecoration: 'none'
};


{/* <script>
( ' .navbar-nav a' ).on( 'click', 
function () {
	( ' .navbar-nav' ).find( 'li.active' ).removeClass( 'active' )
	( this ).parent( 'li' ).addClass( 'active' )
});
</script> */}

// export const Header: React.StatelessComponent<{}> = () => {
  export class Header extends React.Component<any,any,any>{
    constructor(props:any) {
      super(props);  

      this.state = {
        modal: false,
        fields: {},
        errors: {}
      };
      
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    componentDidMount() {
        window.scrollTo(0, 0)
      }

 render() {
  return (  
    <div>    
      <div className="container">
        <div className="row">     
          <nav
            className="px-5 navbar fixed-top navbar-expand-lg navbar-dark menu-bg-white box-shadow w-100"
            id="navbar">     

            <div >      
              <div className="w-100 ">
              <button id="toggler" style={togglerBg}
                className="navbar-toggler navbar-toggler-right collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span  className="navbar-toggler-icon"/>
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
            </a> 
            </div>

            <div
              className="collapse navbar-collapse pr-5 ml-15"
              id="navbarSupportedContent"
            >                          
          
              <ul className="navbar-nav navfont ml-auto text-capitalize pt-6">
                <li className="nav-item dropdown  " >
                  <a className="nav-link px-4"     
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown" >
                  
                    Transformation
                </a>
                  <div className="dropdown-menu w17em bg-logoblue">
                    <NavLink className="dropdown-item" to="/devops">
                      {" "}
                      DevOps Transformation{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/foundation">
                      {" "}
                      Foundation{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/migrations">
                      {" "}
                      Migrations &amp; Optimization{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/microservices">
                      {" "}
                      Microservices&nbsp;Transformation{" "}
                    </NavLink>
                  </div>
                </li>
                {/* <li className="nav-item dropdown">
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
                      Education Management System{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/projectmanagement">
                      {" "}
                      Project Management System{" "}
                    </NavLink>
                  </div>
                </li> */}
                <li className="nav-item dropdown  ">
                  <a
                    className="nav-link px-4" 
                    href="/HostedInfrastructure"
                    id="navbardrop1"
                    data-toggle="dropdown" >
                    Cloud
                  </a>
                  <div className="dropdown-menu w17em bg-logoblue">

{/*  */}
                  {/* <NavLink className=" dropdown-item" to="/HostedInfrastructure">
                     Cloud Hosted Services{" "} 
                     </NavLink> */}

                     <li className="dropdown-submenu">
                     <NavLink data-toggle="dropdown"  id="submenu" className="dropdown-item dropdown-toggle" to="#">Cloud Hosted Services</NavLink>
                    <ul className="dropdown-submenu menulist">
                      <NavLink className="dropdown-item" to="/HostedInfrastructure">Hosted Infrastructure</NavLink>
                      <NavLink className="dropdown-item" to="/CloudManagedBackup">Cloud Managed Backup</NavLink>
                      <NavLink className="dropdown-item" to="/CloudDisasterRecovery">Cloud Disaster Recovery</NavLink>
                      </ul>
                      </li>
                       {/* <NavLink className="dropdown-item" to="/HostedInfrastructure">
                          Hosted Infrastructure
                      </NavLink> */}

{/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}

{/*  */}
                    <NavLink className="dropdown-item" to="/privatecloud">
                      {" "}
                      Private&nbsp;Cloud{" "}                      
                    </NavLink>
                    <NavLink className="dropdown-item" to="/hybridcloud">
                      {" "}
                      Hybrid&nbsp;Cloud{" "}                      
                    </NavLink>
                    <NavLink className="dropdown-item" to="/publiccloud">
                      {" "}
                      Public&nbsp;Cloud{" "}                      
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
                 
                  </div>
                </li>
                
                <li className="nav-item dropdown  ">
                  <a className="nav-link px-4" 
                    href="#"
                    id="navbardrop3"
                    data-toggle="dropdown">
                    
                    Services
                  </a>
                  <div className="dropdown-menu w17em bg-logoblue">
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
                    <NavLink className="dropdown-item" to="/managedservices">
                      {" "}
                      Managed Services{" "}
                    </NavLink>
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
                <a className="nav-link px-4" 
                    href="#"
                    id="navbardrop4"
                    data-toggle="dropdown">
                    Resources
                  </a>
                  <div className="dropdown-menu bg-logoblue">
                  <NavLink className="dropdown-item" to="/featured">
                      {" "}
                      Featured{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/casestudy">
                      {" "}
                      Success Stories{" "}
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/videos">
                      {" "}
                      Videos{" "}
                    </NavLink> */}
                  </div>
                </li>
                
                <li className="nav-item dropdown  ">
                  <a className="nav-link px-4"
                    href="#"
                    id="navbardrop5"
                    data-toggle="dropdown"
                    >
                 Company
                  </a>
                  <div className="dropdown-menu bg-logoblue">
                    <NavLink className="dropdown-item" to="/aboutus">
                      {" "}
                      About Us{" "}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/careers">
                      {" "}
                      Careers{" "}
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/partners">
                      {" "}
                      Partners{" "}
                    </NavLink> */}
                  </div>

                </li>                                
              </ul>          
            </div>
      
         
            </div>

          

            </div>
            <div>
            <div className="btn btn-demo noLine">
            <Link to="/askfordemo" className="noLine text-white">Ask For Demo</Link>
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
  }

  export default Header;