import React from "react";

import "./Commande.css";

function Commande({ order }) {
  const updateToNextStep = () => {
    // API PUT
  };

  return (
    <div key={order.id} className="commande-infos">
      <h3>{order.client_fullname}</h3>
      <p>
        <strong>N° de commande : </strong>
        {order.id}
      </p>
      <p>
        <strong>Articles : </strong> <br />
        {JSON.parse(order.articles).map((article) => (
          <span>
            {`x${article.number} : ${article.name}`}
            <br />
          </span>
        ))}
      </p>
      <p>
        <strong>Heure de la commande : </strong>
        {order.createdAt}
      </p>
      <p>
        <strong>Adresse : </strong>
        {order.client_address}
      </p>
      <h3 className="status-btn" onClick={updateToNextStep}>
        Passer la commande en cours de préparation
      </h3>
    </div>
  );
}
export default Commande;
