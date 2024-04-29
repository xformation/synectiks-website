import React from "react";
import SM from "../../images/case/CS_Software_Migration.jpg";
import RM from "../../images/case/CS_Realtime_Monitoring.jpg";
import SDFT from "../../images/case/CS_SoftwareDefinedTransformation.jpg";
import ND from "../../images/case/CS_NetworkDesign.jpg";
import ST from "../../images/case/CS_StorageTier.jpg";
import DR from "../../images/case/CS_DisasterRecovery.jpg";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const SuccessStories = () => {
  return (
    <div className="d-block w-100 bgWhiteGradient py-4 px-md-5">
      <div className="container-fluid">
        <div className="row">
          <div className="content d-flex flex-column flex-md-row align-items-center">
            <div className="col-sm-12 col-md-3">
              <div className="my-2 my-md-5 caseText">
                <h2 className="mb-2 mb-md-3">Success Stories </h2>
                <a
                  href="https://synectiks.com/casestudy/index.html"
                  className="text-capitalize"
                >
                  View all success stories &gt;
                </a>
              </div>
              <div className="progressnumb">
                <ul
                  className="progress"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <li>01</li>
                  <li className="slider__label sr-only" /> <li>06</li>
                </ul>
              </div>
              <div className="slickbtns mx-4">
                <div className="prevbtn">
                  <MdArrowBack className="fa-2x" />
                </div>
                <div className="nextbtn">
                  <MdArrowForward className="fa-2x" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-9">
              <div className="slider">
                <a href="/software-defined/index.html" className="noLine">
                  <div className="case-studies bshad">
                    <img src={SDFT} alt="Software Defined" />

                    <div className="text-group align-self-center p-2 bgWhite">
                      <h3 className="textColor">
                        Software Defined Transformation
                      </h3>
                      <p className="pr-2 pr-md-5 textColor  mb-1 mb-md-4 mr-0 mr-md-5">
                        AWS Cloud migration for a large motor industry.
                      </p>
                      <a
                        href="/software-defined/index.html"
                        className="noLine"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/realtime/index.html" className="noLine">
                  <div className="case-studies bshad">
                    <img src={RM} alt="Realtime" />{" "}
                    <div className="text-group align-self-center p-2 bgWhite">
                      <h3 className="textColor">Realtime Monitoring</h3>
                      <p className="pr-2 pr-md-5 textColor  mb-1 mb-md-4">
                        Highly Scalable extremely customizable realtime
                        monitoring platform.
                      </p>
                      <a href="/realtime/index.html" className="noLine">
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a
                  href="/storage-migration/index.html"
                  className="noLine fw300"
                >
                  <div className="case-studies w-450 bshad">
                    <img src={SM} alt="Storage Migration" />{" "}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Storage Migration</h3>
                      <p className="pr-1 textColor  mb-1 mb-md-4">
                        Petabytes of storage migration for a large financial
                        company with zero down time.
                      </p>{" "}
                      <a
                        href="/storage-migration/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/network-design/index.html" className="noLine">
                  <div className="case-studies bshad">
                    <img src={ND} alt="Network Design" />{" "}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Network Design</h3>
                      <p className="pr-5 textColor  mb-1 mb-md-4">
                        Complete network Backbone design with highest security
                        for retail.
                      </p>
                      <a
                        href="/network-design/index.html"
                        className="noLine"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/storage-tier/index.html" className="noLine">
                  <div className="case-studies bshad">
                    <img src={ST} alt="Storage Tier" className="h46" />

                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Storage Tier</h3>
                      <p className="pr-5 textColor  mb-1 mb-md-4">
                        Moving Bigdata workloads to aggregated platform for a
                        large telco.
                      </p>
                      <a
                        href="/storage-tier/index.html"
                        className="noLine"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a
                  href="/disaster-recovery/index.html"
                  className="noLine"
                >
                  <div className="case-studies bshad">
                    <img src={DR} alt="Disaster Recovery" />
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Disaster Recovery</h3>
                      <p className="pr-5 textColor mb-1 mb-md-4">
                        Lightweight disaster recovery platform for indian
                        Defense.
                      </p>
                      <a
                        href="/disaster-recovery/index.html"
                        className="noLine"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessStories;
