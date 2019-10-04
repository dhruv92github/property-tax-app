import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
