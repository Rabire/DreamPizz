"use strict";

const hash = require("../src/controllers/hash.js");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pizzas",
      [
        {
          name: "LA KEBAB",
          ingredients:
            "Sauce yaourt à l’ail, mozzarella, viande kebab, tomates fraîches, oignons frais.",
          image: "skebab.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LA NOCTAMBULE",
          ingredients:
            "Crème fraîche, mozzarella, lardons, oignons frais, origan.",
          image: "noctambule.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LA POPEYE",
          ingredients:
            "Epinard à la crème, mozzarella, chèvre, tomates fraîches, oignons frais, thym, herbes de provence.",
          image: "popeye.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LA PROVENCALE",
          ingredients:
            "Tomate, mozzarella, fromage de chèvre, tomates fraîches, huile d’olive, herbes de provence.",
          image: "provencale.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LA PRIMAVERA",
          ingredients:
            "Tomate, mozzarella, tomates fraîches, oignons frais, poivrons frais, aubergines grillées, huile d’olive, thym.",
          image: "primavera.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LA BOISEE",
          ingredients:
            "Crème fraîche, mozzarella, sauce gruyère, poulet rôti, poivrons frais, tomates fraîches.",
          image: "boisee.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pizzas", null, {});
  },
};
