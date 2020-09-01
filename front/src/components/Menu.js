import React, { useState } from "react";

import Pizza from "./Pizza";
import Article from "./Article";

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

  const [pizzasInCart, setPizzasInCart] = useState([]);
  let addedPizzas = pizzasInCart;
  const addPizzaToCart = (pizza) => {
    addedPizzas.push(pizza);
    setPizzasInCart([...addedPizzas]);
    console.log(pizzasInCart);
  };

  return (
    <div className="screen">
      <div className="menu">
        <h1>NOS PIZZAS: </h1> <br />
        <div className="pizzas-container">
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.id}
              pizza={pizza}
              addPizzaToCart={addPizzaToCart}
            />
          ))}
        </div>
        <br />
      </div>
      <div className="cart">
        <h1>VOTRE PANIER: </h1> <br />
        {pizzasInCart.map((pizzaInCart, index) => (
          <Article key={index} pizza={pizzaInCart} />
        ))}
      </div>
      <br />
    </div>
  );
}

export default Menu;
