import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Hybridcloud: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey'>

            <div className=' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify' data-aos="fade-up" data-aos-duration="2000">

            <div className="w-100 mt-5 pt-3 pr-5  text-black">
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
                    <Link to="/publiccloud"  className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/privatecloud"  className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud" id="hybrid" className='text-black bg-white noLine'>
                        <b>Hybrid Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/colocation" className='text-black bg-white noLine'>
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

            <div className='text-center mt-3 lineHeight-24'>
              
            </div>
            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">

            <div className="w-100 ">
                    <img height="auto" width="100%"
                        className=""
                        src="img/HybridCloud.jpg"
                        alt="Hybrid Cloud"
                    />
                </div>

                <div className="w-100 px-5 text-black">

                <h2>Hybrid Cloud</h2>
                <p><b><i>Bridge Your Clouds, Build Your Future!</i></b></p>

                    <p className="lineHeight-24">
                    Enterprises are adopting a hybrid, multi-cloud approach to enable greater flexibility 
                    and application modernization, which include the use of multiple cloud providers like 
                    AWS, Azure or Google Cloud, or traditional on-premises environments.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    A hybrid, multi-cloud management framework will offer operational agility and power to identify, 
                    analyze and respond quickly to changes in these mixed environments.
                    <br />{" "}
                    </p>
                </div>

            </div>


            <div className="container-fluid px-5 py-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="row justify-content-around align-items-center">

                    <div className="card card-hybcld mx-2">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center"><span>Simple</span></div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                            Standardize and automate orchestration workflows and blur the boundaries across hybrid cloud locations.
                            <br />{" "}
                            </p>
                        </div>
                    </div>
                    <div className="card card-hybcld mx-2">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center"><span>Scalable</span></div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                            The pay-as-you-go scalability is ideal for heavy or unpredictable traffic - and can reduce IT costs.
                            <br />{" "}
                            </p>
                        </div>
                    </div>
                    <div className="card card-hybcld mx-2">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center"><span>Secure</span></div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                            When you need enhanced security and ultimate control for business-critical apps and data, incorporate a private cloud.
                            <br />{" "}
                            </p>
                        </div>
                    </div>

                    </div>
                    </div>

            {/* <div className="w-100 px-5 text-black text-justify">
                <p className="lineHeight-24">
                <h3>Simple</h3><br />{" "}
                Standardize and automate orchestration workflows and blur the boundaries across hybrid cloud locations.
                <br />{" "}
                </p>
                <p className="lineHeight-24">
                <h3>Scalable</h3><br />{" "}
                The pay-as-you-go scalability is ideal for heavy or unpredictable traffic - and can reduce IT costs.
                <br />{" "}
                </p>
                <p className="lineHeight-24">
                <h3>Secure</h3><br />{" "}
                When you need enhanced security and ultimate control for business-critical apps and data, incorporate a private cloud.
                <br />{" "}
                </p>
            </div> */}
     
           

            {/* Contact Starts */}
            {/* <div className='py-3 '>
                <h2 className='text-center text-black'>Ask for Demo</h2>
                <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
            </div>

            <div className="px-5 py-3 ">

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;First Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Email" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;City" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Mobile" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Phone" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2 " >
                      
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Contact&nbsp;Source</option>
                            <option value="enterprise">&nbsp;Advertisement</option>
                            <option value="foundation">&nbsp;Customer&nbsp;Event</option>
                            <option value="migration">&nbsp;Employee&nbsp;Referral</option>
                            <option value="operations">&nbsp;Google&nbsp;Adwords</option>
                            <option value="others">&nbsp;Other</option>
                            <option value="optimization">&nbsp;Partner</option>
                            <option value="optimization">&nbsp;Purchased&nbsp;List</option>
                            <option value="optimization">&nbsp;Trade&nbsp;Show</option>
                            <option value="optimization">&nbsp;Webinar</option>
                            <option value="optimization">&nbsp;Website</option>
                        </select>
                    </div>
                    <div className="col-sm-4 p-2" >
                      
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Select&nbsp;Service</option>
                            <option value="enterprise">&nbsp;Enterprise&nbsp;Transformation</option>
                            <option value="foundation">&nbsp;Foundation</option>
                            <option value="migration">&nbsp;Migration&nbsp;&amp;&nbsp;Deployment</option>
                            <option value="operations">&nbsp;Operations</option>
                            <option value="optimization">&nbsp;Optimization</option>
                            <option value="others">&nbsp;Others</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='text-center p-5'>
                <button className='btn menu-bg btnSend'>Submit</button>
            </div> */}
            {/* Contact Ends */}

        </div>

    );
};

export default Hybridcloud;