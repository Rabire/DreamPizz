module.exports = (app) => {
  const pizzas = require("../controllers/pizzas-controller.js");

  // Read all
  app.get("/pizzas", pizzas.findAll);

  // Delete one user
  app.delete("/pizza/:id", pizzas.deleteById);

  // Post to update or add
  app.post("/pizza", pizzas.addPizza);
};
