import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./Facture.css";

function Facture() {
  const orderId = useLocation().pathname.slice(9);

  const [order, setOrder] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/order/${orderId}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch(console.log);
  }, []);

  console.log(order);

  return (
    <div className="page">
      <div className="bill">
        <h1>Facture</h1>
      </div>
    </div>
  );
}
export default Facture;
