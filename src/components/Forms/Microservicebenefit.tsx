import * as React from "react";
import { Link } from "react-router-dom";

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
                    src="img/Microservicesmain.jpg"
                    alt="Devopsmain Services"
                />
            </div>

            <div className="px-5" >
            <div className="pb-3" >
            <Link to="/microservices">
                        <button className='btn text-white bg-logoblue btnLearn'><span className="fa fa-angle-double-left"></span>&nbsp;Back to Microservices</button>
                        </Link>
                    </div>
                    
                <h4>
                    Key Benefits of Microservices
                </h4>
                <div className="d-flex col-lg-12 lineHeight-34 flex-col pt-3">
                    <div className="col-sm-6">
                        <ul>
                            <h5>Product Quality:</h5>
                            <li><b>Optimize Scalability</b>: React fluidly with smaller, self-contained components</li>
                            <li><b>Achieve High Quality</b>: Continuously and confidently develop and test</li>
                            <li><b>Maximize Resource Utilization</b>: Utilize containers for efficient infrastructure consumption</li>
                            <li><b>Minimize Downtime</b>: Perform isolated maintenance</li>
                            <li><b>Increase Reuse and Decrease Overhead</b>: Encourage sharing on API driven architecture</li>
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <ul>
                            <h5>Process &amp; Culture:</h5>
                            <li><b>Streamline Feature Development</b>: Sprint faster to keep up with changing needs</li>
                            <li><b>Increase Innovation</b>: Reorganize into domain specific, end-to-end service teams</li>
                            <li><b>Avoid Tool/Expertise Lock-in</b>: Choose the best technique/technology for the specific problem</li>
                            <li><b>Adopt Existing Third-party Tools</b>: Integrate easily into API driven ecosystems</li>
                            <li><b>Grow User Base/Expand Market</b>: Extend capabilities to external parties</li>
                            <li><b>Enable Business Consumption</b>: Solve small problems with measurable outcomes</li>
                        </ul>
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

            <div className="pb-3 px-5" >
            <Link to="/microservices">
                        <button className='btn text-white bg-logoblue btnLearn'><span className="fa fa-angle-double-left"></span>&nbsp;Back to Microservices</button>
                        </Link>
                    </div>

            {/* <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
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
            </div> */}

        </div>

    );
};
    }

export default Microservicebenefit;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 
