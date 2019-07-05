import * as React from "react";
import * as ReactDOM from 'react-dom'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'
import { NavLink } from "react-router-dom";

const rootId = 'root'
const root = document.getElementById(rootId)
const someLatLng = {lat: 55.751244, lng: 37.618423}

const mapWidth ={
  width:'100%',
  height:'10em'
}

export const googleMapURL = 'https://maps.google.com/maps/api/js?key=AIzaSyDzf6Gmc9u7rr2JHijOERAmC_j0gWYtR2c'

  export class Footer extends React.Component<{},{}> {
    constructor(props:any) {
      super(props);    
    }
    render() { 
  
  return (
    <div>      
      <div className="text-center text-white fixed-bottom bg-logoblue content" >
      <button className='btn bg-logoblue text-white  fa fa-times float-right' type="submit" id="hide"></button>
        <p className="mb-1 pt-2 px-3">
        We use cookies for advertising, social media and analytics purposes. Read about how we use cookies in our updated 
        <NavLink className=" navfont  text-white" to="/privacypolicy" ><small>&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;</small></NavLink>
        If you continue to use this site, you consent to our use of cookies and our 
        <NavLink className=" navfont  text-white" to="/privacypolicy" ><small>&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;</small></NavLink>
        
        </p>
      </div>
      
    <div className="d-flex justify-content-around bg-footer flex-col p-4 col-lg-12">
      <div className="col-md-3 pb2">
        <h5 className="text-white">Synectiks</h5>
        <small className="text-white">
          We are a team of highly qualified and experienced <br /> professionals
          from various fields who are determined and dedicated to
          delivering world class professional services to our patrons.
        </small>
      </div>
      
      <div className="col-md-5 ftr pb2">
      <h5 className="text-white">Get In Touch</h5>
        <div className="d-flex">
        <div>
        <h4 className="text-white">U.S.A</h4>
        <small className="text-white">
        300 Alexander Park Drive, Suite 215, <br /> Princeton, NJ 08540 <br />{" "}
        Sales: +1 (609) 608-0429 X 102 <br />  Office: +1 (609) 608-0429
        </small><br />{" "}
        </div>
        <div className="pl-5">
        <h4 className="text-white">INDIA</h4>
        <small className="text-white">
        3rd Floor, Plot # 25 &amp; 26,<br /> Survey # 71, Madhapur, <br />{" "}
        Hyderabad, IN 500 081 <br />  Office: +91 (40) 4857 4411
        </small>
        </div>
        </div>
      </div>
      <div className="col-md-4 pb2">
        <div className="w-100">       
        <iframe style={mapWidth}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0341342304914!2d-74.63367698460706!3d40.31939997937661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e0d086f7514f%3A0x8f04ec41f160a353!2s300+Alexander+Park+Dr+%23215%2C+Princeton%2C+NJ+08540%2C+USA!5e0!3m2!1sen!2sin!4v1526621065289"
        frameBorder='0'        
        ></iframe>
        <div id="map"></div>
        </div>
      </div>
    </div>

    </div>
  );
};
  }

  export default Footer;
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

