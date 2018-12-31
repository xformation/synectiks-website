import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

export const Videos: React.StatelessComponent<{}> = () => {
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
                <h2 className='text-center'>VIDEOS</h2>
            </div>

            <div className="d-flex justify-content-around ">

                <div>
                    <div className="p-5">
                        <video width="320" height="240" controls>
                            <source src="img/movie.mp4" type="video/mp4" />
                        </video>
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
                        <video width="320" height="240" controls>
                            <source src="img/movie.mp4" type="video/mp4" />
                        </video>
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
                        <video width="320" height="240" controls>
                            <source src="img/movie.mp4" type="video/mp4" />
                        </video>
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

export default Videos;
