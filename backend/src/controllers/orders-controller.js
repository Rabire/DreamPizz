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

exports.findById = (req, res) => {
  const urlId = req.params.id;

  Orders.findOne({
    where: {
      id: urlId,
    },
  })
    .then((orderFound) => {
      if (orderFound) {
        res.status(200).send(orderFound);
      } else {
        res.status(400).send("order id not found");
      }
    })
    .catch(() => res.sendStatus(500));
};

exports.addOrder = async (req, res) => {
  Orders.create(req.body)
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

exports.changeStatus = (req, res) => {
  Orders.update(req.body, { where: { id: req.params.id } })
    .then(res.sendStatus(200))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};
