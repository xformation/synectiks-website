import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

export const Casestudy: React.StatelessComponent<{}> = () => {
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
                    
 <div className="container">
            <div className="d-flex justify-content-around align-items-center mt-5 flex-col animated fadeInUp slow dealy-4s">
          <div className="w-40 p-5">
            <img src="img/SDT.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
              Software Defined Transformtaion{" "}
            </h4>
            <p>
              Moving to AWS cloud with Data Center retirement for Motor Industry.
            </p>{" "}
            <Link to="/softwaredefined">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
        </div>

        <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col animated fadeInUp slow dealy-4s">
          <div className="w-40 p-5">
            <img src="img/RTM.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">Realtime Monitoring </h4>
            <p>
              Highly Scalable extremely customizable realtime monitoring
              platform for a large telco.
            </p>{" "}
            <Link to="/realtime">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
        </div>

            <div className="d-flex justify-content-around align-items-center flex-col animated fadeInUp slow dealy-4s">
                <div className="w-40 p-5">
                    <img src="img/SM.png" width="100%" alt="Img" />{" "}
                </div>
                <div className="text-group">
                    <h4 className="font-weight-bold">Software Migration </h4>
                    <p>
                        Zero downtime, Zero Fault Petabytes storage migration of Largest
                        Financial Sector.
                    </p>{" "}
                    <Link to="/storagemigration">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
                </div>
            </div>

            <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col animated fadeInUp slow dealy-4s">
          <div className="w-40 p-5">
            <img src="img/NetworkDesign.png" width="100%" alt="NetworkDesign" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Network Design{" "}
            </h4>
            <p>
              Complete Network Backbone Design with highest security for retail.
            </p>{" "}
            <Link to="/networkdesign">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center flex-col animated fadeInUp slow dealy-4s">
          <div className="w-40 p-5">
            <img src="img/StorageTier.png" width="100%" alt="StorageTier" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Storage Tier{" "}
            </h4>
            <p>
              Moving Bigdata Workloads to aggregated platform for a large telco.
            </p>{" "}
            <Link to="/storagetier">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
        </div>

        <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col animated fadeInUp slow dealy-4s">
          <div className="w-40 p-5">
            <img src="img/NetworkDesign.png" width="100%" alt="DisasterRecovery" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Disaster Recovery{" "}
            </h4>
            <p>
              Lightweight disaster recovery platform for Indian Defense.
            </p>{" "}
            <Link to="/disasterrecovery">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
        </div>

        </div>

        </div>

    );
};

export default Casestudy;
