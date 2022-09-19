const db = require('../db');

module.exports = {
  getAll: function (callback) {

    let queryString = `SELECT id, name, slogan, description, category, default_price
                       FROM products
                       WHERE id BETWEEN 65650 AND 65750 LIMIT 10`
                      //  WHERE id = ${productID}`

    db.query(queryString, (err, result) => {
      if (err) {
        console.log('something went wrong in the models for product: ');
        throw err;
      } else {
        callback(null, result);
      }
    });
  },

  get: function (productID, callback) {

    let queryString = `SELECT id, name, slogan, description, category, default_price,
                         (SELECT json_agg ( json_build_object
                           ('feature', feature, 'value', value) )
                         AS features
                         FROM features
                         WHERE product_id = ${productID})
                       FROM products
                       WHERE id = ${productID}`

    db.query(queryString, (err, result) => {
      if (err) {
        console.log('something went wrong in the models for product: ');
        throw err;
      } else {
        callback(null, result);
      }
    });
  }
}
