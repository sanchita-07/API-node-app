const mongoose = require('mongoose');

  const schemauser = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 4
    },
  });

  const Userdb = mongoose.model('Userdb',schemauser);

  module.exports = Userdb;