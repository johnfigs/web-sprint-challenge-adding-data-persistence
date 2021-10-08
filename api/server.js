// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')

const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

const server = express()

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)

server.use(helmet())
server.use(express.json())

module.exports = server