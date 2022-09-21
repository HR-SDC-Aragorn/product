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

app.get("/loaderio-bedd23ec0b5c145c0e72b8ee942c3d6b", (req, res) => res.send("loaderio-bedd23ec0b5c145c0e72b8ee942c3d6b"))

app.listen(process.env.PORT, (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});