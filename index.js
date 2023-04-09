const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')


connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/todo', require('./routes/crud_routes'))


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is Running at ${process.env.PORT}`))
