const {check} = require("express-validator") // valida la data para pasarsela al controller

const validateResults = require('../utils/handleValidator')

const validatorCreateItem = [

    check("name").exists().notEmpty(),
    check("product_type").exists().notEmpty(),
    check("price").exists().notEmpty().isNumeric(),
    check("isFavourite").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req,res,next) =>  validateResults(req,res,next)



    
];

const validatorGetItem = [

 
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) =>  validateResults(req,res,next)



    
];


//IMPORTANTE: Los middlewares necesitan devolver una respuesta, responden ante una peticion y el sv devuelve respuesta

module.exports = { validatorCreateItem, validatorGetItem }