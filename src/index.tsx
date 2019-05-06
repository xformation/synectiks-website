import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { AppRouter } from "./router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render(
  <Router>
    <AppRouter>
      <App />
    </AppRouter>
  </Router>,
  document.getElementById("root")
);

// export default App;
