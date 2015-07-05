//Dependencies

var express =require('express');
var router = express.Router();

//Model
var Users = require('../models/users');

//Routes
Users.methods(['get','put','post','delete']);
Users.register(router , '/users');

//Return router
module.exports = router;