"use strict";
const pizzaModel = require("../src/db-models/pizza-model");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
        */

    return queryInterface.createTable("pizzas", pizzaModel);
  },

  down: (queryInterface, Sequelize) => {
    /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.
        */

    return queryInterface.dropTable("pizzas");
  },
};
