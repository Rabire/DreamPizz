import React from "react";

import NoImg from "../assets/img/no-img.png";

import "./Pizza.css";

function Pizza({ pizza, addPizzaToCart }) {
  const iconsPath = require.context("../assets/img/pizzas/", true);

  return (
    <div className="pizza-info">
      <img
        className="pizza-img"
        src={pizza.image ? iconsPath("./" + pizza.image) : NoImg}
        alt="pizza"
        height={150}
        onClick={() => {
          addPizzaToCart(pizza);
        }}
      />

      <div className="text-container">
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
      </div>
    </div>
  );
}

export default Pizza;
