import React, { useState, useEffect } from "react";
import axios from "axios";

import { round } from "../utils/round-decimal-number";

import CustomerInformationsForm from "./CustomerInformationsForm";
import Pizza from "./Pizza";
import Article from "./Article";

import "./Menu.css";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasInCart, setPizzasInCart] = useState([]);
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);

  /* Recuperation de la liste des pizzas depuis l'API */
  useEffect(() => {
    axios
      .get("http://localhost:3000/pizzas")
      .then((res) => {
        setPizzas(res.data);
      })
      .catch(console.log);
  }, []);

  /* Visibilitée du formulaire de commande */
  function toggleModalVisibility() {
    setIsCustomerFormOpen(!isCustomerFormOpen);
  }

  /* Gestion du panier */
  let addedPizzas = pizzasInCart;
  const addPizzaToCart = (pizza) => {
    const index = addedPizzas.findIndex(
      (addedPizza) => pizza.id === addedPizza.id
    );
    if (!addedPizzas.some((addedPizza) => pizza.id === addedPizza.id)) {
      pizza.number = 1;
      addedPizzas.push(pizza);
      setPizzasInCart([...addedPizzas]);
    } else {
      addedPizzas[index].number++;
      setPizzasInCart([...addedPizzas]);
    }
  };

  /* Calcul du prix total */
  let amount = 0;
  for (const product of pizzasInCart) {
    amount = round(amount + product.number * 8.9, 1);
  }

  /* Logique des boutons pour ajouter/retirer des pizzas au panier */
  const incrementNumber = (id) => {
    const index = addedPizzas.findIndex((addedPizza) => id === addedPizza.id);
    addedPizzas[index].number++;
    setPizzasInCart([...addedPizzas]);
  };
  const decrementNumber = (id) => {
    const index = addedPizzas.findIndex((addedPizza) => id === addedPizza.id);
    addedPizzas[index].number--;
    if (addedPizzas[index].number !== 0) {
      setPizzasInCart([...addedPizzas]);
    } else {
      addedPizzas.splice(index, 1);
      setPizzasInCart([...addedPizzas]);
    }
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
                incrementNumber={incrementNumber}
                decrementNumber={decrementNumber}
              />
            ))}
            <br />
            <br />
            <h1>Total: </h1>
            <h3>{`${amount} Euros`}</h3>
            <h3 className="order-button" onClick={toggleModalVisibility}>
              Passer la commande
            </h3>
            {isCustomerFormOpen && (
              <CustomerInformationsForm
                createOrder={(infos) => console.log(infos)}
                toggleModalVisibility={toggleModalVisibility}
                articles={pizzasInCart}
                total_amount={amount}
              />
            )}
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
