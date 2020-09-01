const db = require("../db-models/mysql-model");
const orderModel = require("../db-models/order-model");

const Orders = db.sequelize.define("orders", orderModel);

exports.findAll = (req, res) => {
  Orders.findAll()
    .then((results) => res.send(results).status(200))
    .catch(() => {
      res.sendStatus(500);
    });
};

exports.addOrder = async (req, res) => {
  const bodyReceived = req.body;
  Orders.create(bodyReceived)
    .then(res.sendStatus(201))
    .catch(() => {
      res.sendStatus(500);
    });
};