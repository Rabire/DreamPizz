import React from "react";

import Pizza from "./Pizza";

import "./Menu.css";
import pizzaimage from "../assets/img/kebab.png";

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
    <div className="screen">
      <div className="menu">
        <h1>NOS PIZZAS: </h1> <br />
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} />
          ))}
        </div>
        <br />
      </div>
      <div className="cart">
        <h1>Votre pannier</h1> <br />
        <div className="articles">
          <div className="article-infos">
            <img
              className="pizza-img"
              src={pizzaimage}
              alt="pizza"
              height={90}
            />
            <h4>NOM DE LA PIZZA</h4>
            <div className="amount">
              <div className="add-rm-button">
                <h4 className="add-rm-button-txt">-</h4>
              </div>
              <h4 className="pizza-nb">10</h4>
              <div className="add-rm-button">
                <h4 className="add-rm-button-txt">+</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
