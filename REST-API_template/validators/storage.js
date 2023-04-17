const {check} = require("express-validator") // valida la data para pasarsela al controller

const validateResults = require('../utils/handleValidator')

// const validatorCreateItem = [

//     check("filename").exists().notEmpty(),
//     check("url").exists().notEmpty(),

//     (req,res,next) =>  validateResults(req,res,next)



    
// ]; // multer ya valida esto


const validatorGetItem = [

 
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) =>  validateResults(req,res,next)



    
];


//IMPORTANTE: Los middlewares necesitan devolver una respuesta, responden ante una peticion y el sv devuelve respuesta

module.exports = { validatorGetItem }