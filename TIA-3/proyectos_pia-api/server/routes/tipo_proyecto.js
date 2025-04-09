const express = require('express')
const router = express.Router()
const TipoProyectoRepository = require('../repositories/tipo_proyecto')

router.get('/',(req,res)=>{
    try{
        const tipo_proyectos = TipoProyectoRepository.getAll()
        res.status(200).json(tipo_proyectos)
    }
    catch (error){
        res.status(500).json({'messsage' : "Erro al obtener datos"})
    }
})