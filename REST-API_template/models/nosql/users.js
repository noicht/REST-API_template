const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const userScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type :Number
        },
        email: {
            type: String,
            unique: true

        },
        password: {
            type: String
        },
        role: {
            // type:["user","admin"],
            type: [String], enum: ["user","admin"],
            default: "user"
        },
        favorites: {
            type: [String]

        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

userScheme.plugin(mongooseDelete, {overrideMethods: "all"}) 
module.exports = mongoose.model("users", userScheme) // users es el nombre de la tabla, en este caso es una coleccion por ser mongodb
