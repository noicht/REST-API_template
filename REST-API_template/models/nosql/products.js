const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const productsScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        product_type: {
            type: String
        },
        price: {
            type: Number,
        },

        isFavourite: {
            type:['true','false'],
            default: "false"
        },

        mediaId: {
            type: mongoose.Types.ObjectId,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)

productsScheme.plugin(mongooseDelete, {overrideMethods: "all"}) 

module.exports = mongoose.model("products", productsScheme) // products es el nombre de la tabla, en este caso es una coleccion por ser mongodb

