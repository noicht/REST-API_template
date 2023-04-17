const express = require('express')

const { validatorCreateItem, validatorGetItem } = require('../validators/products')
const { getItems, getItem, createItem, updateItem,deleteItem } = require('../controllers/products')
const customHeader = require('../middleware/customHeader')
const authMw = require('../middleware/session')
const checkRole = require('../middleware/role')
const router = express.Router()




//TODO http://localhost/products GET POST DELETE PUT

// lista items

router.get('/', authMw ,getItems)

// obtener detalle de item
router.get('/:id',authMw,validatorGetItem ,getItem)

router.post('/',authMw ,checkRole(["admin"]),validatorCreateItem ,createItem) // puedo meter la cantidad de muddlewares que quiera en un solo request

// actualizar registro

router.put('/:id',authMw ,validatorCreateItem, validatorGetItem, updateItem)
// router
router.delete('/:id', authMw,validatorGetItem, deleteItem)
module.exports = router