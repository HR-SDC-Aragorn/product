const db = require('../db');

module.exports = {
  get: function (productID, callback) {

    let queryString = `SELECT ARRAY (
                       SELECT related_product_id
                       FROM related
                       WHERE product_id = ${productID}) AS related`;

    db.query(queryString, (err, result) => {
      if (err) {
        console.log('something went wrong in the models for related products: ');
        throw err;
      } else {
        callback(null, result);
      }
    });
  }
}
