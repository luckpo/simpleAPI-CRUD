"use strict"
var mongoose = require("./db");
var db = mongoose.connection;
var userSchema = mongoose.Schema({
    username: String,
    first_name: String,
    last_name: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;
