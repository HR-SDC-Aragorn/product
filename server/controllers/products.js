const models = require('../models');

module.exports = {
  getAll: function (req, res) {
    models.products.getAll((err, result) => {
      if (err) {
        console.log('Something went wrong in the controller for all products route');
        console.log(err);
      } else {
        res.status(200).send(result.rows);
      }
    })
  },

  get: function (req, res) {
    const productID = req.params.id;
    models.products.get(productID, (err, result) => {
      if (err) {
        console.log('Something went wrong in the controller for products route');
        console.log(err);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
  }
}