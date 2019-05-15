import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Colocation: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>

            <div className=' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">

                <div className="w-100 mt-5 pt-3 pr-5 text-black">
                    <h1 className=" hfont">
                        CLOUD
                    </h1>
                    <p className="rfont">
                        <b><i>Cloud Your Way!</i></b>
                    </p>
                    <p className="lineHeight-24">
                        Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                        We’ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading
                        expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed
                        approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                        Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate
                        your company’s digital transformation and empower your business to stay ahead of the game.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                        SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it – on-premise or
                        private, public or hybrid cloud.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                        Get no-cost expert guidance.<br />{" "}
                    </p>
                    <p>
                        We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.
                    <br />{" "}
                    </p>
                </div>


                <div className="w-100 pt-5 mt-5">
                    <img height="auto" width="100%"
                        className=""
                        src="img/CloudCommon.png"
                        alt="Cloud"
                    />
                </div>
            </div>


            <div className=" bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12"
            data-aos="fade-up" data-aos-duration="2000">
                <div className="py-3 col-md-2" >
                    <Link to="/publiccloud" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div>
                <div className="py-3 col-md-2" >
                    <Link to="/privatecloud" className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div>
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud" className='text-black bg-white noLine'>
                        <b>Hybrid Cloud</b>
                    </Link>
                </div>
                <div className="py-3 col-md-2" >
                    <Link to="/colocation" id="colocation" className='text-black bg-white noLine'>
                        <b>Colocation</b>
                    </Link>
                </div>
               
                <div className="py-3 col-md-2 nav-item dropdown" >
                    <Link to="/HostedInfrastructure" className='text-black bg-white noLine'>                                           
                        {/* <div className="collapse navbar-collapse nav-item dropdown pr-3 py-3 col-md-2"
                        id="navbarSupportedContent">  */}
                        <a className="nav-link" href="#" id="cloudnav"  data-toggle="dropdown">
                        <b>Cloud&nbsp;Hosted&nbsp;Services</b>
                        </a>
                        <div className="dropdown-menu w17em">
                                    <NavLink className="dropdown-item" to="/CloudManagedBackup">
                                        {" "}
                                       Cloud Managed Backup{" "}
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="/CloudDisasterRecovery">
                                        {" "}
                                        Cloud Disaster Recovery{" "}
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="/HostedInfrastructure">
                                        {" "}
                                        Hosted Infrastructure{" "}
                                    </NavLink>                                    
                                </div>                                                   
                        {/* </div> */}
                    </Link>                                                                  
                </div>

            </div>

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">


                <div className="w-100 ">
                    <img height="auto" width="100%"
                        className=""
                        src="img/Colocation.png"
                        alt="Colocation"
                    />
                </div>

                <div className="w-100 px-5 text-black">
                    <h2 className='mt-3'>Colocation Services</h2><br />{" "}

                    <p className="lineHeight-24">
                        Quickly evaluate and select any secure, highly available, best-in-class data center,
                        anywhere in the world (more than 200+ colocation facilities on five continents).
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                        Colocation services help reduce costs and provide a better roadmap to the cloud by offering
                        facility management and monitoring of client-owned equipment in a secured SYNECTIKS data center environment.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Organizations are exploring cloud solutions to scale capacity according to changing business requirements quickly.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS Colocation Services host and care for your IT equipment in highly efficient and secure data
                    center facilities. As your organization grows, SYNECTIKS can assist in transforming your environment
                    to a traditional, managed cloud or a hybrid environment, and we can manage and monitor that environment for you.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className="w-100 px-5 text-black text-justify">
                            
                <p className="lineHeight-24">
                    You can add data center capacity as you need it &amp; when you need it, without capital outlay, by
                    hosting client-owned and operated hardware in our best-in-class facilities on a "pay-for-what-you-use" basis.
                    <br />{" "}
                </p>
                <p className="lineHeight-24 pt-3">
                    <h3 className="text-center"> Key Benefits:</h3>
                    <br />{" "}                  
                </p>
            </div>
            <div className="d-flex justify-content-around col-lg-12 py-5 text-center flex-col" data-aos="fade-up" data-aos-duration="2000">
                <div className='col-md-3'>
                    <img
                        className="py-3"
                        src="img/Costcontrol.png" width="60%"
                        alt="Costcontrol"
                    />
                    <p>Cost Control</p>
                </div>
                <div className='col-md-3'>
                    <img
                        className="   py-3"
                        src="img/ITModern.png" width="75%"
                        alt="IT Modernization"
                    />
                    <p>IT Modernization</p>
                </div>
                <div className='col-md-3'>
                    <img
                        className="   py-3"
                        src="img/Staff.png" width="81%"
                        alt="Staff"
                    />
                    <p>Knowledgeable Staff</p>
                </div>
                <div className='col-md-3'>
                    <img
                        className="   py-3 "
                        src="img/Scale.png" width="89%"
                        alt="Scale"
                    />
                    <p>Scale Up or Down</p>
                </div>
            </div>


            <div className="w-100 px-5 text-black text-justify">
                <p className="lineHeight-24">
                    <NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small></NavLink>to learn more about SYNECTIKS Colocation Services.
                <br />{" "}
                </p>
            </div>
            <div className="container">
        <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
      </div>

        </div>

    );
};

export default Colocation;
