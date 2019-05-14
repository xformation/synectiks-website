import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Networkservices: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey'>

<div className="w-100 py-5 mt-5" >
                <img height="auto" width="100%"
                    className=""
                    src="img/NetworkServices.jpg"
                    alt="Network Services"
                />
            </div>

            <div className=' text-black w-100  text-white px-5 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                    <p className="w-100  text-black"><h2 className='mt-3'>Network Services</h2></p>
                    <p className="lineHeight-24">
                    Networks are the most critical component of an effective enterprise IT environment. Software-defined 
                    environments incorporate flexibility, automation, high availability and open standards into your IT 
                    landscape so you can meet next-generation agility, innovation and application demand in the cloud.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Network services from SYNECTIKS support your network’s growing need for agility, security and 
                    scalability in a multi-vendor, multi-technology environment. We provide straightforward guidance 
                    and extensive knowledge on networking across industries, and we use a lifecycle approach that spans 
                    strategy, assessment, planning, design, implementation and management. Our services range from network 
                    connectivity consulting and integration to managed network services and software-defined networking.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="lineHeight-24 list-tick">
                    <p><b>Services Offered</b>                        
                    </p>                    
                    <ul className="lineHeight-34">
                        <li>&nbsp;<b>Managed Network Services:</b> Improve agility while reducing cost and complexity across all your hybrid cloud, data center, local and hybrid or software-defined wide area networks.</li>
                        <li>&nbsp;<b>Network Connectivity Consulting and Integration:</b>Unify your network and infrastructure, and lay the foundation for your network transformation to adopt cloud and new technologies.</li>
                        <li>&nbsp;<b>Software Defined Networking:</b>Modernize your network so that it can sense traffic and automatically reconfigure the network for new workloads and business conditions in a security-rich manner.</li>                        
                    </ul>
                    </p>

                </div>
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

export default Networkservices;
