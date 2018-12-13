import * as React from "react";
import { Link } from "react-router-dom";
import Background from "../Background/Background";

export const Main: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Background />
      <div className="container-fluid pl-5">
        <div className="row main-card">
          <div className="col-md-12 col-12-lg card-deck">
            <div className="card card-shadow">
              <img
                className="card-img-top"
                src="img/Foundation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Foundation</h2>
              </div>
            </div>
            <div className="card card-shadow mx-5">
              <img
                className="card-img-top"
                src="img/Transformation.png"
                alt="Card image cap"
              />

              <div className="card-body">
                <h2 className="text-center text-uppercase">Transformation</h2>
              </div>
            </div>
            <div className="card card-shadow">
              <img
                className="card-img-top"
                src="img/Operation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Operation</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-5">
          <div className="p-2 flex-fill">
            <img
              src="img/jumbotron.png"
              width="100%"
              alt=""
              className="w-100"
            />
            <div />
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center mt-5">
          <div className="w-30 p-5 bg-card-theme">
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
          <div className="w-30 p-5 bg-card-theme">
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
          <div className="w-25 p-5 bg-card-theme">
            <img src="img/SM.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
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
      </div>
    </div>
  );
};
