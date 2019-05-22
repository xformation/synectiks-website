import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

// export const Casestudy: React.StatelessComponent<{}> = () => {
  export class Casestudy extends React.Component<{},{}> {
    constructor(props:any) {
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
                    className="  text-center py-5 mt-5"
                    src="img/Careers.png" width="100%"
                    alt="Resources"
                />
                    <div className="text-center centered ">
                <div className="text-white">
                 <h3>Resources</h3>
                 </div>
                </div>
            </div>

            {/* <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12"
            data-aos="fade-up" data-aos-duration="2000">
            <div className="pb-3 col-sm-4" >
            <Link to="/featured">
                        <button className='btn btnResource bg-logoblue text-white'>Featured</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-4" >
                    <Link to="/casestudy">
                        <button className='btn btnResource bg-logoblue text-white'>Case Studies</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-4" >
                    <Link to="/videos">
                        <button className='btn btnResource bg-logoblue text-white'>Videos</button>
                        </Link>
                    </div>
                    </div> */}
                    
 <div className="container">

 <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">

<div>
    <div className="p-5">
        <img src="img/CS_SoftwareDefinedTransformation.jpg" width="100%" alt="Enterprise-DevOps" />{" "}

        <div className="text-group align-self-center">
              <h4 className="font-weight-bold pt-2">Software Defined Transformtaion{" "}</h4>
              <p>
                Moving to AWS cloud with Data Center retirement for Motor Industry.
            </p>{" "}
              <Link to="/softwaredefined">
                Learn more <i className="fa fa-arrow-right" />
              </Link>
            </div>
    </div>
</div>

<div>
    <div className="p-5">
        <img src="img/CS_Realtime_Monitoring.jpg" width="100%" alt="Enterprise-Transformation" />{" "}

        <div className="text-group align-self-center ">
              <h4 className="font-weight-bold pt-2">Realtime Monitoring </h4>
              <p>
                Highly Scalable extremely customizable realtime monitoring
                platform for a large telco.
            </p>{" "}
              <Link to="/realtime">
                Learn more <i className="fa fa-arrow-right" />
              </Link>
            </div>
    </div>
</div>

<div>
    <div className="p-5">
        <img src="img/CS_Software_Migration.jpg" width="100%" alt="Enterprise-Transformation" />{" "}

        <div className="text-group align-self-center">
              <h4 className="font-weight-bold pt-2">Storage Migration </h4>
              <p>
                Zero downtime, Zero Fault Petabytes storage migration of Largest
                Financial Sector.
            </p>{" "}
              <Link to="/storagemigration">
                Learn more <i className="fa fa-arrow-right" />
              </Link>
            </div>
    </div>
</div>

</div>

<div className="d-flex justify-content-around pt-2 flex-fill mt-3 align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
<div>
<div>
    <div className="p-5">
    <img src="img/CS_NetworkDesign.jpg" width="100%" alt="NetworkDesign" />{" "}

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
</div>
</div>

<div>
    <div className="p-5">
    <img src="img/CS_StorageTier.jpg" width="100%" alt="StorageTier" />{" "}

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
</div>

<div>
    <div className="p-5">
    <img src="img/CS_DisasterRecovery.jpg" width="100%" alt="Disaster Recovery" />{" "}

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

            {/* <div className="d-flex justify-content-around align-items-center mt-5 flex-col  "
            data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center py-5">
            <img src="img/CS_SoftwareDefinedTransformation.jpg" width="75%" alt="Software Defined Transformtaion" />{" "}
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
        </div> */}

        {/* <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col  "
        data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center py-5">
            <img src="img/CS_Realtime_Monitoring.jpg" width="75%" alt="Realtime Monitoring" />{" "}
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
        </div> */}

            {/* <div className="d-flex justify-content-around align-items-center flex-col  "
            data-aos="fade-up" data-aos-duration="2000">
                <div className="text-center py-5">
                    <img src="img/CS_Software_Migration.jpg" width="75%" alt="Software Migration" />{" "}
                </div>
                <div className="text-group">
                    <h4 className="font-weight-bold">Storage Migration </h4>
                    <p>
                        Zero downtime, Zero Fault Petabytes storage migration of Largest
                        Financial Sector.
                    </p>{" "}
                    <Link to="/storagemigration">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
                </div>
            </div> */}

            {/* <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col  "
            data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center py-5">
            <img src="img/CS_NetworkDesign.jpg" width="75%" alt="NetworkDesign" />{" "}
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
        </div> */}

        {/* <div className="d-flex justify-content-around align-items-center flex-col  "
        data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center py-5">
            <img src="img/CS_StorageTier.jpg" width="75%" alt="StorageTier" />{" "}
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
        </div> */}

        {/* <div className="d-flex flex-row-rev justify-content-around align-items-center flex-col  "
        data-aos="fade-up" data-aos-duration="2000">
          <div className="text-center py-5">
            <img src="img/CS_DisasterRecovery.jpg" width="75%" alt="Disaster Recovery" />{" "}
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
        </div> */}

        </div>

        </div>

    );
};
  }
export default Casestudy;
