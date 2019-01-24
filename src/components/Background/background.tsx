import * as React from "react";
import "./background.css";
import { Animated } from "react-animated-css";

import Particles from "react-particles-js";

class Background extends React.Component {
  public render() {
    return (
      <div id="particle-js">
        <Particles
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
                type: ["circle", "polygon", "triangle"]
                // images: [
                //   {
                //     src: "img/html.png",
                //     height: 20,
                //     width: 23
                //   },
                //   {
                //     src: "img/js.png",
                //     height: 20,
                //     width: 20
                //   },
                //   {
                //     src: "img/jscode.png",
                //     height: 20,
                //     width: 20
                //   },
                //   {
                //     src: "img/ts.png",
                //     height: 20,
                //     width: 20
                //   },
                //   {
                //     src: "img/node.png",
                //     height: 20,
                //     width: 20
                //   }
                // ]
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
        />
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
            </ol>
            <div className="carousel-inner mr-auto">
              <div className="carousel-item active  justify-content-around ">
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
                    <a
                      href="../foundation"
                      className="btn text-violet text-uppercase sliderBtn"
                    >
                      learn more
                    </a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item  justify-content-around ">
                <div className="text-img flex-col">
                  <img  width="50%"
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
                    <a
                      href=""
                      className="btn text-violet text-uppercase sliderBtn"
                    >
                      learn more
                    </a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item  justify-content-around ">
                <div className="text-img flex-col">
                  <img width="50%"
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
                    <a
                      href=""
                      className="btn text-violet text-uppercase sliderBtn"
                    >
                      learn more
                    </a>
                    </p>
                  </div>
                </div>
              </div>
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
