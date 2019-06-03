import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Microserviceexample: React.StatelessComponent<{}> = () => {
  return (
    <div className='bg-lightgrey text-justify '>
<div className="w-100 py-5 mt-5">
                <img height="auto" width="100%"
                    className=""
                    src="img/Microservicesmain.jpg"
                    alt="Devopsmain Services"
                />
            </div>
      
      <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
      <h2>
          Example:
        </h2>
        <p className="lineHeight-24" >
Say a Travel &amp; Tourism business have major functionalities like Booking/CRM/Finance/Service Desk/Analytics/Recommendation/Ratings/Reviews, some AI/ML... and most of them 
          have some basic features like Session/Preference Config Management/workflows/content (Attachments &amp; Text/wiki content)/search/ session/notification. If we
          maintain a single business application with all those functionalities bundled inside one installer, having 500+ people
          team manage the entire product, you will gradually find that you would face challenges to meet the business
          agility, the entire team will mostly be spent time in regression and emails. It makes a lot of sense to maintain a separate
          small team which is end to end responsible for booking functionality which in turn uses some common services
          like search/config/workflows/content/session/notification) and deliver independent releases.
            </p>
        <p>
          The typical product component diagram will be as follows:
            </p>
        <div className="w-40 p-5 text-center bg-white border-grey-2px">
          <img src="img/Microservice_2.png" width="75%" alt="DevOps Transformation" />{" "}
        </div>
        

      </div>

      <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
            <div className="pb-3 col-sm-3" >
            <Link to="/microserviceexample">
                        <button className='btn text-white bg-logoblue     btnLearn'>Example of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicebenefit">
                        <button className='btn text-white bg-logoblue     btnLearn'>Benefits of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicechallenge">
                        <button className='btn text-white bg-logoblue     btnLearn'>Challenges of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicehelp">
                        <button className='btn text-white bg-logoblue     btnLearn '>How we can help you?</button>
                        </Link>
                    </div>
                    </div>

    </div>


  );
};

export default Microserviceexample;
