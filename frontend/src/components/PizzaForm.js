import React, { useState } from "react";
import axios from "axios";

import "./PizzaForm.css";

function PizzaForm() {
  const [newPizza, setNewPizza] = useState({});

  function handleChange(e) {
    newPizza[e.target.name] = e.target.value;
    setNewPizza({ ...newPizza });
  }

  function submitCreation() {
    axios
      .post("http://localhost:3000/pizza", newPizza)
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  }

  return (
    <div className="page">
      <form className="form">
        <label>
          Nom de la Pizza
          <br />
          <input type="text" name="name" onChange={handleChange} />
        </label>

        <label>
          Ingredients
          <br />
          <textarea rows="4" name="ingredients" onChange={handleChange} />
        </label>

        <strong className="create-btn" onClick={submitCreation}>
          Creer
        </strong>
      </form>
    </div>
  );
}
export default PizzaForm;
