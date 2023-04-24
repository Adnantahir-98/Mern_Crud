
const Todos = require('../models/crudModel')


const getTodos = async(req, res) => {
    const getTodo = await Todos.find()
    res.status(200).json(getTodo)
}

const getSingleTodo = async(req, res) => {
    const singleTodo = await Todos.findById(req.params.id)
    if(!singleTodo){
        res.status(400)
        throw new Error('No Data Found')
    }else{
        res.status(200).json(singleTodo)
    }

}

const postTodos = async(req, res) => {
    const {todo} = req.body
    const postTodo = await Todos.create({
        todo,
    })
    res.status(200).json(postTodo)
}

const updateTodos = async(req, res) => {
    const findTodo = await Todos.findById(req.params.id)
    if(!findTodo){
        res.status(400)
        throw new Error('No Data Found')
    }

    const updateTodo = await Todos.findByIdAndUpdate(req.params.id, req.body, 
        {new: true})

    res.status(200).json(updateTodo)
}


const deleteTodo = async(req, res) => {
    const findOne = await Todos.findById(req.params.id)
    if(!findOne){
        res.status(400)
        throw new Error('No Data Found')
    }

    const deleteTodo = await Todos.findByIdAndDelete(req.params.id, req.body)
    
    res.status(200).json(deleteTodo)
}


module.exports = {getTodos, getSingleTodo, postTodos, updateTodos, deleteTodo}
