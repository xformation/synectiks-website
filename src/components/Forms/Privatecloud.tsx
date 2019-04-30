import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Privatecloud: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>

            <div className=' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify'>

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
                        alt="First slide"
                    />
                </div>
            </div>


            <div className=" bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12">
                <div className="py-3 col-md-2" >
                    <Link to="/publiccloud" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div>
                <div className="py-3 col-md-2" >
                    <Link to="/privatecloud" id="private" className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div>
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud" className='text-black bg-white noLine'>
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

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'>

                <div className="w-100">
                    <img height="auto" width="100%"
                        className=""
                        src="img/PrivateCloud.jpg"
                        alt="Private Cloud"
                    />
                </div>

                <div className="w-100  px-5 text-black">
                    <h2>Private Cloud</h2>
                    <p><b><i>Power of the cloud while protecting your enterprise!</i></b></p>
                    <p className="lineHeight-24">
                        SYNECTIKS Cloud Private is a reliable and scalable cloud platform that runs your infrastructure - built
                        on open-source frameworks like Containers, Kubernetes, etc.., with standard services for deployment, monitoring, logging, and security.
                    <br />{" "}
                    </p>
                </div>

            </div>
    
            {/*  */}

<p className="px-5 py-3">
    <b>
    How Private Cloud Helps Your Business:
    </b>
</p>
            <div className="container-fluid px-5">
                <div className="row justify-content-around align-items-center">

                    <div className="card card-pvtcld mx-2 ">
                        <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center"><span>Optimize &amp; Secure</span></div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Securing data is essential in building mission-critical applications. Connecting that data
                                to modern cloud services is also a priority. SYNECTIKS Cloud Private lets you do both with consistency.
                            <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 ">
                        <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center">Harness Powerful Cloud Services</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                For your open-source application runtimes, choose the prescriptive development approach of Cloud
                        Foundry or the more customizable and portable method of Kubernetes Orchestration and Docker Containers.
                <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 ">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">Modernize Your Existing Applications</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Modernize and migrate your applications, build new cloud-based applications, and transform
                        your architecture and infrastructure while moving to a new technology operating model.
                    <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 ">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">Customize Your Resources</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Employ cloud bursting, within a private cloud offering, in the event of spikes in demand.
                        Customize the dedicated compute, storage and networking components to best suit your needs.
                <br />{" "}
                            </p>
                        </div>
                    </div>



                </div>
            </div>
            {/*  */}
      
            <div className="w-100 px-5 pt-5 text-black text-justify">
                <p className="lineHeight-24">
                    Begin your journey with SYNECTIKS Cloud Private.
                <NavLink className="navlink navfont noLine" to="/contactus"><small>&nbsp;Contact&nbsp;Us&nbsp;</small></NavLink>to learn more.
                <br />{" "}
                </p>
            </div>

            <div className=" p-5" >
                <p className="seperator-grey"></p>
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

export default Privatecloud;
