import React from "react";
import "./CommandeList.css";

function CommandeList() {
  const arrCommandes = [
    {
      id: 1,
      name: "Yann",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "12h30",
      adresse: "Rillieux",
    },
    {
      id: 2,
      name: "Rabire",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "3h",
      adresse: "Tassin",
    },
    {
      id: 2,
      name: "Cedric",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "8h",
      adresse: "Cordelier",
    },
    {
      id: 3,
      name: "Robin",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "14h",
      adresse: "Venissieux",
    },
    {
      id: 4,
      name: "Morgane",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "15h",
      adresse: "Cordelier",
    },
    {
      id: 5,
      name: "Morgane",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "15h",
      adresse: "Cordelier",
    },
    {
      id: 6,
      name: "Morgane",
      articles: [{ id: 1, name: "", number: 4 }],
      date: "27 Octobre",
      heure: "15h",
      adresse: "Cordelier",
    },
  ];
  return (
    <div className="commande-Screen">
      <h1>Les commandes :</h1>
      <div className="commande-row">
        {arrCommandes.map((client) => (
          <p>
            <div className="client-name">{client.name}</div>
            <div className="commande-infos">
              N° de commande : {client.id}
              <br />
              Commande : Jsp pas quoi mettre la
              <br />
              Date et Heure : {client.date} {client.heure}
              <br />
              Adresse : {client.adresse}
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}
export default CommandeList;
