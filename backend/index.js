const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')


connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/todo', require('./routes/crud_routes'))

// process.env.PORT || 5001
const port = 5001
app.listen(port, () => console.log(`Server is Running at ${port}`))
