const {check} = require("express-validator") // valida la data para pasarsela al controller

const validateResults = require('../utils/handleValidator')


const validatorRegister = [

 
    check("name").exists().notEmpty(),


    check("age").exists().notEmpty().isNumeric({max: 3}),

    check("password").exists().notEmpty().isLength({min:3, max: 40}),
 
    check("email").exists().notEmpty().isEmail(),
    (req,res,next) =>  validateResults(req,res,next),

    check("role").exists().notEmpty(),
    
];

const validatorLogin = [

 
    check("password").exists().notEmpty().isLength({min:3, max: 40}),
 
    check("email").exists().notEmpty().isEmail(),
    (req,res,next) =>  validateResults(req,res,next),


    
];





module.exports = { validatorRegister, validatorLogin }