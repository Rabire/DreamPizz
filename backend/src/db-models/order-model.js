const Sequelize = require("sequelize");

const orderModel = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  client_fullname: {
    type: Sequelize.STRING,
  },
  client_phonenumber: {
    type: Sequelize.STRING,
  },
  client_address: {
    type: Sequelize.STRING,
  },
  articles: {
    type: Sequelize.TEXT,
  },
  total_amount: {
    type: Sequelize.DECIMAL,
  },
  status: {
    type: Sequelize.INTEGER,
    // 1: en attente de confirmation
    // 2: en cours de preparation
    // 3: en cours de livraison
    // 4: livre
  },
  takeaway: {
    type: Sequelize.STRING,
    defaultValue: "off",
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

module.exports = orderModel;
