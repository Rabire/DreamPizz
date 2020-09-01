module.exports = (app) => {
  const orders = require("../controllers/pizzas-controller.js");

  // Read all
  app.get("/orders", orders.findAll);

  // confirmation
  app.put("/pizza/:id", orders.confirmation);

  // preparation
  app.put("/pizza/:id", orders.preparation);

  // livraison
  app.put("/pizza/:id", orders.livraison);
};
