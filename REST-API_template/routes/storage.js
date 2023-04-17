const express = require('express')
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const {createItem,getItem, getItems, updateItem,deleteItem} = require("../controllers/storage")
const {validatorGetItem} = require("../validators/storage")
/** 
 * 
*/


//TODO http://localhost:3000/api/storage

router.get('/' ,getItems) // lista items

router.get('/:id',validatorGetItem ,getItem) // detalle item

router.delete('/:id', validatorGetItem ,deleteItem) // eliminar item





router.post('/',uploadMiddleware.single("myfile"), createItem) // aca va el controller de storage

module.exports = router

// single("myfile") => devuelve un solo archivo que esoty enviando via postman con el nombre de myfile