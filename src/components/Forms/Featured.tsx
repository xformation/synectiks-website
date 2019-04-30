import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

export const Featured: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/Careers.png" width="100%"
                    alt="Card image Resource"
                />
                    <div className="text-center centered ">
                <div className="text-white">
                 <h3>Resources</h3>
                 </div>
                </div>
            </div>

            {/* <div>
                <h2 className='text-center'>FEATURED</h2>
            </div> */}
             <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
            <div className="pb-3 col-sm-4" >
            <Link to="/featured">
                        <button className='btn btnResource menu-bg'>Featured</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-4" >
                    <Link to="/casestudy">
                        <button className='btn btnResource menu-bg'>Case Studies</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-4" >
                    <Link to="/videos">
                        <button className='btn btnResource menu-bg'>Videos</button>
                        </Link>
                    </div>
                    </div>

      
            <div className="d-flex justify-content-around  align-items-center flex-col">

                <div>
                    <div className="p-5">
                        <img src="img/Synectiks-Enterprise-DevOps-Strategies.png" width="100%" alt="Featured" />{" "}

                        <div className="text-group mt-3">
                            <p>
                                Zero downtime, Zero Fault Petabytes storage migration of Largest
                                Financial Sector.
                    </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-5">
                        <img src="img/Synectiks-Enterprise-Transformation.png" width="100%" alt="Featured" />{" "}

                        <div className="text-group mt-3">
                            <p>
                                Zero downtime, Zero Fault Petabytes storage migration of Largest
                                Financial Sector.
                    </p>{" "}
                            <a href="">
                                Learn more <i className="fa fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-around align-items-center flex-col">

<div>
    <div className="p-5">
        <img src="img/Synectiks-Microservice-Platform.png" width="100%" alt="Featured" />{" "}

        <div className="text-group mt-3">
            <p>
                Zero downtime, Zero Fault Petabytes storage migration of Largest
                Financial Sector.
    </p>{" "}
            <a href="">
                Learn more <i className="fa fa-arrow-right" />
            </a>
        </div>
    </div>
</div>

<div>
    <div className="p-5">
        <img src="img/Synectiks-Open-Platform.png" width="100%" alt="Featured" />{" "}

        <div className="text-group mt-3">
            <p>
                Zero downtime, Zero Fault Petabytes storage migration of Largest
                Financial Sector.
    </p>{" "}
            <a href="">
                Learn more <i className="fa fa-arrow-right" />
            </a>
        </div>
    </div>
</div>

</div>


        </div>

    );
};

export default Featured;
