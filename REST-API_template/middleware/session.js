const { usersModel } = require('../models')
const {handleHttpError} = require('../utils/handleError')
const {verifyToken} = require('../utils/handleJwt')
const authMw = async (req, res, next) => {

try {

    //capturar token en BD

    if(!req.headers.authorization) {
        handleHttpError(res, "NEED_SESSION", 401)
        return
    }

    const token = req.headers.authorization.split(' ').pop() // corta la palabra bearer del token
    const dataToken = await verifyToken(token)
    


    if(!dataToken._id){
        handleHttpError(res,"ERROR_ID_TOKEN", 401)
        return
    }



    const user = await usersModel.findById(dataToken._id)
    req.user = user

    next()

    
} catch (e) {

    handleHttpError(res, 'NOT_SESSION', 401)
    
}


}

module.exports = authMw