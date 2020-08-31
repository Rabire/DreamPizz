import React from "react";

import Pizza1 from "../assets/img/pizza1.jpeg";

import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="left">
        <img className="pizza-img" source={Pizza1} alt="pizza" />
      </div>
      <div className="right">
        <h1>PIZZA NAME</h1>
        <h3>Composition: </h3>
        <div className="ingredient-list">
          <p className="ingredient">Olives</p>
          <p className="ingredient">Salade</p>
          <p className="ingredient">FDSBDSB</p>
          <p className="ingredient">vfdsdfv</p>
          <p className="ingredient">tnt negrb</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
