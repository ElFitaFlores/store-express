const express = require('express')
const routerApi = require('./routes/indexRouter')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/json', (req, res) => {
  res.json({name: 'json endpoint'})
})

routerApi(app)

app.listen(port, () => {
  console.log('Corriendo')
})
