import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Microservicechallenge: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey text-justify '>

            <div className="w-100 py-5 mt-5">
                <img height="auto" width="100%"
                    className=""
                    src="img/MSchallenges.png"
                    alt="Devopsmain Services"
                />
            </div>

            <div className="px-5" data-aos="fade-up" data-aos-duration="2000">


                <h4>
                    Key Challenges of Microservices:
                </h4>

                <div className="d-flex px-5 py-3 flex-col text-center col-lg-12">

                    <div className="p-3 m-1 col-md-4 border-grey-2px text-center" >
                        <div className="w-100 ">
                            <p className="borderbtm-grey-1px"><b>Cultural Challenges</b></p>
                            <p className="list-tick text-left lineHeight-34">
                                <ul><li>&nbsp;You built, you run it</li></ul>
                            </p>
                        </div>
                    </div>

                    <div className="p-3 m-1 col-md-4 border-grey-2px text-center" >
                        <div className="w-100 ">
                            <p className="borderbtm-grey-1px"><b>Architectural Challenges</b></p>
                            <p className="list-tick text-left lineHeight-34">
                                <ul>
                                    <li>&nbsp;Dealing with asynchronicity</li>
                                    <li>&nbsp;Cascading Failures</li>
                                    <li>&nbsp;Discovery and Authentication of Services</li>
                                    <li>&nbsp;Integration Tests</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="p-3 m-1 col-md-4 border-grey-2px text-center" >
                        <div className="w-100 ">
                            <p className="borderbtm-grey-1px"><b>Operational Challenges</b></p>
                            <p className="list-tick text-left lineHeight-34">
                                <ul>
                                    <li>&nbsp;Duplication of processes and tools</li>
                                    <li>&nbsp;Complexity moves from components to interactions</li>
                                    <li>&nbsp;Debugging across components</li>
                                    <li>&nbsp;Deployment</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

             
                {/* <div className="w-40 p-5 text-center">
          <img src="img/Microservice_4.png" width="50%" alt="DevOps Transformation" />{" "}
          <img src="img/Microservice_5.png" width="50%" alt="DevOps Transformation" />{" "}
          <img src="img/Microservice_6.png" width="50%" alt="DevOps Transformation" />{" "}
        </div> */}
                <p className="lineHeight-24">
                    Thankfully, current cloud-based distributed technologies alleviate the burden of managing monolithic applications
                    by providing a platform to develop and deploy on a dime.
            </p>
                <p className="lineHeight-24">
                    Three key Technology Drivers to Address Microservices Challenges:
            </p><br />
                <h4>
                    Hardware Aggregation:
            </h4><br />
                <p className="lineHeight-24">
                    As you refactor one large monolith application into multiple independent services with their own
                    services and data layer, you probably would end up having 25+ services, 50+ databases (Cache, Relational, NoSQL, Graph, Bigtable, Bigdata). Having
                    them to deploy in Discrete Hardware (server by server), the deployment complexity itself will multiply to 50X at least. So, you
                    essentially need to aggregate the hardware, say you aggregate your Compute/Network/Storage so that it looks
                    like ONE big unit with combined capacity and you keep deploying your services &amp; databases inside that aggregated
                    cluster transparent of underlying Compute/Network/Storage. Thankfully, current cloud-based distributed
                    technologies offer many avenues to aggregate hardware across data centers and geographies.
        </p><br />
                <h4>
                    Containerization &amp; Continuous Delivery:
            </h4><br />
                <p className="lineHeight-24">
                    As you transform monolith to microservices, your big X become 100 small x. If you deploy those 100 x as layered
                    stack in discrete servers in different way, your deployment complexity would multiply to 1000X. To address this
                    challenge, you definitely need to unify the delivery of services, make sure your services are delivered in same
                    way and they are staged to production environment through some stringent quality gates.  To unify the delivery
                    of multiple services in same way, Containerization play a big role and Containers along with Continuous Delivery
                    channel brings down your 1000X complexity to a factor of X.
            </p><br />
                <h4>
                    Operation Automation:
            </h4><br />
                <p className="lineHeight-24">
                    An ideal microservices hosting platform is based on geographically spanned cluster and hardware agnostic. While
                    this platform alleviates the burden of managing many servers, operating systems etc., it brings a new
                    set of operational challenges like debugging, logs tracing, many processes and tools running for single
                    application. The operation management paradigm is shifted from managing Compute/Network/Storage and operating
                    system to managing geographically distributed clusters and services management, their interaction. Thankfully, current
                    cloud-based service discovery and cluster wide operation management technologies offer avenues to aggregate those operational challenges.
        </p><br />
                <p className="lineHeight-24">
                    Essentially in a microservices ecosystem, you will aggregate, extent &amp; automate. You
                    will aggregate your hardware across DC’s and geographies, develop microservices, bigdata, IOT applications
                    based on libraries and reusable services and continue to do cluster and services automation toward
                    running everything in auto pilot mode.
        </p>
                <div className="w-40 p-5 text-center">
                    <img src="img/Microservice_7.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
                <div className="w-40 p-5 text-center">
                    <img src="img/Microservice_8.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
                <p className="lineHeight-24">
                    <h2>One Key Cultural Driver</h2><br/>
                   <p> Simply speaking the microservice world is <br/>
                    “Solve small problems, with small teams with measurable outcomes vs solving 1 big problem with 1 large team.”<br/></p>
                    <p>  Since its small teams being responsible for end to end success, it’s much essential to establish a culture that<br/>
            “You built it, you run it”. Dev &amp; Ops married, become DevOps.<br/> </p>
            <p> It means each employee are skilled to Develop small services and able to maintain its
                    complete lifecycle. That involves a big change in structure &amp; skills of the organization.
                    Most of the microservices adoption will be successful if this cultural transformation is done right,
                    we opine that it contributes 90% towards your success. A typical culturally changed organization will look like as below:</p>
            </p>
                {/* <h4>
          A typical culturally changed organization will look like as below:
            </h4> */}
                <div className="w-40 p-5 text-center">
                    <img src="img/Microservice_9.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>

                {/* how can we help */}
        
            </div>

            <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
                <div className="pb-3 col-sm-3" >
                    <Link to="/microserviceexample">
                        <button className='btn text-white bg-logoblue       btnLearn  '>Example of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicebenefit">
                        <button className='btn text-white bg-logoblue       btnLearn   '>Benefits of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicechallenge">
                        <button className='btn text-white bg-logoblue       btnLearn '>Challenges of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicehelp">
                        <button className='btn text-white bg-logoblue       btnLearn '>How we can help you?</button>
                    </Link>
                </div>
            </div>

            {/* Contact Starts */}
            {/* <div className='py-3' data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-center text-black'>Ask for Demo</h2>
                <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
            </div>

            <div className="px-5 py-3" data-aos="fade-up" data-aos-duration="2000">

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

export default Microservicechallenge;