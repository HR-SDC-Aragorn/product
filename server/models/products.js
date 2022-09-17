const db = require('../db');

module.exports = {
  get: function (productID, callback) {
    console.log('what is the product id: ', productID)

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