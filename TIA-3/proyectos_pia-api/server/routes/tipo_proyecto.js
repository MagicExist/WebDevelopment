const express = require('express')
const router = express.Router()
const TipoProyectoRepository = require('../repositories/tipo_proyecto')

router.get('/',async (req,res)=>{
    try{
        const result = await TipoProyectoRepository.getAll()
        res.status(200).json(result)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        if(isNaN(id)){
            res.status(400).json({ "error": 'El ID debe ser un número' });
        }

        const result = await TipoProyectoRepository.getById(id)

        if (result.length === 0) {
            return res.status(404).json({ "error": 'Elemento no encontrado' });
          }
        
        res.status(200).json(result)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

module.exports = router