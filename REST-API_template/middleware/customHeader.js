const customHeader = (req, res, next) => {
    // console.log(req.headers) // ej de header: user-agent, host, etc.
    // next()

    try {
        const apiKey = req.headers.api_key 

        if(apiKey === 'aabbcc123'){
            next()
        }
        else {
            res.status(403)
            res.send({error: "API KEY INCORRECTA"})
        }
    } catch (e) {
        res.status(403)
        res.send({error: "HUBO_QUILOMBO_EN_EL_HEADER"})
        
    }
}
module.exports = customHeader

// en middlewares, es importante ponerle req, res, next a la funcion

// next() continua con la ejecucion del codigo (deja fluir, simil a un continue)

// TODO: Eliminar esto, no deberia ir en el challenge final ya que no tiene relevancia en el codigo

