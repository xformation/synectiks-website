import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

export const Casestudy: React.StatelessComponent<{}> = () => {
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
                <h2 className='text-center'>CASE STUDIES</h2>
            </div>

            <div className="d-flex justify-content-around align-items-center mt-5">
          <div className="w-25 p-5  ">
            <img src="img/SDT.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
              Software Defined Transformtaion{" "}
            </h4>
            <p>
              Moving to AWS cloud with Data Center retirement for Motor
              Industry.
            </p>{" "}
            <a href="">
              Learn more <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>

        <div className="d-flex flex-row-reverse justify-content-around align-items-center">
          <div className="w-25 p-5  ">
            <img src="img/RTM.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">Realtime Monitoring </h4>
            <p>
              Highly Scalable extremely customizable realtime monitoring
              platform for a large telco.
            </p>{" "}
            <a href="">
              Learn more <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>

            <div className="d-flex justify-content-around align-items-center">
                <div className="w-25 p-5 ">
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

            <div className="d-flex flex-row-reverse justify-content-around align-items-center">
          <div className="w-25 p-5  ">
            <img src="img/NetworkDesign.png" width="100%" alt="NetworkDesign" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Network Design{" "}
            </h4>
            <p>
              Complete Network Backbone Design with highest security for retail.
            </p>{" "}
            <a href="">
              Learn more <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center">
          <div className="w-25 p-5  ">
            <img src="img/StorageTier.png" width="100%" alt="StorageTier" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Storage Tier{" "}
            </h4>
            <p>
              Moving Bigdata Workloads to aggregated platform for a large telco.
            </p>{" "}
            <a href="">
              Learn more <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>

        <div className="d-flex flex-row-reverse justify-content-around align-items-center">
          <div className="w-25 p-5  ">
            <img src="img/NetworkDesign.png" width="100%" alt="DisasterRecovery" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">
            Disaster Recovery{" "}
            </h4>
            <p>
              Lightweight disaster recovery platform for Indian Defense.
            </p>{" "}
            <a href="">
              Learn more <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
        
        </div>

    );
};

export default Casestudy;
