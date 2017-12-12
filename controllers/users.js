"use strict"
const UsersModel = require("../models/users");

const ObjectId = require("mongoose").Types.ObjectId;

let getUsers = function (req, res, next) {
    //would need pagination/cursor in a real world app
    UsersModel.find({}, function (err, users) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send(users);
    })
}

let getUserByID = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    UsersModel.findOne({ _id: ObjectId(userId) }, function (err, user) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send(user);
    })
}

let updateUser = function (req, res, next) {
    let userId = req.params.userId ? req.params.userId : "";
    UsersModel.findOneAndUpdate({ _id: ObjectId(userId) }, req.body, function (err, raw) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send({done: true });
    });
}

let createUser = function (req, res, next) {
    var newUser = new UsersModel(req.body);
    newUser.save(function (err, user) {
        if (err) {
            console.log("error", err);
            res.status(500).send("error");
        }
        res.send({done: true });
    });
}

module.exports = {
    getUsers: getUsers,
    getUserByID: getUserByID,
    updateUser: updateUser,
    createUser: createUser
}