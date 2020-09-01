module.exports = (app) => {
  const pizzas = require("../controllers/pizzas-controller.js");
  const orders = require("../controllers/orders-controller.js");

  // Read all
  app.get("/pizzas", pizzas.findAll);

  // Delete one user
  app.delete("/pizza/:id", pizzas.deleteById);

  // Post to update or add
  app.post("/pizza", pizzas.addPizza);

  // Read all orders
  app.get("/orders", orders.findAll);

  // create order
  app.post("/order", orders.addOrder);

  // // confirmation
  // app.put("/pizza/:id", orders.confirmation);

  // // preparation
  // app.put("/pizza/:id", orders.preparation);

  // // livraison
  // app.put("/pizza/:id", orders.livraison);
};
