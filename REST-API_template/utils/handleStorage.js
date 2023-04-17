// aca van las funciones auxiliares para storage

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){

        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)



    },
    filename: function(req,file,cb){
        const ext = file.originalname.split(".").pop() // saca la extension ["name", "png"]
        const filename = `file-${Date.now()}.${ext}` // nombre del file + fecha en formato UNIX

        cb(null, filename)
    
    
    
    }    


})


const uploadMiddleware = multer ({storage})

module.exports = uploadMiddleware