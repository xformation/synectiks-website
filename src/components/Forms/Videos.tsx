import * as React from "react";
<<<<<<< HEAD
// // import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";
=======
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691

export const Videos: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <div>
                <img
<<<<<<< HEAD
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

=======
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/Resources.png" width="100%"
                    alt="Card image Resource"
                />
            </div>

            <div>
                <h2 className='text-center'>VIDEOS</h2>
            </div>
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691

            <div className="d-flex justify-content-around flex-col">

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
