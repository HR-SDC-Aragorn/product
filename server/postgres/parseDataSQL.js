const csvtojson = require('csvtojson');
const path = require('path');
const Pool = require('pg').Pool;

const pool = new Pool({
  host: "localhost",
  user: "simingyum",
  database: "products",
  port: 5432
});

const csvFilePath = path.join(__dirname, '../../data/related.csv');

csvtojson()
  .fromFile(csvFilePath)
  .then(csvData => {
    pool.connect((err, client, done) => {
      if (err) throw err;
      try {
        for (let data of csvData) {
        // csvData.forEach((data) => {
          let relatedProductID = Number(data.related_product_id);
          let productID = Number(data.current_product_id);
          let query = `UPDATE products SET related_product_id = related_product_id || '{${relatedProductID}}' WHERE id = ${productID}`;

          client.query(query, (err, res) => {
            if (err) {
              console.log(err);
            }
          });
        // });
        }
      } finally {
        done();
      }
    });
  })
  .catch(err => {
    console.log(err);
  })
