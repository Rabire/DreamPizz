import React from "react";
import axios from "axios";
import "./Commande.css";

function Commande({ order }) {
  const updateToNextStep = (res) => {
    axios
      .put("http://localhost:3000/order/" + order.id, {
        status: order.status + 1,
      })
      .catch(console.log());
  };

  let buttonText = "";
  switch (order.status) {
    case 1:
      buttonText = `Passer la commande à "En cours de préparation"`;
      break;
    case 2:
      buttonText = `Passer la commande à "En cours de livraison"`;
      break;
    case 3:
      buttonText = `Passer la commande à "Livrée"`;
      break;
    default:
      buttonText = "Livrée";
      break;
  }

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
        <strong>Montant total : </strong>
        {`${order.total_amount} €`}
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
        {buttonText}
      </h3>
    </div>
  );
}
export default Commande;
