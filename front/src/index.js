import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
