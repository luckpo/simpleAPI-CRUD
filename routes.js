"use strict"
const express = require('express');
const router = express.Router();
let users = require("./controllers/users")
let tasks = require("./controllers/tasks")

/*
Users
*/
//GET : list users
router.get('/', users.getUsers);

//GET with userId : get user info
router.get('/:userId', users.getUserByID);

//PUT : update user
router.put('/:userId', users.updateUser);

//POST : create user
router.post('/', users.createUser);

/*
Tasks
*/
//GET : get task info
router.get('/:userId/tasks/:taskId', tasks.getTaskInfo);

//GET with userId : list all tasks for a user
router.get('/:userId/tasks', tasks.listTasksForUser);

//PUT : update task
router.put('/:userId/tasks/:taskId', tasks.updateTask);

//POST : create task
router.post('/:userId/tasks', tasks.createTask);

//DELETE : delete task
router.delete('/:userId/tasks/:taskId', tasks.deleteTask);

module.exports = router;
