const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())

const subscribersrouter = require('./routes/subscribers')
app.use('/subscribers', subscribersrouter)

app.listen(3000, () => console.log('server started'))