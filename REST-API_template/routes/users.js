const express = require('express')

// const { validatorCreateItem, validatorGetItem } = require('../validators/products')
const { getFavorites, createFavorite } = require('../controllers/users')
const customHeader = require('../middleware/customHeader')
const authMw = require('../middleware/session')
const checkRole = require('../middleware/role')
const router = express.Router()




//TODO http://localhost/users GET POST DELETE PUT

// lista items

router.get('/favorites', authMw ,getFavorites)



router.post('/favorites/:id', authMw ,createFavorite)


// router.delete('/:id/favourites', authMw,validatorGetItem, deleteFavorite)
module.exports = router