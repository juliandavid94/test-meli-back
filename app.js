const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
const api = require('./routes/index.routes.js')

//adding cors exception
app.use(cors())

//routes
app.use('/api/items', api)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})