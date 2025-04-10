const db = require('../config/database')

class TipoProyectoRepository {
    async getAll() {
        let query = "SELECT * FROM tipo_proyecto"
        let tipo_proyectos = await db.executeQuery(query,[])
        return tipo_proyectos
    }
    async getById(id){
        const query = "SELECT * FROM tipo_proyecto WHERE id = $1"
        let tipo_proyecto = await db.executeQuery(query,[id])
        return tipo_proyecto
    }
}

module.exports = new TipoProyectoRepository()