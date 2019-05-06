import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const CloudDisasterRecovery: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey'>

<div className='bg-lightgrey  text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify' data-aos="fade-up" data-aos-duration="2000">

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
                    <Link to="/publiccloud" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/privatecloud"  className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud"  className='text-black bg-white noLine'>
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
                        <b id="hosted">Cloud&nbsp;Hosted&nbsp;Services</b>
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

            <div className="d-flex justify-content-around align-items-center text-center flex-col" data-aos="fade-up" data-aos-duration="2000">
                    <div className="w-40 p-5">
                        <img src="img/CloudDisRecoverySlider.png" width="75%" alt="Cloud Disaster Recovery" />{" "}
                    </div>
                </div>  

   
            <div className="w-100 px-5 text-black text-justify" data-aos="fade-up" data-aos-duration="2000">
                <h4 className='my-3'>Protect your enterprise data with recovery capabilities that keep the lights on!</h4>           
            <p className="lineHeight-34 list-tick">                 
            {/* Take a Smarter Approach to Data Protection, Avoid Disruptions to Your Data – and Your Business */}
                <ul >
                    <li>&nbsp;Data integrity for large, enterprise-class applications.</li>
                    <li>&nbsp;Back to business as per our requirements.</li>
                </ul>
            </p>
            </div>

            <div className="w-100 px-5 text-black text-justify" data-aos="fade-up" data-aos-duration="2000">
            <p className='my-3'><h3>Why choose SYNECTIKS?</h3></p>
           
            <p className="lineHeight-34 list-tick">
            We design and build DR solutions according to your unique business needs, offering:
            <br />{" "}
            <ul>
                <li>&nbsp;<b>Customization:</b> We build the solution according to your business continuity needs. With 
                RPO, RTO, Secondary Site Location, Failover, and Failback options, we choose the best solution.
                </li>
                <li>&nbsp;<b>Security:</b> Maintain the safety of your data with our state-of-the-art encryption.
                </li>
                <li>&nbsp;<b>Tiering:</b> Leverage our solutions for optimizing cost – whether it is active-active, active-passive
                </li> 
                <li>&nbsp;<b>Technology:</b> We leverage VMware, and native device replication capabilities to deliver industry-leading capabilities.
                </li>                                  
            </ul>
            </p>
            <p className="lineHeight-24">
                <NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small></NavLink>
                to learn more about SYNECTIKS Disaster Recover as a Service.
            <br />{" "}
            </p>
            </div>
         
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

export default CloudDisasterRecovery;