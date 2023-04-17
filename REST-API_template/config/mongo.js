const mongoose = require('mongoose')

const db_connect = () => {
    const DB_URI = process.env.DB_URI

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((res, err) => {
        if(!err){
            console.log("Connected to DB 😎")
        }
        else {
            console.log("Failed to connect to DB 🤬") 
        }
    })




}

module.exports = db_connect