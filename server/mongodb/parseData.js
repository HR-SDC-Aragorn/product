const mongodb = require('mongodb').MongoClient;
const csvtojson = require('csvtojson');
const path = require('path');
const url = 'mongodb://localhost:27017';

const csvFilePath = '/Users/simingyum/Documents/Siming/Software Engineering/Hack Reactor/Capstone Projects/System Design Capstone/product/data/photos.csv'

// let csvData = {
//   id: 1,
//   style_id: 1,
//   url: 'www.image.com',
//   thumbnail_url: 'www.image.com'
// }

csvtojson()
  .fromFile(csvFilePath)
  .then(csvData => {
    console.log('reach here');
    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true},
      (err, client) => {
        if (err) throw err;

        client
          .db('products')
          .collection('photos')
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });

// const parseAndLoad = (collection) => {
//   let filePath = path.join(__dirname, `../../data/${collection}.csv`);
//   console.log(filePath);

//   csvtojson()
//     .fromFile(filePath)
//     .then(csvData => {

//       mongodb.connect(
//         url,
//           { useNewUrlParser: true, useUnifiedTopology: true},
//           (err, client) => {
//             if (err) throw err;

//             client
//               .db('products')
//               .collection(collection)
//               .insertMany(csvData, (err, res) => {
//                 if (err) throw err;

//                 console.log(`Inserted: ${res.insertedCount} rows`);
//                 client.close();
//               });
//           }
//         );
//       });
// }

// parseAndLoad('photos');