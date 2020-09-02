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

  return (
    <div className="page">
      <div className="bill">
        <div className="infos-header">
          <div className="client">
            <strong>{order.client_fullname}</strong>
            <br />
            <span>{order.client_address}</span>
            <br />
            <span>{`Telephone : ${order.client_phonenumber}`}</span>
            <br />
          </div>
          <div className="us">
            <strong>DREAM PIZZ</strong>
            <br />
            <span>88 Rue de Gerland, Lyon 69007</span>
            <br />
            <span>Telephone : 04 27 18 14 41</span>
            <br />
            <span>Email : contact@dreampizz.fr</span>
            <br />
            <br />
          </div>
        </div>

        <h1 className="title">Contenu de la commande : </h1>
        <div className="articles">
          {order.articles &&
            JSON.parse(order.articles).map((article) => (
              <span>
                {`x${article.number} : ${article.name}`}
                <hr />
              </span>
            ))}
        </div>
        <h1 className="title">Total : </h1>
        <span>{`x${order.total_amount} euros`}</span>
      </div>
    </div>
  );
}
export default Facture;
