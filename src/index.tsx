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
<<<<<<< HEAD

// export default App;
=======
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
