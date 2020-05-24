const path = require('path')
const express = require('express')

const server = express()

const movies = require('./routes/movies')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', movies)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
