const bcryptjs = require('bcryptjs')


/**
 * contrasenia sin encriptar
 * @param {*} plainPassword 
 */


const encrypt = async(plainPassword) => {

    const hash = await bcryptjs.hash(plainPassword, 10)

    return hash


}

/**
 * pasar pass sin encriptar y pasar pass encriptado
 * 
 * @param {*} plainPassword 
 * @param {*} passwordHash 
 */

const compare = async(plainPassword, passwordHash) => {

    return await bcryptjs.compare(plainPassword, passwordHash)

}

module.exports = { encrypt, compare}