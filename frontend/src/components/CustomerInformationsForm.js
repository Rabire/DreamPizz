import React, { useState } from "react";
import Modal from "react-modal";

import "./CustomerInformationsForm.css";

Modal.setAppElement("#root");

function CustomerInformationsForm({
  toggleModalVisibility,
  createOrder,
  articles,
  total_amount,
}) {
  const [newOrder, setNewOrder] = useState({ articles, total_amount });

  function handleChange(e) {
    newOrder[e.target.name] = e.target.value;
    setNewOrder({ ...newOrder });
  }

  function submitOrder() {
    createOrder(newOrder);
    toggleModalVisibility();
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
      <h2>Veuillez renseignez vos informations</h2>

      <div className="form">
        <p>Nom complet :</p>
        <input type="text" name="client_fullname" onChange={handleChange} />

        <p>Adresse postale :</p>
        <input type="text" name="client_address" onChange={handleChange} />

        <p>Numéro de téléphone :</p>
        <input type="text" name="client_phonenumber" onChange={handleChange} />
        <button className="add-order-button" onClick={submitOrder}>
          Commander
        </button>
      </div>
    </Modal>
  );
}

export default CustomerInformationsForm;
