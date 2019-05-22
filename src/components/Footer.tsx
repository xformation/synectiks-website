import * as React from "react";
import { Link } from "react-router-dom";
import * as ReactDOM from 'react-dom'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'
// import MapContainer from "./Map";
import { NavLink } from "react-router-dom";

const rootId = 'root'
const root = document.getElementById(rootId)
const someLatLng = {lat: 55.751244, lng: 37.618423}
const cursorGrab ={
  cursor : "none"
}

const mapWidth ={
  width:'100%',
  height:'10em'
}

export const googleMapURL = 'https://maps.google.com/maps/api/js?key=AIzaSyDzf6Gmc9u7rr2JHijOERAmC_j0gWYtR2c'

export const Footer: React.StatelessComponent<{}> = () => {
  return (
//  target="_blank"
    <div>      
      <div className="text-center fixed-bottom bg-grey content ">
        <p className="mb-1 pt-2">
        SYNECTIKS uses proprietary and third-party cookies. By using our sites, you agree to our cookie policy.&nbsp;
        <NavLink className="navlink navfont noLine" to="/privacypolicy" ><small>View&nbsp;Policy&nbsp;</small></NavLink>
        <button className='btn bg-logoblue text-white btnSend'>Agree</button>
        </p>
      </div>
      
    <div className="d-flex justify-content-around bg-footer flex-col p-4 col-lg-12">
      <div className="col-md-4 pb2">
        <h5 className="text-white">Synectiks</h5>
        <small className="text-white">
          We are a team of highly qualified and experienced <br /> professionals
          from various fields who are determined <br /> and dedicated to
          delivering world class professional <br /> services to our patrons.
        </small>
      </div>
      <div className="col-md-3 ftr pb2">
        <h5 className="text-white">Get In Touch</h5>
        <small className="text-white">
        300 Alexander Park Drive, Suite 215, <br /> Princeton, NJ 08540 <br />{" "}
        Sales: +1 (609) 608-0429 X 112 <br />  Office: +1 (609) 608-0429
        </small>
      </div>
      <div className="col-md-5 pb2">
        {/* <h5 className="text-white">Map</h5> */}
        <div className="w-100">       
        <iframe style={mapWidth}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0341342304914!2d-74.63367698460706!3d40.31939997937661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e0d086f7514f%3A0x8f04ec41f160a353!2s300+Alexander+Park+Dr+%23215%2C+Princeton%2C+NJ+08540%2C+USA!5e0!3m2!1sen!2sin!4v1526621065289"
        frameBorder='0'        
        ></iframe>
        <div id="map"></div>
          {/* <img src="img/map.png" width="100%" alt="Map" /> */}
          {/* <MapContainer /> */}
        </div>
      </div>
    </div>

    </div>
  );
};
// AIzaSyCdBpR3676ds4Yf9tNeKOJRFZyjGAmzw7A
// google api key

    // function initMap() {
    //   // The location of Uluru
    //   var uluru = {lat: -25.344, lng: 131.036};
    //   // The map, centered at Uluru
    //   var map = new google.maps.Map(
    //       document.getElementById('map'), {zoom: 4, center: uluru});
    //   // The marker, positioned at Uluru
    //   var marker = new google.maps.Marker({position: uluru, map: map});
    // }

    if (root) {
      const MyGoogleMap = withScriptjs(withGoogleMap(() =>
          <GoogleMap
              defaultCenter={someLatLng}
              defaultZoom={16}
              options={{disableDefaultUI: true}}>
          </GoogleMap>))
      const loadingElement = <div/>
      const containerElement = <div style={{height: '100vh'}}/>
      const mapElement = <div style={{height: '100vh'}}/>
      const map = <MyGoogleMap loadingElement={loadingElement}
                               containerElement={containerElement}
                               googleMapURL={googleMapURL}
                               mapElement={mapElement}/>
  
      ReactDOM.render(
          <div style={{height: '100vh'}}>
              {map}
          </div>,
          root)
  }
