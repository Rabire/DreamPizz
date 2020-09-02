import React, { useState, useEffect } from "react";
import axios from "axios";
import Commande from "./Commande";

import "./CommandeList.css";

function CommandeList() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/administration")
      .then((res) => {
        setAllOrders(res.data);
        console.log(setAllOrders);
      })
      .catch(console.log());
  }, []);

  return (
    <div className="commande-Screen">
      <h1>COMMANDES EN COURS :</h1>
      <div className="commande-list">
        {allOrders.map((order) => (
          <Commande key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
export default CommandeList;
