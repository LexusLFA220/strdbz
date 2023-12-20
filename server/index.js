
const express = require('express')

const db = require('./db')

const path = require('path')

const app = express();

const PORT = 3000

const clientPath = path.resolve(__dirname, '../client/dist')

app.use(express.static(clientPath))
//Route
app.get('/', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
  })
  app.get('/dbz/fighters', db.getFighterz)

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })