const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
/**
 * toma objeto de usuario (name, pass, etcetc)
 * @param {*} user 
 */


const tokenSign = async ( user) => {

    const sign =  jwt.sign(

        {
            _id: user._id,
            role: user.role,

        }, // payload
        JWT_SECRET,
        {
            expiresIn: "5h"
        }
    
    );

    return sign

    
}

/**
 * pasar token de seesion jwt
 * @param {*} tokenJwt 
 * @returns 
 */

const verifyToken = async (tokenJwt ) => {

    try {
        return jwt.verify(tokenJwt,JWT_SECRET)
    } catch (e) {
        return null
    }


} // verificar que el token este firmado por nosotors

module.exports = {tokenSign, verifyToken}