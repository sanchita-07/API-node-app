const express = require('express');
const route = express.Router();
const controllerblog = require('../controller/blog');
const controlleruser = require('../controller/signup');

 route.post('/blogs', controllerblog.create);
 route.get('/blogs', controllerblog.read);
 route.put('/blogs/:id', controllerblog.update);
 route.delete('/blogs/:id', controllerblog.delete);

 route.post('/register', controlleruser.register);
 route.post('/login', controlleruser.login);
  
module.exports = route; 