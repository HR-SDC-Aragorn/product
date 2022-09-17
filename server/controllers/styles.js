const models = require('../models');

module.exports = {
  get: function (req, res) {
    const productID = req.params.id;

    models.styles.get(productID, (err, result) => {
      if (err) {
        console.log('Something went wrong in the controller for styles:');
        console.log(err);
      } else {
        let resultObject = {
          product_id: productID,
          results: result.rows
        }
        res.status(200).send(resultObject);
        // res.status(200).send(result.rows);
      }
    })
  }
}