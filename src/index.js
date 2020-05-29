import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/solid";
import "bulma";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CatsApiClient from "./clients/CatsApiClient";

const catsApiClient = new CatsApiClient("/api");

const root = document.getElementById("root");
ReactDOM.render(<App catsApiClient={catsApiClient} />, root);
