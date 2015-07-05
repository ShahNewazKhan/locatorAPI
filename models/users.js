//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var usersSchema = new mongoose.Schema({

	fb_id: Number,
	name: String,
	lat: Number,
	lon: Number 
});

// Return model
module.exports = restful.model('Users', usersSchema);