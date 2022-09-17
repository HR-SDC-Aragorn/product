require('dotenv').config();
const express = require('express');
const db = require('./db');

// middleware
const morgan = require('morgan');

let router = require('./routes.js');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT, (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});