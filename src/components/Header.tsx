import * as React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const colorBlack = {
  color: '#000000',
  textDecoration: 'none'
};
const togglerBg = {
  backgroundColor: '#007cc2',
  color: '#ffffff',
  textDecoration: 'none'
};

export class Header extends React.Component<any, any, any>{
  constructor(props: any) {
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

  // refreshPage() {
  //   location.reload();
  //   window.location.reload()   
  // }
  
  // onClick = {this.refreshPage}
  

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
                    <span className="navbar-toggler-icon" />
                    <span className=" my-1 mx-2 close ">X</span>
                  </button>
                </div>

                <div className="pb-2 alignRight pr-2">
                  <NavLink className="navlink navfont noLine button" style={colorBlack}  to="/contactus" ><small>Contact&nbsp;Us&nbsp;&emsp;|</small></NavLink>&emsp;&nbsp;
               <a className="fa fa-linkedin-square" href="https://www.linkedin.com/company/synectiks/" target="_blank" aria-hidden="true"></a>&nbsp;
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
                      <li className="nav-item dropdown" >
                        <a className="nav-link px-4"
                          href="#"
                          id="navbardrop"
                          data-toggle="dropdown" aria-expanded="true">
                          Transformation
                </a>
                        <div className="dropdown-menu w17em bg-logoblue" id="navbaritem"> 
                          <NavLink className="dropdown-item" to="/devops" >
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
                      <li className="nav-item dropdown  ">
                        <a
                          className="nav-link px-4"
                          href="#/HostedInfrastructure"
                          id="navbardrop1"
                          data-toggle="dropdown" >
                          Cloud
                  </a>
                        <div className="dropdown-menu w17em bg-logoblue">
                          <li className="dropdown-submenu dropright">
                            <NavLink className="dropdown-item dropdown-toggle" to="/HostedInfrastructure">Cloud Hosted Services</NavLink>
                            <div className="menulist">
                              <ul className="dropdown-menu bg-logoblue" >
                                <li><NavLink className="dropdown-item" to="/HostedInfrastructure">Hosted Infrastructure</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/CloudManagedBackup">Cloud Managed Backup</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/CloudDisasterRecovery">Cloud Disaster Recovery</NavLink></li>
                              </ul>
                            </div>
                          </li>
                          <NavLink className="dropdown-item" to="/privatecloud" >
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
                          <NavLink className="dropdown-item" to="/managedservices">
                            {" "}
                            Managed Services{" "}
                          </NavLink>
                          <NavLink className="dropdown-item" to="/networkservices">
                            {" "}
                            Network Services{" "}
                          </NavLink>
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
                        </div>
                      </li>
{/* 
                      <li className="nav-item dropdown  ">
                        <a className="nav-link px-4"
                          href="#"
                          id="navbardrop5"
                          data-toggle="dropdown"
                        >
                          Solutions
                  </a>
                        <div className="dropdown-menu bg-logoblue">
                          <NavLink className="dropdown-item" to="/byusecase">
                            {" "}
                            By Use Case{" "}
                          </NavLink>
                          <NavLink className="dropdown-item" to="/careers">
                            {" "}
                            By Industry{" "}
                          </NavLink>
                          <NavLink className="dropdown-item" to="/careers">
                            {" "}
                            By Organization Type{" "}
                          </NavLink>
                        </div>
                      </li>
 */}
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
      </div>
    );
  };
}

export default Header;