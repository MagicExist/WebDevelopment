const express = require('express')
const router = express.Router()
const TipoProyectoRepository = require('../repositories/tipo_proyecto')

router.get('/',async (req,res)=>{
    try{
        const tipo_proyectos = await TipoProyectoRepository.getAll()
        res.status(200).json(tipo_proyectos)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

module.exports = router