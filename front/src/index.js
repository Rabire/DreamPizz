import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
// import PizzaList from "./components/PizzaList";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={App} />
      {/* <Route path="/pizzas" component={PizzaList} /> */}
    </BrowserRouter>
    {/* <Footer/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
