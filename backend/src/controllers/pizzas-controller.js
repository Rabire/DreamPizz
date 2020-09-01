const db = require("../db-models/mysql-model");
const pizzaModel = require("../db-models/pizza-model");

const Pizzas = db.sequelize.define("pizzas", pizzaModel);

exports.findAll = (req, res) => {
  Pizzas.findAll()
    .then((results) => res.send(results).status(200))
    .catch(() => {
      res.sendStatus(500);
    });
};

exports.deleteById = async (req, res) => {
  const urlId = req.params.id;

  const pizzaToDelete = await Pizzas.findOne({
    where: {
      id: urlId,
    },
  });

  await pizzaToDelete
    .destroy()
    .then(res.sendStatus(202))
    .catch(() => res.sendStatus(500));
};

exports.addPizza = async (req, res) => {
  const bodyReceived = req.body;
  Pizzas.create(bodyReceived)
    .then(res.sendStatus(201))
    .catch(() => {
      res.sendStatus(500);
    });
};
