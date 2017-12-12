#!/usr/bin/env node
"use strict"
const TasksModel = require("../models/tasks");
let today = new Date();
TasksModel.find({ status: "pending", next_execute_date_time: {$lt: today} }, function (err, tasks) {
    if (err) {
        console.log("error", err);
        process.exit(1);
    }
    console.log(tasks);
    TasksModel.deleteMany({ status: "pending", next_execute_date_time: {$lt: today} }, function (err, raw) {
        if (err) {
            console.log("error", err);
            process.exit(1);
        }    
        process.exit(0); 
    })    
})


