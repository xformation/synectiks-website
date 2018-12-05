import * as React from "react";
import { Link } from "react-router-dom";
// import MapContainer from "./Map";

export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className="d-flex justify-content-around bg-footer p-5 mt-5">
      <div>
        <h5 className="text-white">Synectiks</h5>
        <small className="text-white">
          We are a team of highly qualified and experienced <br /> professionals
          from various fields who are determined <br /> and dedicated to
          delivering world class professional <br /> services to our patrons.
        </small>
      </div>
      <div>
        <h5 className="text-white">Get In Touch</h5>
        <small className="text-white">
          3rd Floor, Plot # 25 & 26, <br /> Survey # 71, Madhapur, <br />{" "}
          Hyderabad, IN 500081 <br /> Office: +91 (40) 4857 4411
        </small>
      </div>
      <div>
        <h5 className="text-white">Map</h5>
        <div className="w-75">
          <img src="img/map.png" width="100%" alt="" />
          {/* <MapContainer /> */}
        </div>
      </div>
    </div>
  );
};
// AIzaSyCdBpR3676ds4Yf9tNeKOJRFZyjGAmzw7A
// google api key
