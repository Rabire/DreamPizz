import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CommandeList from "./components/CommandeList";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/menu" component={Menu} />
      <Route path="/administration" component={CommandeList} />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
