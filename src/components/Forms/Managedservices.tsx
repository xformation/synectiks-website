import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Managedservices: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey'>

        <div className="w-100 py-5 mt-5" data-aos="fade-up" data-aos-duration="2000">
                <img height="auto" width="100%"
                    className=""
                    src="img/Managedservice.png"
                    alt="Managed Services"
                />
            </div>

            <div className=' text-black w-100  text-white px-5 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                    <p className="w-100  text-black"><h2 className='mt-3'>We are SYNECTIKS Managed Services.</h2></p>
                    <p className="lineHeight-24">
                    Today’s data center and cloud environments are becoming more and more complex. SYNECTIKS provides 
                    the automation, technical expertise, business acumen, and global reach so that you have the resources 
                    you want, when and how you need them. With our SYNECTIKS Managed Services, we help you reduce costs 
                    and gain efficiencies, flexibility and scalability.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Whether you want to optimize your existing infrastructure or fully outsource the management of 
                    your Data Center Operations, our Managed Services are designed to complement your in-house expertise. Whatever 
                    the scope of service you require, as the world’s leading IT services provider, we’re perfectly placed 
                    to deliver the efficiencies you require, along with the full assurance of meeting your security, compliance and performance needs.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    We complement the existing storage infrastructure with a diverse portfolio of solutions to helps 
                    you assess, plan and design a more consolidated, flexible and resilient storage environment. It will 
                    help you to implement, migrate and optimize your IT infrastructure which enables your business to 
                    quickly respond to market changes.
                    <br />{" "}
                    </p>
                    
                </div>
            </div>

            <div className="w-100 px-5  text-black" data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
                    SYNECTIKS offers a full suite of Managed Services capabilities for some of the most demanding 
                    and complex businesses and governments in the world. Our world-class services, include:                   
                    </p>
            </div>
{/* border-grey-2px */}
        <div className="d-flex  p-2 flex-col text-center col-lg-12" data-aos="fade-up" data-aos-duration="2000">          
          <div className="pb-3 col-sm-4  m-1" >
              <div className="w-75  py-3">                       
                  <p><b>Architecture, Design and Deployment</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4  m-1" >
              <div className="w-75  py-3">                       
                  <p><b>Data Center Consolidation Services</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4  m-1" >
              <div className="w-75  py-3">                       
                  <p><b>Data Migration Services</b></p>                                       
              </div>
          </div>

          </div>
          <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12"
          data-aos="fade-up" data-aos-duration="2000">          
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Software Defined Infrastructure Services</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Automation</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Operations &amp; Support Services</b></p>                                       
              </div>
          </div>

          </div>
          <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12"
          data-aos="fade-up" data-aos-duration="2000">          
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Project Management</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Auditing &amp; Monitoring Services</b></p>                                       
              </div>
          </div>
          <div className="pb-3 col-sm-4" >
              <div className="w-75 px-5 py-3">                       
                  <p><b>Managed Security Services</b></p>                                       
              </div>
          </div>

          </div>

          <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
          data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="lineHeight-24 list-tick">
                    <p><b>Benefit of leveraging SYNECTIKS Managed Services:</b>                        
                    </p>                 
                    <ul className="lineHeight-34">
                        <li>&nbsp;Exclusive focus and expertise in storage domain</li>
                        <li>&nbsp;Reduced risk with end-to-end specialists and faster time to market</li>
                        <li>&nbsp;Improved cost efficiencies</li>
                        <li>&nbsp;Business continuity, backup and data protection</li>
                        <li>&nbsp;Data archive to meet relevant compliance and regulatory requirements</li>
                        <li>&nbsp;Data migration services to create flexibility, minimize migratory costs, unplanned downtime and outages</li>
                        <li>&nbsp;Digital capacity to counter scaling business needs through storage modernization</li>
                        <li>&nbsp;24/7×365 support for both global onsite and offshore service delivery model to reduce operation cost</li>
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

export default Managedservices;
