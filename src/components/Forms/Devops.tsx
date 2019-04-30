import * as React from "react";
// // import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const Devops: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>        
           
            {/* <div className='bg-theme mt-3'>
                <h1 className='text-center text-white pt-theme mt-2'>DevOps Transformation</h1>
            </div> */}

            <div className="w-100 py-5 mt-5">
                <img height="auto" width="100%"
                    className=""
                    src="img/Devopsmain.png"
                    alt="Devopsmain Services"
                />
            </div>

            {/* <div>
                <h2 className='text-center py-3'>DevOps Transformation</h2>
            </div> */}
            <div className="px-5 pt-4 text-center"  data-aos="fade-up" data-aos-duration="2000">
                <h4><i>
                Transformation for Todays Digital Business!
                </i></h4>
            </div>
            <div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
            Enterprises looking for modernization of their legacy stack and operate in more fast and competitive way, 
            can use SYNECTIKS - Open Platform to bring the cultural transformation and agility needed for today’s business. 
            Whether it is a new business application or transformation of legacy applications, our open
            platform coupled with our experience and expertise accelerate the project execution @50% time &amp; cost.
            </p>
            <p className="lineHeight-24">
            <i>
            “DevOps is the combination of cultural philosophies, practices, and tools that increases an
             organization’s ability to deliver applications and services at high velocity: evolving and 
             improving products at a faster pace than organizations using traditional software development 
             and infrastructure management processes. This speed enables organizations to better serve their 
             customers and compete more effectively in the market.”
             </i>
            </p>
            </div>
            <div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Technology Transformation:
               </h4>
               <p className="lineHeight-24">
               SYNECTIKS build the most powerful open product that helps customers to provision resources across clouds in 
               complete Software-Defined way and deliver modern Container and FAAS driven workloads on it. 
               The platform takes care of Continuous Delivery, Test Automation, Continuous Security, Continuous Compliance and 
               does Continuous Automation to make sure the workload runs seamlessly with highest security, performance, scalability and availability.
            </p>
               <div className="d-flex justify-content-around align-items-center flex-col">             
          <div className="">
            <img src="img/Devops.png" width="100%" alt="DevOps Transformation" />{" "}
          </div>
          </div>
            <p className="lineHeight-24 pt-3">
            <i>
            “Over 85% of enterprise IT organizations will commit to multi-cloud architectures by 2018, IDC. 
            End User experience, Security, Agility, Flexibility, Consumption Based pricing are most important five priorities for CIO’s today. 
            Synectiks is one of very few technology companies, who delivers managed services on advanced technologies backed by an open 
            xformation platform that accelerates your DevOps transformation journey @50% time &amp; cost.”
            </i>
            </p>
            </div>

            <div className="px-5 py-3"  data-aos="fade-up" data-aos-duration="2000">
                <h4  className="pb-3">
                    Cultural Transformation:
               </h4>
               <div className="text-center">
          <img src="img/Microservice_9.png" width="100%" alt="DevOps Transformation" />{" "}
        </div>
                <p className="lineHeight-24 pt-5">
                <h4>Why Transformation Matter?</h4><br />
                    Competition, new products and continuing pressure to monetize older services severely taxing many
                    businesses driven by legacy applications and infrastructure. To maintain competitive edge in a highly dynamic market, 
                    business need to re-imagine the customer experience in lower economics. 
                    Synectiks xformation platform can help with the rapid development and delivery of microservices oriented applications across clouds and geographies, 
                    address operational complexity, and the need for monitoring/tracing/resilience. Modernize your legacy application and infrastructure with ease and
                    speed with our open platform.
            </p>
            <p>
                    Ensuring that you stay ahead of race and keep disrupting by
                  adopting most modern technologies intelligently and effectively,
                  requires a managed services partner who understand your requirements for:
            </p>
            </div>

            <div className="d-flex  px-5 py-2 flex-col text-center col-lg-12">
                <div className="pb-3 col-sm-4 text-center" >
                    <div className="w-75 ">
                        <img height="auto" width="75%" 
                            className="pb-3"
                            src="img/Devopsspeed.png"
                            alt="First slide"
                        />
                        <p><b>SPEED</b></p>
                        <p className="text-center">
                        Introduction of New products or transforming your existing legacy 
                        monolith applications to microservices faster while maintaining Operational Control and Customer Visibility.        
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4 text-center" >
                    <div className="w-75 ">
                        <img height="auto" width="75%" 
                            className="pb-3"
                            src="img/Devopsscale.png"
                            alt="First slide"
                        />
                        <p><b>SCALE</b></p>
                        <p className="text-center">
                        Grow cost-effectively to meet new organizational and business requirements across the enterprise using a
                        highly scalable architecture that can distribute the workloads across clouds, enables hybrid cloud adoption with 
                        maximum security and highest flexibility.
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4 text-center" >
                    <div className="w-75 ">
                        <img height="auto" width="50%" 
                            className="pb-3"
                            src="img/Devopssecurity.png"
                            alt="First slide"
                        />
                        <p><b>SECURITY</b></p>
                        <p className="text-center">
                        Provision and Manage infrastructure, application services in complete software-defined way with maximum
                        automation so that you never fall into security loopholes. Enables Continuous Audit, Continuous Security/Compliance to have
                        real time checks and visibility on security guidelines.
                    </p>
                    </div>
                </div>

                </div>

            <div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
            <h4>
            Traditional Vs Multi-Cloud, Hybrid System
               </h4>                         
            </div>

            <div className="d-flex px-5 py-3 flex-col text-center col-lg-12">
          
          <div className="p-3 m-1 col-md-6 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Traditional System</b></p>       
                  <p>
                  99% application doesn’t scale, manual configuration, 50% time spent on repeated activities, lack 
                    of flexibility to move &amp; migrate, Vendor locks, absence of real-time monitoring, infinite mails, 90% unused hardware.
              </p>                
              </div>
          </div>

          <div className="p-3 m-1 col-md-6 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Multi-Cloud, Hybrid System</b></p>       
                  <p >
                  SYNECTIKS Xformation platform gives you the flexibility to craft your high performant hybrid cloud 
                  in most secure way. Run your workloads and might as well use some native services in private cloud 
                  space. Our Open Platform helps to orchestrate Container delivery platform in any cloud strategy, be 
                  it Private, Public or Hybrid.
              </p>                
              </div>
          </div>
          </div>
      
            <p className="px-5 pt-3 lineHeight-24"  data-aos="fade-up" data-aos-duration="2000">
               To leverage the lower TCO, performance and scalability, security and compliance, 
               there is a need to operate in complete software-defined way, reduce CAPEX and OPEX significantly, 
               aggregate and optimize resources across clouds to run any workloads in most secure way.
            </p>

