const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const cors = require('cors');

dotenv.config();

const app = express();
const DB = process.env.DATABASE;

app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

app.use(require('../src/api/route/routing'))

const PORT = process.env.PORT || 8080;

mongoose.connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`No connection!`);
    console.log(err.message);
  });
  
