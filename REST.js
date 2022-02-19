require('dotenv').config() // addign env suppor

const express = require('express')
const app = express()
const mongoose = require('mongoose')



//mongo connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Db connection working'))

//server play server
app.use(express.json())

const peoplesRouter = require('./routes/peoples')
app.use('/peoples', peoplesRouter)


//server configs
app.listen(3000, ()=> console.log('its up on port 3000'))