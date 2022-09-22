require('dotenv').config();
const express = require('express');
const db = require('./db');

// middleware
const morgan = require('morgan');
const cors = require('cors');

let router = require('./routes.js');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/', router);

app.get("/loaderio-b7575aca2f3c7ef403629c34e40b3225", (req, res) => res.send("loaderio-b7575aca2f3c7ef403629c34e40b3225"))

app.listen(process.env.PORT, (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});