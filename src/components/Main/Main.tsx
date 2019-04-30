import * as React from "react";
// import App from '../App';
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import  ScrollAnimation   from 'react-animate-on-scroll';
// import "./background.css";

const fontSize3={
  fontSize : '2vw'
}
export const Main: React.StatelessComponent<{}> = () => {
  return (
    <div  className='bg-lightgrey'>
      {/* <Background /> */}
      <div className="container">
{/* ---------------------- */}
        {/* <div className="row main-card">
          <div className="col-md-12 col-12-lg card-deck">

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/foundation" className="noLine">
              <img
                className="card-img-top"
                src="img/Foundation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Foundation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/transformation" className="noLine">
              <img
                className="card-img-top"
                src="img/Transformation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Transformation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/operations" className="noLine">
              <img
                className="card-img-top"
                src="img/Operation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Operation</h2>
              </div>
              </Link>
            </div> 
          
          </div>
        </div> */}
{/* --------------------- */}
        {/* Background Start */}
       
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="3" />
              <li data-target="#carouselExampleIndicators" data-slide-to="4" />
              <li data-target="#carouselExampleIndicators" data-slide-to="5" />
              <li data-target="#carouselExampleIndicators" data-slide-to="6" />
            </ol>
            <div className="carousel-inner mr-auto">
            </div>

            <div className="carousel-item  active justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%" height=""
                    className="w-100 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider1.jpg"
                    alt="Second slide"
                  />
                    <div className="text-center btnLearnmore">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/foundation" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                </div>
              </div>

{/* Check Learn More */}
              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%" height="auto"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider2.png"
                    alt="Second slide"
                  />
                    <div className="text-center btnLearnmore">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/audit" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>

              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Audit_Central.png"
                    alt="Second slide"
                  />
                  <div className="text-center btnLearnmore ">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/audit" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>

              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider4.png"
                    alt="Fourth slide"
                  />
                  <div className="text-center btnLearnmore ">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/enterprisemanagedservice" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>

              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/CloudBackupSlider.png"
                    alt="Cloud Managed Backup slide"
                  />
                  <div className="text-center btnLearnmore ">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/CloudManagedBackup" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>

              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/CloudDisRecoverySlider.png"
                    alt="Cloud Disaster Recovery slide"
                  />
                  <div className="text-center btnLearnmore ">
                <div className="text-white  animated fadeInRightBig slow dealy-4s">
                <p>
                    <Link to="/CloudDisasterRecovery" className="btn text-white bg-logoblue text-uppercase btnLearn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>

              <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider5.png"
                    alt="Second slide"
                  />            
                   </div>
              </div> 

 {/* Check Learn More */}

</div>
        {/* Background End */}  

        {/* Card Start */}
        <div className="row main-card card-margin" data-aos="fade-up" data-aos-duration="2000">
        
      
        <div className="text-center px-5 py-3 txt " >
        <h4 >ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM</h4>
        </div> 
        {/*<div className="text-center px-5 txt ">
        <h4 >ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM</h4>
         <ScrollAnimation animateIn='fadeIn'>
          <h1>
            React Animate On Scroll
          </h1> 
        </ScrollAnimation>          
        </div> */}
          <div className="col-md-12 col-12-lg card-deck ">

{/* justify-content-around align-items-center  */}
        

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/foundation" className="noLine">
              <img
                className="card-img-top"
                src="img/Foundation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Foundation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/transformation" className="noLine">
              <img
                className="card-img-top"
                src="img/Transformation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Transformation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/operations" className="noLine">
              <img
                className="card-img-top"
                src="img/Operation.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Operation</h2>
              </div>
              </Link>
            </div> 
          
          </div>
        </div> 
        {/* Card Ends */}



    
          {/* <div className="p-2 flex-fill mt-8">
            <img
              src="img/jumbotron.png"
              width="100%"
              alt=""
              className="w-100"
            />            
          </div> */}

        <div className="p-2 flex-fill mt-8">
       
        <div className="d-flex justify-content-around align-items-center flex-col"  data-aos="fade-up" data-aos-duration="2000" >
        {/* <Fade bottom> */}
          <div className="w-40 p-5">
            <img src="img/SDT.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
            <h4 className="font-weight-bold">Software Defined Transformtaion{" "}</h4>
            <p>
            Moving to AWS cloud with Data Center retirement for Motor Industry.
            </p>{" "}
            <Link to="/softwaredefined">
              Learn more <i className="fa fa-arrow-right"/>
            </Link>
          </div>
          {/* </Fade> */}
        </div>
        
        <div className="d-flex flex-row-rev justify-content-around align-items-center  flex-col" data-aos="fade-up" data-aos-duration="2000">        
       
          <div className="w-40 p-5">
            <img src="img/RTM.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center ">
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
        
{/* animated fadeInUp slow dealy-4s  data-aos="zoom-in-up"*/}
        <div className="d-flex justify-content-around align-items-center flex-col" data-aos="fade-up" data-aos-duration="2000">
          <div className="w-40 p-5">
            <img src="img/SM.png" width="100%" alt="" />{" "}
          </div>
          <div className="text-group align-self-center">
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

        </div>

      </div>
    </div>
  );
};

export default Main;
