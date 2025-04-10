const db = require('../config/database')

class TipoProyectoRepository {
    async getAll() {
        let query = "SELECT * FROM tipo_proyecto"
        let tipo_proyectos = await db.executeQuery(query,[])
        return tipo_proyectos
    }
}

module.exports = new TipoProyectoRepository()