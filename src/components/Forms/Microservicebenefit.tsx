import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// export const Microservicebenefit: React.StatelessComponent<{}> = () => {
    export class Microservicebenefit extends React.Component<{},{}> {
        constructor(props:any) {
          super(props);  
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }
    
        render() {   
        return (
        <div className='bg-lightgrey text-justify '>

            <div className="w-100 py-5 mt-5">
                <img height="auto" width="100%"
                    className=""
                    src="img/MSbenefits.png"
                    alt="Devopsmain Services"
                />
            </div>

            <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                    Key Benefits of Microservices
                </h4>
                <div className="d-flex col-lg-12 lineHeight-34 flex-col pt-3">
                    <div className="col-sm-6 list-tick">
                        {/* <p className="list-tick"> */}
                        <ul>
                            <h5>Product Quality:</h5>
                            <li><b>&nbsp;Optimize Scalability</b>: React fluidly with smaller, self-contained components</li>
                            <li><b>&nbsp;Achieve High Quality</b>: Continuously and confidently develop and test</li>
                            <li><b>&nbsp;Maximize Resource Utilization</b>: Utilize containers for efficient infrastructure consumption</li>
                            <li><b>&nbsp;Minimize Downtime</b>: Perform isolated maintenance</li>
                            <li><b>&nbsp;Increase Reuse and Decrease Overhead</b>: Encourage sharing on API driven architecture</li>
                        </ul>
                        {/* </p> */}
                    </div>

                    <div className="col-sm-6 list-tick">
                        {/* <p className=" list-tick"> */}
                        <ul>
                            <h5>Process &amp; Culture:</h5>
                            <li><b>&nbsp;Streamline Feature Development</b>: Sprint faster to keep up with changing needs</li>
                            <li><b>&nbsp;Increase Innovation</b>: Reorganize into domain specific, end-to-end service teams</li>
                            <li><b>&nbsp;Avoid Tool/Expertise Lock-in</b>: Choose the best technique/technology for the specific problem</li>
                            <li><b>&nbsp;Adopt Existing Third-party Tools</b>: Integrate easily into API driven ecosystems</li>
                            <li><b>&nbsp;Grow User Base/Expand Market</b>: Extend capabilities to external parties</li>
                            <li><b>&nbsp;Enable Business Consumption</b>: Solve small problems with measurable outcomes</li>
                        </ul>
                        {/* </p> */}
                    </div>

                </div>
                <div className="w-40 p-5 text-center">
                    <img src="img/Microservice_3.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
                <p className="lineHeight-24">
                    Maintaining monolithic applications often proves challenging because it’s difficult to test and release millions of
                    lines of code for tiny changes (in most cases only a few lines). But migrating to microservices is not as simple as it sounds.
                    It requires a big change management process that often includes new team structures (to say nothing of altering the mindset of the organization!).
                    To support the approach, technology stack must also be upgraded. In the microservices scheme,
                    an application is built with a modular approach, making it scalable and easier to deploy.
                    With the right tools, governance and automation in place, updates come much easier.
            <br />{" "}
                </p>
                <p>
                    While Monolith has complexity in codebase, microservices poses the complexity of interaction between many services.
            </p><br />

            </div>

            <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
                <div className="pb-3 col-sm-3" >
                    <Link to="/microserviceexample">
                        <button className='btn text-white bg-logoblue btnLearn  '>Example of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicebenefit">
                        <button className='btn text-white bg-logoblue btnLearn   '>Benefits of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicechallenge">
                        <button className='btn text-white bg-logoblue btnLearn '>Challenges of Microservices</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-3" >
                    <Link to="/microservicehelp">
                        <button className='btn text-white bg-logoblue btnLearn '>How we can help you?</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};
    }

export default Microservicebenefit;
