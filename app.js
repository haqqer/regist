const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const auth = require('./middleware/auth')
const { router } = require('./middleware/auth')
const routes = require('./routers')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/auth', router)
app.use('/', auth.verify, routes)

module.exports = app

