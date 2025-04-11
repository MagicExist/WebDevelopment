const express = require('express')
const router = express.Router()
const TipoProyectoRepository = require('../repositories/tipo_proyecto')
const TipoProyectoMiddleware = require('../middleware/tipo_proyecto')

router.get('/',async (req,res)=>{
    try{
        const result = await TipoProyectoRepository.getAll()
        res.status(200).json(result)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

router.get('/:id',TipoProyectoMiddleware.validateId,async(req,res)=>{
    try{
        const {id} = req.params
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

router.post("/",TipoProyectoMiddleware.validateData,async(req,res)=>{
    try{
        const data = req.body
        const result = await TipoProyectoRepository.create(data)

        res.status(201).json(result)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

router.put("/:id",TipoProyectoMiddleware.validateData,async(req,res)=>{
    try{
        const {id} = req.params
        const data = req.body
        const result = await TipoProyectoRepository.update(id,data)

        if (result.length === 0) {
            return res.status(404).json({ "error": 'Elemento no encontrado' });
        }

        res.status(200).json(result)
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

router.delete('/:id',TipoProyectoMiddleware.validateId,async(req,res)=>{
    try{
        const {id} = req.params
        const result = await TipoProyectoRepository.delete(id)

        if (result.length === 0) {
            return res.status(404).json({ "error": 'Elemento no encontrado' });
        }
        
        res.status(200).json({'messsage' : "tipo proyecto eliminado correctamente","data" : result})
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})


module.exports = router