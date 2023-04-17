const { matchedData } = require("express-validator")
const {usersModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")

const getFavorites = async(req,res) => {

    try {
        const data = await usersModel.find({})
        const favorites = req.user.favorites
        
        res.send({favorites})
        

    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_GET_FAVORITES', 403)
        
    }



}



const createFavorite = async(req, res) => {

    try {
        const {id, ...body} = matchedData(req)

        const data = await usersModel.findOneAndUpdate(id,body, {returnOriginal: false})

        res.send({data})


        
    } catch (e) {
        console.log(e)

        handleHttpError(res, 'ERROR_CREATE_FAVORITE', 403)
        
    }

  
}

module.exports = {getFavorites, createFavorite}