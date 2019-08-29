import * as React from "react";
import { Link } from "react-router-dom";

const s1 = {
  left: '-16em'
}

export const Main: React.StatelessComponent<{}> = () => {
  return (
    <div className='bg-lightgrey pt-1'>
      <div className="container">
   
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
 
          <div className="carousel-inner mr-auto anim" role="listbox">
            <div className="carousel-item  active justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%" height=""
                  className="w-100 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider_1.jpg"
                  alt="Synectiks Open Xformation"
                />
                <div className="text-center pt-4 btnLearnmore" style={s1}>
                  <div className="text-white  animated fadeInRightBig slow dealy-2s">
                    <p>
                      <Link to="/foundation" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item  justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%" height="auto"
                  className="w-100 height-38 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider2.jpg"
                  alt="Enterprise Transformation"
                />
                <div className="text-center pt-4 btnLearnmore" style={s1}>
                  <div className="text-white  animated fadeInRightBig slow dealy-2s">
                    <p>
                      <Link to="/devops" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item  justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%"
                  className="w-100 height-38 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider3.jpg"
                  alt="AWS Security"
                />
                <div className="text-center pt-4 btnLearnmore" style={s1}>
                  <div className="text-white  animated fadeInRightBig slow dealy-2s">
                    <p>
                      <Link to="/audit" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item  justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%"
                  className="w-100 height-38 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider4.jpg"
                  alt="Enterprise Managed Services"
                />
               
                <div className="text-center btnLearnmore pt-4  mt-xl-5 mt-xs-5 mt-2 " style={s1}>
                  <div className="text-white  animated fadeInRightBig slow dealy-2s">
                    <p>
                      <Link to="/enterprisemanagedservice" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item  justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%"
                  className="w-100 height-38 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider5.jpg"
                  alt="Cloud Managed Backup"
                />
                <div className="text-center pt-4 btnLearnmore" style={s1}>
                  <div className="text-white  animated fadeInRightBig slow dealy-2s">
                    <p>
                      <Link to="/CloudManagedBackup" className="btn text-white bg-yellow text-uppercase btnLearn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item  justify-content-around ">
              <div className="img-np flex-col pb-0">
                <img width="100%"
                  className="w-100 height-38 text-right animated fadeInRightBig slow dealy-2s"
                  src="img/Slider6.jpg"
                  alt="Why Synectiks"
                />
              </div>
            </div>
          </div>

          <div>
            <a className="left carousel-control carsCtrl carsCtrlLt" href="#carouselExampleIndicators" data-slide="prev">
              <span className="fa fa-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control carsCtrl carsCtrlRt" href="#carouselExampleIndicators" data-slide="next">
              <span className="fa fa-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div>
          <div className="text-center w-100 mb-2">
            <h4 className="mb-1 py-1 stripfont bg-logoblue text-white">ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM</h4>
          </div>
          </div>


        </div>

        <div className=" main-card card-margin" >
          
          <div className="text-center w-100 py-5 mt-1 txt mt-card ">
            <h3 className=""><b>Outcome-based Solution Offerings</b></h3>
          </div>
          
          <div className="col-md-12   card-deck ">
           <div className="card btn col-md-4 card-shadow mx-3 pt-3">
              <Link to="/foundation" className="noLine">
                <img
                  className="card-img-top"
                  src="img/OpenPlatform.png"
                  alt="Foundation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Open Platform</h2>
                </div>
              </Link>
            </div>

            <div className="card btn col-md-4 card-shadow mx-3 pt-3">
              <Link to="/transformation" className="noLine">
                <img
                  className="card-img-top"
                  src="img/Transformation.png"
                  alt="Transformation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Transformation</h2>
                </div>
              </Link>
            </div>

            <div className="card btn col-md-4 card-shadow mx-3 pt-3">
              <Link to="/operations" className="noLine">
                <img
                  className="card-img-top"
                  src="img/Solutions.png"
                  alt="Operation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Solutions</h2>
                </div>
              </Link>
            </div>

          </div>
        </div>
        {/* Card Ends */}

        <div className="pt-5 flex-fill mt-8">
          <img
            src="img/PoweredBySynectiks.png"
            width="100%"
            alt=""
            className="w-100"
          />
                <div className="text-center text-white pt-4 ">
                    <p>
                      <Link to="/foundation" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                </div>
        </div>
        
        <div className="text-center w-100 pt-5 mt-1 txt mt-card ">
            <h3 className=""><b>Success Stories</b></h3>
          </div>

        <div className="d-flex justify-content-around pt-2 flex-fill mt-2 align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
          <Link to="/softwaredefined" className="noLine w-75">
            <div className="p-3">
              <div className="border-grey-2px cs_boxshadow">
              <div className="img_zoom">
                <img src="img/CS_SoftwareDefinedTransformation.jpg" width="100%" alt="Enterprise-DevOps" />{" "}
                </div>
                <div className="text-group p-3 align-self-center">
                  <h4 className="font-weight-bold pt-2 text-black">Software Defined Transformation{" "}</h4>
                  <p className="text-black">
                    Moving to AWS cloud with Data Center retirement for Motor Industry.
                  </p>{" "}
                  Learn more <i className="fa fa-arrow-right" />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/realtime" className="noLine w-75">
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
          <Link to="/storagemigration" className="noLine w-75">
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
        <Link to="/networkdesign" className="noLine w-75">
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
          <Link to="/storagetier" className="noLine w-75">
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
          <Link to="/disasterrecovery" className="noLine w-75">
          <div className="p-3">
            <div className="border-grey-2px cs_boxshadow">
            <div className="img_zoom">
              <img  src="img/CS_DisasterRecovery.jpg" width="100%" alt="Disaster Recovery" />{" "}
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


        {/* Seg1 */}
        {/* <div className="container-fluid px-5 py-3" data-aos="fade-up" data-aos-duration="2000">
            <div className="d-flex flex-fill flex-col justify-content-around align-items-center">
            <Link to="/foundation" className="noLine p-2">
              <div className="card card-success mx-2 my-3 cs_boxshadow">
                <div className="text-center p-3">
                  <img src="img/OpenPlatform.png" width="100%" alt="Open Platform" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black text-uppercase">
                  Open Platform{" "}
                  </h4>
                </div>
              </div>
            </Link>
            <Link to="/transformation" className="noLine p-2">
              <div className="card card-success mx-2 my-3 cs_boxshadow">
                <div className="text-center p-3">
                  <img src="img/Transformation.png" width="100%" alt="Transformation" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black text-uppercase">
                  Transformation{" "}
                  </h4>
                </div>
              </div>
            </Link>
            <Link to="/operations" className="noLine p-2">
              <div className="card card-success mx-2 my-3 cs_boxshadow">
                <div className="text-center p-3">
                  <img src="img/Solutions.png" width="100%" alt="Solutions" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black text-uppercase">
                  Solutions{" "}
                  </h4>
                </div>
              </div>
            </Link>
                    </div>
                </div> */}

        {/* Seg1 End */}

        {/*  */}
        
        {/* <div className="container-fluid px-5 py-3" data-aos="fade-up" data-aos-duration="2000">
            <div className="row justify-content-around align-items-center">
            <Link to="/networkdesign" className="noLine">
              <div className="card card-success mx-2 my-3  border-grey-2px cs_boxshadow">
                <div className="img_zoom">
                  <img src="img/CS_NetworkDesign.jpg" width="100%" alt="NetworkDesign" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black">
                  Network Design{" "}
                  </h4>
                  <p className="text-black">
                  Complete Network Backbone Design with highest security for retail.
                </p>{" "}
                  Learn more <i className="fa fa-arrow-right" />
                </div>
              </div>
            </Link>
            <Link to="/storagetier" className="noLine">
              <div className="card card-success mx-2 my-3  border-grey-2px cs_boxshadow">
                <div className="img_zoom">
                  <img src="img/CS_StorageTier.jpg" width="100%" alt="StorageTier" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black">
                  Storage Tier{" "}
                  </h4>
                  <p className="text-black">
                  Moving Bigdata Workloads to aggregated platform for a large telco.
                </p>{" "}
                  Learn more <i className="fa fa-arrow-right" />
                </div>
              </div>
            </Link>
            <Link to="/disasterrecovery" className="noLine">
              <div className="card card-success mx-2 my-3  border-grey-2px cs_boxshadow">
                <div className="img_zoom">
                  <img src="img/CS_DisasterRecovery.jpg" width="100%" alt="Disaster Recovery" />{" "}
                </div>
                <div className="text-group card-body p-3 align-self-center">
                  <h4 className="font-weight-bold text-black">
                    Disaster Recovery{" "}
                  </h4>
                  <p className="text-black">
                    Lightweight disaster recovery platform for Indian Defense.
                </p>{" "}
                  Learn more <i className="fa fa-arrow-right" />
                </div>
              </div>
            </Link>
                    </div>
                </div> */}

        {/*  */}

      </div>
    </div>
  );
};

export default Main;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 