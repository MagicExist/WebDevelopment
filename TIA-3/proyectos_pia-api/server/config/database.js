require('dotenv').config()

const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

module.exports = {
    executeQuery: async (text, params) => {
        try {
            const result = await pool.query(text, params)
            return result.rows
        } catch (error) {
            console.error('Error executing query:', error)
            throw error
        }
    },
    pool
}