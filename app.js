const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const { router } = require('./middleware/auth')
const routes = require('./routers')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/auth', router)
app.use('/', routes)

module.exports = app

