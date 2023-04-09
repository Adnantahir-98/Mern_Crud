const express = require('express')
const router = express.Router()
const {getTodos, postTodos, updateTodos, deleteTodo} = require('../controllers/crudController')


router.route('/').get(getTodos).post(postTodos)
router.route('/:id').put(updateTodos).delete(deleteTodo)


module.exports = router
