import React from "react";

import kebab from "../assets/img/kebab.png";

import "./Menu.css";

function Menu() {
  const pizzas = [
    {
      id: 1,
      name: "La Kebab",
      ingredient:
        "Sauce yaourt à l’ail, mozzarella, viande kebab, tomates fraîches, oignons frais.",
      img: "kebab.png",
    },
    {
      id: 2,
      name: "LA NOCTAMBULE",
      ingredient: "Crème fraîche, mozzarella, lardons, oignons frais, origan.",
      img: "noctambule.png",
    },
    {
      id: 3,
      name: "LA POPEYE",
      ingredient:
        "Epinard à la crème, mozzarella, chèvre, tomates fraîches, oignons frais, thym, herbes de provence.",
      img: "popeye.png",
    },
  ];

  const iconsPath = require.context("../assets/img/", true);

  return (
    <div className="menu">
      {pizzas.map((pizza) => (
        <div className="pizza-info">
          <img
            className="pizza-img"
            src={iconsPath("./" + pizza.img)}
            alt="pizza"
          />
          <div className="text">
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredient}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
