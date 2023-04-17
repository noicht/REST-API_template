const { handleHttpError } = require("../utils/handleError")



/**
 * array con roles permitidos
 */


const checkRole = (role) => (req,res,next) => {
    console.log(22)
    try {
        const {user} = req // no hace falta consultar a la base de datos ya que esta hecho en session.js
        console.log({user})
        const rolesByUser = user.role // default user



        const checkValueRole = role.some((singleRole) => rolesByUser.includes(singleRole)) // true si existe en el array un valor de rol valido (admin, user, mod,etc)
        

        if(!checkValueRole){
            handleHttpError(res, "USER_HAS_NO_PERMISSION",403)
            return
        }



        next();
        
    } catch (e) {
        console.log(e)
        handleHttpError(res, "PERMISSION_ERROR", 403)
    }

} 

module.exports = checkRole