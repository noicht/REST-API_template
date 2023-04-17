const express = require('express')

const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname // ruta absoluta donde se encuentra un archivo en mi maquina

const removeExtension = (fileName) => {

    return fileName.split('.').shift() // => [products, js]
}

const x = fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)

    if(name !== 'index') {

        console.log(name)

        router.use(`/${name}`, require(`./${file}`)) // http://localhost:3000/api/loquevayaenname (products, storage, users)
        // router hace uso de un archivo del sistema
    }

}) //HELP no entiendo bien para que sirve esto, UPDATE: ya entendi


// console.log({x}) // muestra archivos de ruta

module.exports = router