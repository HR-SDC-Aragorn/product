const models = require('../models');

module.exports = {
  get: function (req, res) {
    const styleID = req.params.styleid;

    models.skus.get(styleID, (err, result) => {
      if (err) {
        console.log('Something went wrong in the controller for skus:');
        console.log(err);
      } else {
        res.status(200).send(result.rows);
      }
    })
  }
}