import React, { useState } from "react";
import Modal from "react-modal";

import "./CustomerInformationsForm.css";

Modal.setAppElement("#root");

function CustomerInformationsForm({ closeModal, clickOnAdd }) {
  const [newOrder, setNewOrder] = useState({});
  function handleChange(e) {
    newOrder[e.target.name] = e.target.value;
    setNewOrder({ ...newOrder });
  }

  function addButton() {
    clickOnAdd(newOrder);
    closeModal();
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="AddOrder modal"
      className="modal"
    >
      <button onClick={closeModal} className="close-button">
        X
      </button>
      <h2>Veuillez renseignez vos informations</h2>

      <div className="form">
        <p>Nom complet :</p>
        <input type="text" name="fullname" onChange={handleChange} />

        <p>Adresse postale :</p>
        <input type="text" name="address" onChange={handleChange} />

        <p>Numéro de téléphone :</p>
        <input type="text" name="phoneNumber" onChange={handleChange} />
        <button className="add-user-button" onClick={addButton}>
          Commander
        </button>
      </div>
    </Modal>
  );
}

export default CustomerInformationsForm;
