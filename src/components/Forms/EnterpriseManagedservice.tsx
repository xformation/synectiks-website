import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

// export const EnterpriseManagedservice: React.StatelessComponent<{}> = () => {
    export class EnterpriseManagedservice extends React.Component<{},{}> {
        constructor(props:any) {
          super(props);  
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }
    
        render() { 
    return (
        <div>
            <div>
                <img
                    className="  text-center  "
                    src="img/Managedservices.png" width="100%"
                    alt="Card image Resource"
                />
                <div className="text-center centered p-3 mt-5">
                    <div className="text-white">
                        <h3>Managed&nbsp;Services</h3>
                       
                        <h5>Cutting&nbsp;Edge&nbsp;Capabilities.&nbsp;Significant&nbsp;Cost&nbsp;Benefits.</h5>
                    </div>
                </div>
            </div>

            <div className="p-5 mt-3">
                <p className="lineHeight-24">
                    Our managed services and solutions give you everything you need to ensure success before, during and post-deployment.
                    It’s everything you’d want from a Premier Partner.<br />
                    Your competition never rests, your IT organization is always overwhelmed, leaving your margins and staff under constant pressure.
                    Our Cloud Management Services for your enterprise systems offers deep expertise and economies of scale;
                     freeing more dollars, time and mindshare to innovate with the business and truly deliver value.
                    Let us keep the lights on for you so you can spend your time helping your company keep ahead of the competition!
                    With over 10 years of global Managed Services (MS) experience, Synectiks offers large company
                     performance with the agility, flexibility and personal touch of a small company.
                    Synectiks has time and again satisfied its customers by successfully delivering Managed Services to large customers in financial sector for 10+ years.
                </p>
            </div>


            <div>
                <div className="px-5">
                    <img className="greycard" src="img/ManagedService_1.png" width="100%" alt="Featured" />{" "}
                </div>

            </div>

            <div>
                <p className="p-5 mt-3 lineHeight-24">
                    Our Innovations Lab has value levers and accelerators that help optimize business processes, reduce complexity, measure and realize business benefits and co-innovate with customers.
                    We begin our journey with a no cost 3-day assessment that will demonstrate key benefits that you will achieve with Synectiks as your partner.
                    </p>
            </div>

            <div className="d-flex justify-content-around flex-col pt-3 pb-5 col-lg-12">
                <div className="col-md-4">
                    <ul>
                        <h4>
                            Assessment Optimization
                    </h4>
                        <p>
                            Perform regular security and billing audit to achieve compliance and control your cloud cost
                    </p>
                        <h4>
                            Data Protection
                    </h4>
                        <p>
                            Cloud Backup and DR, scheduled backup and replication in cloud storage
                    </p>
                        <h4>
                            Realtime Monitoring
                    </h4>
                        <p>
                            Monitor Infrastructure, App, Databases, 24*7 Application Support
                    </p>
                    </ul>

                </div>
                    {/* img-np */}
                <div className="col-md-4">
                    <img
                        className="   mx-auto "
                        src="img/ManagedService_2.png" width="100%"
                        alt="Card image Foundation"
                    />
                </div>

                <div className="col-md-4">
                    <ul>
                        <h4>
                            Custom Cloud
                    </h4>
                        <p>
                            Build your custom hybrid cloud compliant to highest standards and performance
                    </p>
                        <h4>
                            Deployment Orchestration
                    </h4>
                        <p>
                            Consistent process model for building and deploying apps with DevOps
                    </p>
                        <h4>
                            Shared Services
                    </h4>
                        <p>
                            Use IAAS,PAAS,SAAS services to rapidly meet your business goals.
                    </p>
                    </ul>

                </div>
            </div>

            <div className="container-fluid pb-5">
                <div className="row justify-content-around align-items-center">

                    <div className="card card-hd mx-3">
                        <div className="w-100 card-bd py-4 text-white bg-maroon text-center">Assessment and Initial Engagement</div>
                        {/* <img className="card-img-top bg-maroon"  alt="Card image cap"></img> */}
                        <div className="card-body">
                            <small className="">
                                <ul className="p12-in-start">
                                    <li>3 days no cost assessment to understand your needs and objectives
                                    </li>
                                    <li>Application of tools to determine current system health and optimization opportunities
                                    </li>
                                    <li>Present best practice comparison, solution effectiveness, risk, mitigation,
                                        improvement options and cost savings
                                    </li>
                                </ul>
                            </small>
                        </div>

                    </div>

                    <div className="card card-hd mx-3">
                        <div className="w-100 card-bd py-4 text-white bg-teal text-center">Scalable COE</div>
                        <div className="card-body">
                            <small className="">       
                            <ul className="p12-in-start">
                                    <li>Establish an engagement model based on ITIL process and global delivery excellence practices
                                    </li>
                                    <li>Access to Devops experts allows you to solve the most challenging of business problems
                                    </li>
                                    <li>Helps develop plans to support your business needs
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>
                    <div className="card card-hd mx-3">
                        <div className="w-100 card-bd py-4 text-white bg-orange text-center">Low Risk Transition in Weeks</div>
                        <div className="card-body">
                            <small className="">
                            <ul className="p12-in-start">
                                    <li>Our propreitary transition methodology follows a 3 phased approach for seamless transition of applications, infrastructure and the organization
                                    </li>
                                    <li>The right mix of co-sourcing is established bringing the least disruption to the business and the fastest transition
                                    </li>
                                    <li>New support processes and ticketing tool are established
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>
                    <div className="card card-hd mx-3">
                        <div className="w-100 card-bd py-4 text-white bg-green text-center">Steady State</div>
                        <div className="card-body">
                            <small className="">
                            <ul className="p12-in-start">
                                    <li>Provide a Hybrid cloud environtment based on the support requirements and SLAs
                                    </li>
                                    <li>Finalize SLA requirements and implement optimized support process
                                    </li>
                                    <li>Jointly review status and progress in Quarterly Review Meetings
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>
                    <div className="card card-hd mx-3">
                        <div className="w-100 card-bd py-4 text-white bg-pink text-center">Co-innovation &amp; Continous Improvement</div>
                        <div className="card-body">
                            <small className="">
                            <ul className="p12-in-start">
                                    <li>Business Value Enablers &amp; Performance Optimizers to integrate IT and business processes
                                    </li>
                                    <li>Periodic innovation sessions to bring thought leadership and implement industry best practices
                                    </li>
                                    <li>Innovate with your business to keep ahead of competition
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    );
};
    }
export default EnterpriseManagedservice;
