const csvtojson = require('csvtojson');
const path = require('path');

const csvFilePath = path.join(__dirname, '../../data/related.csv');

let relatedProductIds = [];

csvtojson()
  .fromFile(csvFilePath)
  .then(csvData => {
    console.log(csvData[0]);
    relatedProductIds = csvData;
  })
  .then(() => {
    console.log(relatedProductIds[10]);
  })


const Pool = require('pg').Pool;

const pool = new Pool({
  host: "local"
})