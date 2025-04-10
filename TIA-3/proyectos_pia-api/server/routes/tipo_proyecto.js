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
    }
    catch (error){
        res.status(500).json({'messsage' : "Error al obtener datos","Error" : error.message})
    }
})

module.exports = router