<div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
<h4 className="">
            Key Benefits
            </h4>
            </div>

        <div className="d-flex px-5 py-3 flex-col text-center col-lg-12">
          
          <div className="p-3 m-1 col-md-3 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Maximum Flexibility</b></p>       
                  <p>
                  Synectiks Xformation platform coupled with its cross-cloud infrastructure delivers the 
                  maximum flexibility to run/move your high performant workloads across clouds and manage 
                  them through a single pane of glass.
              </p>                
              </div>
          </div>

          <div className="p-3 m-1 col-md-3 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Faster Delivery</b></p>       
                  <p >
                  Synectiks Xformation platform enabled infrastructure and application
                    provisioning is complete software defined manner with regulatory
                    compliant architectures. The existing assets and best practices
                    enable project delivery in weeks than months.
              </p>                
              </div>
          </div>

          <div className="p-3 m-1 col-md-3 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Better Quality</b></p>       
                  <p >
                  Through Synectiks Xformation platform, you can continuously
                    deliver containerized and serverless microservices verified through
                    stringent quality gates that run across clouds and geographies
                    ensuring 100% availability and maximum performance.
              </p>                
              </div>
          </div>

          <div className="p-3 m-1 col-md-3 border-grey-2px text-center" >
              <div className="w-100 ">                       
                  <p className="borderbtm-grey-1px"><b>Lower Costs</b></p>       
                  <p >
                  Everything software-defined and maximum automation ensure lowest TCO. 
                    A successful Digital Modernization project delivers 10X agility, 30X reliability and 10X operational efficiency. 
                    At least 50% TCO reduction due to 80% operations, 50% hardware and 100% license cost savings.
              </p>                
              </div>
          </div>

          </div>



           <div className="px-5 pt-3 lineHeight-24"  data-aos="fade-up" data-aos-duration="2000">                      
            <h4 className="pb-3">
            Where do you find your current DevOps Maturity!
            </h4>
            <div className="text-center pb-3">
            <img src="img/Devops_Maturity.png" width="100%" alt="DevOps Transformation" />{" "}
            </div>
            <p>Want to Asses in Detail?</p>
            <p><NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small></NavLink>to learn more  about SYNECTIKS DevOps Transformation Service.</p>

          </div>
{/*  */}
          {/* <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>npm au
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={this.props.onHide}>Close</Button> */}
        {/* </Modal.Footer>
      </Modal> */} */}
{/*  */}
            <div className="container">
            <div className="d-flex justify-content-around align-items-center mt-5 flex-col">

            </div>
            </div>
        
         
       {/* Contact Starts */}
       {/* <div className='py-3' data-aos="fade-up" data-aos-duration="3000">
       <h2 className='text-center text-black'>Ask for Demo</h2>
       <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
   </div>

   <div className="px-5 py-3" data-aos="fade-up" data-aos-duration="3000">

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

export default Devops;
