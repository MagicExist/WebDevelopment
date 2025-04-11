const db = require('../config/database')

class TipoProyectoRepository {
    async getAll() {
        const query = "SELECT * FROM tipo_proyecto"
        let tipo_proyectos = await db.executeQuery(query,[])
        return tipo_proyectos
    }
    async getById(id){
        const query = "SELECT * FROM tipo_proyecto WHERE id = $1"
        let tipo_proyecto = await db.executeQuery(query,[id])
        return tipo_proyecto
    }
    async create(req){
        const query = "INSERT INTO tipo_proyecto(codigo,descripcion,abreviatura,fecha_registro)VALUES($1,$2,$3,$4) RETURNING *;"
        const params = [
            req.codigo,
            req.descripcion,
            req.abreviatura,
            req.fecha_registro
        ]
        let tipo_proyecto = await db.executeQuery(query,params)
        return tipo_proyecto
    }
    async update(id,req){
        const query = "UPDATE tipo_proyecto SET codigo = $1, descripcion = $2, abreviatura = $3,fecha_registro = $4 WHERE id = $5 RETURNING *;"
        const params = [
            req.codigo,
            req.descripcion,
            req.abreviatura,
            req.fecha_registro,
            id
        ]
        let tipo_proyecto = await db.executeQuery(query,params)
        return tipo_proyecto
    }
}

module.exports = new TipoProyectoRepository()