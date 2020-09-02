module.exports = (app) => {
  const pizzas = require("../controllers/pizzas-controller.js");
  const orders = require("../controllers/orders-controller.js");

  /* PIZZAS */

  // Read all
  app.get("/pizzas", pizzas.findAll);

  // Delete one pizza
  app.delete("/pizza/:id", pizzas.deleteById);

  // Post to update or add
  app.post("/pizza", pizzas.addPizza);

  /* ORDERS */

  // Read all orders
  app.get("/orders", orders.findAll);

  // Read 1 order
  app.get("/order/:id", orders.findById);

  // create order
  app.post("/order", orders.addOrder);

  // confirmation
  app.put("/order/:id", orders.changeStatus);
};
