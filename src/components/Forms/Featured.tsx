import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

export const Featured: React.StatelessComponent<{}> = () => {
    return (
        <div className="bg-lightgrey">
            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/Careers.png" width="100%"
                    alt="Resources"
                />
                <div className="text-center centered ">
                    <div className="text-white">
                        <h3>Resources</h3>
                    </div>
                </div>
            </div>


            <div className="container">
            <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
<div>
    <div className="p-5">
        <img src="img/FeDevOps-Strategies.png" width="100%" alt="Enterprise-DevOps" />{" "}

        <div className="text-group align-self-center">
              <h6 className="font-weight-bold pt-2">Discover the business value of Synectiks Open Xformation Platform and
                            how it optimizes Enterprise DevOps Strategies.{" "}</h6>
              {/* <p>
              Synectiks is one of very few technology company who delivers managed services on advanced technologies backed by an open xformation platform
                            that accelerates your transformation journey @50% time &amp; cost.
            </p>{" "} */}
              <a href="doc/Synectiks-Enterprise-DevOps-Strategies.pdf" target="_blank">
                Learn more <i className="fa fa-arrow-right" />
              </a>
            </div>
    </div>
</div>

<div>
    <div className="p-5">
        <img src="img/FeEnterprise-Transformation.png" width="100%" alt="Enterprise-Transformation" />{" "}

        <div className="text-group align-self-center ">
              <h6 className="font-weight-bold pt-2"> Discover how Synectiks open products based service delivery
                            approach creating significant differences in service sector. </h6>
              {/* <p>
              To maintain competitive edge in a highly dynamic market, business need
                            to re-imagine the customer experience in lower economics. Synectiks managed
                            services backed by open products &amp; tools , coupled with specialized
                            resources can accelerate any transformation project @50% time &amp; cost.
            </p>{" "} */}
              <a href="doc/Synectiks-Enterprise-Transformation.pdf" target="_blank">
                Learn more <i className="fa fa-arrow-right" />
                </a>
            </div>
    </div>
</div>



</div>

<div className="container">
            <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
            <div>
    <div className="p-5">
        <img src="img/FeMicroservice-Platform.png" width="100%" alt="Enterprise-Transformation" />{" "}

        <div className="text-group align-self-center">
              <h6 className="font-weight-bold pt-2"> Why to choose Synectiks as your 
              preferred microservices delivery partner. </h6>
              {/* <p>
                Zero downtime, Zero Fault Petabytes storage migration of Largest
                Financial Sector.
            </p>{" "} */}
              <a href="doc/Synectiks-Microservice-Platform.pdf" target="_blank">
                Learn more <i className="fa fa-arrow-right" />
                </a>
            </div>
    </div>
</div>


<div>
    <div className="p-5">
        <img src="img/FeOpen-Platform.png" width="100%" alt="Enterprise-Transformation" />{" "}

        <div className="text-group align-self-center">
              <h6 className="font-weight-bold pt-2">Synectiks Xformation Platform accelerate any transformation project @50% cost &amp; Time.</h6>
              {/* <p>
                Zero downtime, Zero Fault Petabytes storage migration of Largest
                Financial Sector.
            </p>{" "} */}
              <a href="doc/Synectiks-Open-Platform.pdf" target="_blank">
                Learn more <i className="fa fa-arrow-right" />
                </a>
            </div>
    </div>
</div>
</div>
</div>
            {/* <div>
                <h2 className='text-center'>FEATURED</h2>
            </div> */}
            {/* <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
                <div className="pb-3 col-sm-4" >
                    <Link to="/featured">
                        <button className='btn btnResource bg-logoblue text-white'>Featured</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-4" >
                    <Link to="/casestudy">
                        <button className='btn btnResource bg-logoblue text-white'>Case Studies</button>
                    </Link>
                </div>
                <div className="pb-3 col-sm-4" >
                    <Link to="/videos">
                        <button className='btn btnResource bg-logoblue text-white'>Videos</button>
                    </Link>
                </div>
            </div> */}


            {/* <div className="d-flex justify-content-around  align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">

                <div>
                    <div className="p-5">
                        <img src="img/FeDevOps-Strategies.png" width="100%" alt="Enterprise-DevOps" />{" "}

                        <div className="text-group mt-3">
                            <p>
                            Discover the business value of Synectiks Open Xformation Platform and
                            how it optimizes Enterprise DevOps Strategies.
                             </p>{" "}
                            <p>
                            Synectiks is one of very few technology company who delivers managed services on advanced technologies backed by an open xformation platform
                            that accelerates your transformation journey @50% time &amp; cost.
                             </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-5">
                        <img src="img/FeEnterprise-Transformation.png" width="100%" alt="Enterprise-Transformation" />{" "}

                        <div className="text-group mt-3">
                        <p>
                            Discover how Synectiks open products based service delivery
                            approach creating significant differences in service sector.
                    </p>{" "}
                            <p>
                            To maintain competitive edge in a highly dynamic market, business need
                            to re-imagine the customer experience in lower economics. Synectiks managed
                            services backed by open products &amp; tools , coupled with specialized
                            resources can accelerate any transformation project @50% time &amp; cost.
                    </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-around align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">

                <div>
                    <div className="p-5">
                        <img src="img/FeMicroservice-Platform.png" width="100%" alt="Microservice-Platform" />{" "}

                        <div className="text-group mt-3">
                            <p>
                            Why to choose Synectiks as your preferred microservices delivery partner.
                            </p>{" "}
                            <p>
                            Learn how Synectiks can help you to run containerized and serverless 
                            microservices across cloud and geographies.
                            </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-5">
                        <img src="img/FeOpen-Platform.png" width="100%" alt="Open-Platform" />{" "}

                        <div className="text-group mt-3">
                            <p>
                            Learn how Synectiks open xformation platform accelerate any
                            transformation project @50% cost &amp; Time.
                            </p>{" "}
                            <p>
                            Synectiks xformation platform can help with the rapid development and
                            delivery of microservices oriented applications across clouds and
                            geographies, address operational complexity, and the need
                            for monitoring/tracing/resilience.
                            </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

            </div> */}

            </div>

        </div>

    );
};

export default Featured;
