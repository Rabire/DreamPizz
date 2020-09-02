import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import "./CustomerInformationsForm.css";

Modal.setAppElement("#root");

function CustomerInformationsForm({
  toggleModalVisibility,
  articles,
  total_amount,
  setPizzasInCart,
}) {
  const [newOrder, setNewOrder] = useState({
    articles,
    total_amount,
    status: 1,
  });

  function handleChange(e) {
    newOrder[e.target.name] = e.target.value;
    setNewOrder({ ...newOrder });
  }

  function submitOrder() {
    axios
      .post("http://localhost:3000/order", newOrder)
      .then(() => {
        toggleModalVisibility();
        setPizzasInCart([]);
      })
      .catch(console.log);
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={toggleModalVisibility}
      contentLabel="AddOrder modal"
      className="modal"
    >
      <button onClick={toggleModalVisibility} className="close-button">
        X
      </button>
      <h2>Veuillez renseigner vos informations</h2>

      <div className="form">
        <p className="label">Nom complet :</p>
        <input type="text" name="client_fullname" onChange={handleChange} />

        <p className="label">Adresse postale :</p>
        <input type="text" name="client_address" onChange={handleChange} />

        <p className="label">Numéro de téléphone :</p>
        <input type="text" name="client_phonenumber" onChange={handleChange} />
        <button className="add-order-button" onClick={submitOrder}>
          Finaliser la commande
        </button>
      </div>
    </Modal>
  );
}

export default CustomerInformationsForm;
