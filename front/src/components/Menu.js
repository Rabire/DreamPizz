import React, { useState } from "react";

import Pizza from "./Pizza";
import Article from "./Article";

import "./Menu.css";

function Menu() {
  const pizzas = [
    {
      id: 1,
      name: "LA KEBAB",
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
  const [occurences, setOccurences] = useState(0);

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const numberOfOccurences = (pizza) => {
    const count = pizzasInCart.reduce(function (n, val) {
      return n + (val.name === pizza.name);
    }, 0);
    setOccurences(count);
  };

  let addedPizzas = pizzasInCart;
  const addPizzaToCart = (pizza) => {
    addedPizzas.push(pizza);
    setPizzasInCart([...addedPizzas]);
    numberOfOccurences(pizza);
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
        {pizzasInCart.length === 0 ? (
          <h5>Votre panier est vide ...</h5>
        ) : (
          <div>
            {pizzasInCart.map((pizzaInCart, index) => (
              <Article
                key={index}
                pizza={pizzaInCart}
                pizzasInCart={pizzasInCart}
                numberOfOccurences={occurences}
              />
            ))}
            <br />
            <br />
            <h1>Total: </h1>
            <h3>{`${round(pizzasInCart.length * 8.9, 1)} Euros`}</h3>
            <h3 className="order-button" onClick={() => console.log("order")}>
              Passer la commande
            </h3>
            <i>Toutes les pizzas sont a 8.90 €</i>
            <br />
            <br />
          </div>
        )}
      </div>
      <br />
    </div>
  );
}

export default Menu;
