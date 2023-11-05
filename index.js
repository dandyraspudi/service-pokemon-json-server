const jsonServer = require('json-server')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 8000

// const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults()

app.use(cors())
app.use(jsonServer.bodyParser)
app.use(router)

app.listen(port);
