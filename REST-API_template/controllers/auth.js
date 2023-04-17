const { matchedData } = require("express-validator")
const { usersModel } = require("../models")
const { handleHttpError} = require('../utils/handleError')
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")


/**
 * registra user
 * @param {*} req 
 * @param {*} res 
 */

const registerController = async (req,res) => {

    try {
        req = matchedData(req)

        const password = await encrypt(req.password)
        const body = {...req, password}
        const dataUser = await usersModel.create(body) // crea un usuario con los datos puestos en postman
    
        dataUser.set("password", undefined, {strict: false});
    
        const data = {
            user: dataUser,
            token: await tokenSign(dataUser)
        }
    
    
        res.send({data})
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR_REGISTER_USER")
        
    }


}
/**
 * loguea user
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req, res) => {

    try {
        req = matchedData(req) // curar dta

        console.log(1)

        const user = await usersModel.findOne({email:req.email}).select('password name role email')

        if(!user) {
            handleHttpError(res, "USER_DOES_NOT_EXIST", 404)
            return
        }

        const passwordHash = user.get('password')

        const check = await compare(req.password, passwordHash)

        if(!check) {
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        user.set("password", undefined, {strict: false});
   

        const data = {
            token: await tokenSign(user), // tarda en crearse 
            user
        }

        res.send({data})


    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }

}



module.exports = {registerController, loginController}