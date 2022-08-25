const mongoose = require('mongoose');

const schemablog = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
  })

  const Blogdb = mongoose.model('Blogdb',schemablog);

  module.exports = Blogdb;