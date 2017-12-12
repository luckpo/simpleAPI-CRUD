"use strict"
var mongoose = require("./db");
var db = mongoose.connection;
var taskSchema = mongoose.Schema({
    name: String,
    description: String,
    date_time: Date,
    user_id: String,
    status: String,
    next_execute_date_time: Date
});

var Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
