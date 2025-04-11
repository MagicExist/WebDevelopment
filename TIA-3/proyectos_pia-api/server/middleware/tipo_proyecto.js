class TipoProyectoMiddleware{
    static validateData(req,res,next){
        const data = req.body
        const emptyFields = []
        for(const key in data){
            if(key === "fecha_registro"){
                continue
            }
            if(!data[key]){
                emptyFields.push(key)
            }
        }
        if (emptyFields.length > 0) {
            return res.status(400).json({ 
                "error": "Faltan campos requeridos", 
                "campos": camposFaltantes 
            });
        }
        if(data.codigo.length > 8){
            res.status(400).json({
                "error": "Datos inválidos",
                "mensaje": "El código no debe exceder los 8 caracteres"
            });
        }
        if(data.abreviatura.length > 6){
            res.status(400).json({
                "error": "Datos inválidos",
                "mensaje": "La abreviatura no debe exceder los 6 caracteres"
            });
        }
        next()
    }
}

module.exports = TipoProyectoMiddleware