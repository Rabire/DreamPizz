import React from "react";

import "./Pizza.css";

function Pizza({ pizza, addPizzaToCart }) {
  const iconsPath = require.context("../assets/img/", true);

  return (
    <div className="pizza-info">
      <img
        className="pizza-img"
        src={iconsPath("./" + pizza.img)}
        alt="pizza"
        height={150}
        onClick={() => {
          addPizzaToCart(pizza);
        }}
      />

      <div className="text-container">
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredient}</p>
      </div>
    </div>
  );
}

export default Pizza;
