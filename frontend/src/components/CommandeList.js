import React, { useState, useEffect } from "react";
import axios from "axios";
import Commande from "./Commande";

import "./CommandeList.css";

function CommandeList() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setAllOrders(res.data);
        console.log(setAllOrders);
      })
      .catch(console.log());
  }, []);

  return (
    <div className="commande-screen">
      <h1>COMMANDES EN COURS :</h1>
      <div className="commande-list">
        {allOrders
          .filter((order) => order.status <= 3)
          .map((filteredOrder) => (
            <Commande key={filteredOrder.id} order={filteredOrder} />
          ))}
      </div>
      <br />
      <h1>COMMANDES LIVREES :</h1>
      <div className="commande-list">
        {allOrders
          .filter((order) => order.status > 3)
          .map((filteredOrder) => (
            <Commande key={filteredOrder.id} order={filteredOrder} />
          ))}
      </div>
      <a className="add-pizza-btn" href="create-pizza">
        Ajouter une pizza
      </a>
    </div>
  );
}
export default CommandeList;
