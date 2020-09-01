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
  Orders.create(req.body)
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};
