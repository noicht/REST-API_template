require('dotenv').config()
const express = require("express")
const cors = require("cors")
const db_connect=require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("storage")) // los recursos estaticos, sacalos de la carpeta storage

const port = process.env.PORT || 3000


//routes ------

app.use('/api',require('./routes'))


//routes ------
app.listen(port, () => {

    console.log("Server listening on http://localhost:"+port)
})

db_connect()