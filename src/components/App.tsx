import * as React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from "react-router-dom";
// import "./App.css";
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

  

class App extends React.Component<{google:any}> {
  render() {
  
    return (
    <div className="container-fluid" >
        <Map google = {this.props.google} zoom={14}>

          {/* <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>   
          </InfoWindow> */}

        </Map>
      </div>
    );
  }
}

// export default App;

export default GoogleApiWrapper({
  apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(App)
