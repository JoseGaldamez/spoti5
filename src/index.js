import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "../src/utils";

import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
