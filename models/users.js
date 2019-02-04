var mongoose = require('mongoose');
var db = require('./../config/db').db;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
useMongoClient: true;
var users = mongoose.Schema({
    email: String,
    password: String
});
module.exports = mongoose.model("users", users, "users");