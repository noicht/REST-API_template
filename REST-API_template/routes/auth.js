const express = require('express')
const { matchedData } = require('express-validator')
const { set } = require('mongoose')
const { registerController, loginController } = require('../controllers/auth')
const {usersModel} = require('../models')
const { tokenSign } = require('../utils/handleJwt')
const { encrypt, compare } = require('../utils/handlePassword')

const {validatorRegister, validatorLogin } = require('../validators/auth')


const router = express.Router()



router.post('/register' , validatorRegister, registerController) //auth/register

router.post('/login' , validatorLogin, loginController) //auth/register

module.exports = router

