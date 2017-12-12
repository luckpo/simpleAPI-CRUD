"use strict"
const TasksModel = require("../models/tasks");

const ObjectId = require("mongoose").Types.ObjectId;

let getTaskInfo = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    let taskId = req.params.taskId ? req.params.taskId : "";
        TasksModel.findOne({ _id: ObjectId(taskId), user_id: userId }, function (err, task) {
            if (err) {
                console.log("error", err);
                res.status(500).send("error");
            }
            res.send(task);
        })
}

let listTasksForUser = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
        TasksModel.find({user_id: userId }, function (err, task) {
            if (err) {
                console.log("error", err);
                res.status(500).send("error");
            }
            res.send(task);
        })
}

let updateTask = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    let taskId = req.params.taskId ? req.params.taskId : "";
    TasksModel.findOneAndUpdate({ _id: ObjectId(taskId), user_id: userId}, req.body, function (err, raw) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send({done: true });
    });
}

let createTask = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    let createTaskPayload = Object.assign({}, req.body);
    createTaskPayload.user_id = userId;
    var newTask = new TasksModel(createTaskPayload);
    newTask.save(function (err, user) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send({done: true });
    });
}

let deleteTask = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    let taskId = req.params.taskId ? req.params.taskId : "";
    TasksModel.deleteOne({ _id: ObjectId(taskId), user_id: userId}, function (err, raw) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send({done: true });
    });
}

module.exports = {
    getTaskInfo: getTaskInfo,
    listTasksForUser: listTasksForUser,
    updateTask: updateTask,
    createTask: createTask,
    deleteTask: deleteTask
}