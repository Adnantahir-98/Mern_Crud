const mongoose = require('mongoose')


const TodoSchema = mongoose.Schema({
    todo:{
        type: 'String',
        // required: [true, 'Please fill the field'],
    },
}, {timestamps: true})


module.exports = mongoose.model('Todo', TodoSchema)
