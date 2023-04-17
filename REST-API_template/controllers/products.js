const { matchedData } = require("express-validator")
const {productsModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")

/**
 * Obetener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */


const getItems = async(req,res) => {

    try {
        const data = await productsModel.find({})
        const user = req.user
        
        res.send({data, user})
        

    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
        
    }



}

/**
 * Obetener un registro
 * @param {*} req 
 * @param {*} res 
 */


const getItem = async (req,res) => {


    try {
        req = matchedData(req)
        const {id} = req
        const data = await productsModel.findById(id)
        
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }


}   
/**
 * Insertar registro
 * @param {*} req 
 * @param {*} res 
 */

 

const createItem = async (req,res) => {



    try {

        // res = matchedData(req) // 
        // const body = req.body
        // const bodyClean = matchedData(req) //filtra la data y devuelve un objeto con las validaciones que yo especifique

        const body = matchedData(req)

        // const {body} = req

        // console.log(body)
        const data = await productsModel.create(body)
        res.send({data}) 
        

    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS', 403)
        
    }




}

/**
 * Actualizar registro
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = async (req,res) => {

    try {

    
        const {id, ...body} = matchedData(req)


        const data = await productsModel.findOneAndUpdate(
            id,body,{returnOriginal: false}
        )
        res.send({data}) 
        

    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS', 403)
        
    }


}

/**
 * Eliminar registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async(req,res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await productsModel.delete({_id:id})
        
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_DELETE_ITEM") // no es un soft delete
    }





}

module.exports = {getItems,getItem,createItem,updateItem,deleteItem}