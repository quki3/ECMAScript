import express from 'express'
import morgan from 'morgan'

/***			config server 			***/
const server = express()
server.use(morgan('dev'))

module.exports = server

