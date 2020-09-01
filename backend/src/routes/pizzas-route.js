module.exports = (app) => {
  const pizzas = require("../controllers/pizzas-controller.js");

  // Read all
  app.get("/pizzas", pizzas.findAll);

  // // Read 1 user
  // app.get("/users/:id", users.findById);

  // // Anonymize one user
  // app.delete("/users/:id", users.softDeleteById);

  // // Post to update or add
  // app.post("/users", users.addUser);

  // // Put to update a user
  // app.put("/users/:id", users.updateUser);

  // //post to login
  // app.post("/users/login", users.login);
};
