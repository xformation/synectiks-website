import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

export const Featured: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <div>
                <img
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/Resources.png" width="100%"
                    alt="Card image Resource"
                />
            </div>

            <div>
                <h2 className='text-center'>FEATURED</h2>
            </div>

            <div className="d-flex justify-content-around align-items-center">
                <div className="w-25 p-5 bg-card-theme">
                    <img src="img/SM.png" width="100%" alt="Img" />{" "}
                </div>
                <div className="text-group">
                    <h4 className="font-weight-bold">Software Migration </h4>
                    <p>
                        Zero downtime, Zero Fault Petabytes storage migration of Largest
                        Financial Sector.
                    </p>{" "}
                    <a href="">
                        Learn more <i className="fa fa-arrow-right" />
                    </a>
                </div>
            </div>

            <div className="d-flex justify-content-around ">

                <div>
                    <div className="p-5">
                        <img src="img/Featured.png" width="100%" alt="Featured" />{" "}

                        <div className="text-group mt-5">
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
                        <img src="img/Featured.png" width="100%" alt="Featured" />{" "}

                        <div className="text-group mt-5">
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
