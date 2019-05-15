import * as React from "react";
import "./background.css";
import { Animated } from "react-animated-css";

import Particles from "react-particles-js";
import { Link } from "react-router-dom";


class Background extends React.Component {
  public render() {
    return (
      <div id="particle-js">
      
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                speed: 5,
                out_mode: "out"
              },
              shape: {
                type: ["circle"]
                images: [
                  {
                    src: "img/html.png",
                    height: 20,
                    width: 23
                  },
                  {
                    src: "img/js.png",
                    height: 20,
                    width: 20
                  },
                  {
                    src: "img/jscode.png",
                    height: 20,
                    width: 20
                  },
                  {
                    src: "img/ts.png",
                    height: 20,
                    width: 20
                  },
                  {
                    src: "img/node.png",
                    height: 20,
                    width: 20
                  }
                ]
              },
              color: {
                value: "#CCC"
              },
              size: {
                value: 20,
                random: false,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 10,
                  sync: false
                }
              }
            },
            retina_detect: true
          }}
        /> */}

        <div className="container">
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
            </ol>
            <div className="carousel-inner mr-auto">
              {/* <div className="carousel-item active  justify-content-around ">
                <div className="text-img flex-col">
                  <img height="auto" width="50%"
                    className="w-40 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/oxp.png"
                    alt="First slide"
                  />
                  <div className="animated fadeInLeftBig slow dealy-4s">
                    <h1 className="text-white hfont">
                      SYNECTIKS <br /> OPEN XFORMATION PLATFORM
                    </h1>
                    <p className="text-white rfont">
                      HELPING CUSTOMERS TO <br /> CONSOLIDATE &amp; MODERNIZE <br />{" "}
                      THEIR IT STACK.
                    </p>
                    <p className="text-white sfont">
                      IMPLEMENT AN OUTCOME BASED OPEN PLATFORM THAT INCLUDES{" "}
                      <br /> CONTINUOUS AUDIT, COMPLIANCE, DELIVERY, BILLING,
                      ELASTICITY, RESILIENCE.
                    </p>
                    <p>
                    <Link to="/foundation" className="btn text-violet text-uppercase sliderBtn">learn more</Link>
                    </p>              
                  </div>
                </div>
              </div> */}

              <div className="carousel-item  active justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%" height="auto"
                    className="w-100  text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider1.jpg"
                    alt="Second slide"
                  />
                    <div className="text-center btnLearnmore">
                <div className="text-white">
                <p>
                    <Link to="/foundation" className="btn text-purple text-uppercase sliderBtn">learn more</Link>
                    </p>
                 </div>
                </div>
                   </div>
              </div>
              
{/* ---------------------------- */}
              {/* <div className="carousel-item  justify-content-around ">
                <div className="img-np flex-col">
                  <img width="100%" height="auto"
                    className="w-100 height-38 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider2.png"
                    alt="Second slide"
                  />
                    <div className="text-center btnLearnmore">
                <div className="text-white">
                <p>
                    <Link to="/audit" className="btn text-purple text-uppercase sliderBtn">learn more</Link>
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
                <div className="text-white">
                <p>
                    <Link to="/managedservice" className="btn text-purple text-uppercase sliderBtn">learn more</Link>
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
                <div className="text-white">
                <p>
                    <Link to="/managedservice" className="btn text-purple text-uppercase sliderBtn">learn more</Link>
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
              </div> */}
{/* ------------------------------------------------------------- */}
              {/* <div className="carousel-item  justify-content-around ">
              <div className="text-img flex-col">
                  <img height="auto" width="65%"
                    className="w-70 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/AWS.png"
                    alt="Second slide"
                  />
                  <div className="animated fadeInLeftBig slow dealy-4s">
                  <p className="text-white">
                  <h3>
                  Do you assess your <br /> AWS account security, billing real time?
                  </h3>
                     </p>
                    <h1 className="text-white hfont">
                      SYNECTIKS Enterprise Managed Services
                    </h1>                    
                    <p className="text-white sfont">
                    Automate AWS account security &amp; billing audit{" "}
                      <br /> with SYNECTIKS XFormation audit central.
                    </p>
                    <p>
                    <Link to="/audit" className="btn text-violet text-uppercase sliderBtn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
     */}

              {/* <div className="carousel-item  justify-content-around ">
              <div className="text-img flex-col">
                  <img height="auto" width="50%"
                    className="w-40 text-right animated fadeInRightBig slow dealy-4s"
                    src="img/Slider_4.png"
                    alt="Managed Service slide"
                  />
                  <div className="animated fadeInLeftBig slow dealy-4s">
                  <p className="text-white">
                  <h3>
                  Increase Productivity with
                  </h3>
                     </p>
                    <h1 className="text-white hfont">
                      SYNECTIKS Enterprise Managed Services
                    </h1>
                    <p className="text-white rfont">
                     ACHIEVE MORE IN LESS
                    </p>
                    <p className="text-white sfont">
                     Enhance security with Synectiks realtime audit platform{" "}
                      <br /> 
                     Optimize resources and reduce billing with Synectiks optimizer
                    </p>
                    <p>
                    <Link to="/managedservice" className="btn text-violet text-uppercase sliderBtn">learn more</Link>
                    </p>
                  </div>
                </div>
              </div> */}

          
            </div>
            {/* <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
