import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import "./CustomerInformationsForm.css";

Modal.setAppElement("#root");

function CustomerInformationsForm({
  toggleModalVisibility,
  articles,
  total_amount,
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
    console.log({ newOrder });
    axios
      .post("http://localhost:3000/order", newOrder)
      .then((res) => {
        console.log(res);
        toggleModalVisibility();
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
