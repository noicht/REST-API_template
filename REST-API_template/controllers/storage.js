const fs = require('fs')
const { matchedData } = require("express-validator")
const {storageModel} = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`
const { handleHttpError } = require("../utils/handleError")


/**
 * Obetener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */


const getItems = async(req,res) => {

    try {
        const data = await storageModel.find({})
        
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, 'ERROR_LIST_ITEMS', 403)
        
    }



}

/**
 * Obetener un registro
 * @param {*} req 
 * @param {*} res 
 */


const getItem = async(req,res) => {

    try {

        const { id } = matchedData(req)
        const data = await storageModel.findById(id)
        
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, 'ERROR_DETAIL_ITEMS', 403)
        
    }




}   
/**
 * Insertar registro
 * @param {*} req 
 * @param {*} res 
 */

 

const createItem = async (req,res) => {
    
    try {
        const {body, file} = req

        console.log(file)
    
        const fileData =  {
            filename: file.filename,
            url:`${PUBLIC_URL}/${file.filename}` 
    
        }
    
    
        const data = await storageModel.create(fileData)
    
    
        res.send({data})
        
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_DETAIL_ITEMS', 403)
    }








}

/**
 * Actualizar registro
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = async(req,res) => {


} // no tendria mucho sentido usar esto

/**
 * Eliminar registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async(req,res) => {

    try {

        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id)
        const {filename}= dataFile
        await storageModel.delete({_id:id})
        const filePath = `${MEDIA_PATH}/${filename}`

        // fs.unlinkSync(filePath) delete fisico
        const data = {
            filePath,
            deleted: 1
        }
        
        res.send({data})
        
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_DETAIL_ITEMS', 403)
        
    }




}

module.exports = {getItems,getItem,createItem,updateItem,deleteItem}