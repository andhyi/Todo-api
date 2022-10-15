//* /todos [POST, GET]
//* /todos:id [GET]

//! const express = require('express')
//! const router1 = express.Router()

//! const {Router} = require('express')
//! const router2 = Router()

const router = require('express').router()

const todoServices = require('./todos.services')

router.get('/todos', todoServices.getTodos)

router.post('/todos', todoServices.createNewTodo)

router.get('/todos/:id', todoServices.getOneTodo) 

//? Export default
module.exports = router 