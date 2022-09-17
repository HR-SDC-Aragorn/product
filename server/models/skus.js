const db = require('../db');

module.exports = {
  get: function (styleID, callback) {
    console.log('what is the style ID: ', styleID);

   let queryString = `SELECT json_object_agg(id,
                       to_jsonb(skus) - 'id'
                       ) AS skus FROM skus WHERE style_id = ${styleID}`;

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
