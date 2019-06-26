import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

// export const Casestudy: React.StatelessComponent<{}> = () => {
export class Casestudy extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="bg-lightgrey">
        <div >
          <img
            className="  text-center pt-5 mt-5"
            src="img/resources.jpg" width="100%"
            alt="Resources"
          />
          {/* <div className="text-center centered ">
            <div className="text-white">
              <h3>Resources</h3>
            </div>
          </div> */}
        </div>

        <div className="container">
          <div className="text-center w-100 pt-4 ">
            <h3 className=""><b>Success Stories</b></h3>
          </div>

          <div className="d-flex justify-content-around pt-1 flex-fill mt-3 align-items-center flex-col">
            <Link to="/softwaredefined" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_SoftwareDefinedTransformation.jpg" width="100%" alt="Enterprise-DevOps" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">Software Defined Transformtaion{" "}</h4>
                    <p className="text-black">
                      Moving to AWS cloud with Data Center retirement for Motor Industry.
                  </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/realtime" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_Realtime_Monitoring.jpg" width="100%" alt="Enterprise-Transformation" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center ">
                    <h4 className="font-weight-bold pt-2 text-black">Realtime Monitoring </h4>
                    <p className="text-black">
                      Highly Scalable extremely customizable realtime monitoring
                      platform for a large telco.
                </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/storagemigration" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_Software_Migration.jpg" width="100%" alt="Enterprise-Transformation" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">Storage Migration </h4>
                    <p className="text-black">
                      Zero downtime, Zero Fault Petabytes storage migration of Largest
                      Financial Sector.
                </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="d-flex justify-content-around pt-2 flex-fill mt-3 pb-3 align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
            <Link to="/networkdesign" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_NetworkDesign.jpg" width="100%" alt="NetworkDesign" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Network Design{" "}
                    </h4>
                    <p className="text-black">
                      Complete Network Backbone Design with highest security for retail.
                </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/storagetier" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_StorageTier.jpg" width="100%" alt="StorageTier" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Storage Tier{" "}
                    </h4>
                    <p className="text-black">
                      Moving Bigdata Workloads to aggregated platform for a large telco.
                </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/disasterrecovery" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src="img/CS_DisasterRecovery.jpg" width="100%" alt="Disaster Recovery" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Disaster Recovery{" "}
                    </h4>
                    <p className="text-black">
                      Lightweight disaster recovery platform for Indian Defense.
                </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>

      </div>

    );
  };
}
export default Casestudy;
