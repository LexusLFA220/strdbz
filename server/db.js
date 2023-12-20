const Pool = require('pg').Pool
const pool = new Pool({
  user: 'alexa',
  host: 'localhost',
  database: 'fighterz',
  password: 'lexus',
  port: 5432,
})

 //Get all links from fighterz db
 const getFighterz = (req, res) => {
  pool.query('SELECT * FROM fighterz ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}
module.exports = {
  getFighterz,
}