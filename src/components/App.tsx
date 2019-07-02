import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



class App extends React.Component<{ google: any }> {
  render() {

    return (
      <div className="container-fluid" >
        <Map google={this.props.google} zoom={14}>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(App)
