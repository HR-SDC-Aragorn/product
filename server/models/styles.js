const db = require('../db');

module.exports = {
  get: function (productID, callback) {
    let queryString = `SELECT
                         style_id,
                         name,
                         original_price,
                         sale_price,
                         default_style,
                       (SELECT json_agg
                         (json_build_object(
                           'thumbnail_url', thumbnail_url,
                           'url', url
                         ))
                        AS photos FROM photos WHERE style_id = styles.style_id),
                       (SELECT json_object_agg(
                         id,
                         to_jsonb(skus) - 'id' - 'style_id'
                        ) AS skus FROM skus WHERE style_id = styles.style_id)
                       FROM styles WHERE product_id = ${productID}`;

    db.query(queryString, (err, result) => {
      if (err) {
        console.log('something went wrong in the models for styles: ');
        throw err;
      } else {
        callback(null, result);
      }
    });
  }
}
