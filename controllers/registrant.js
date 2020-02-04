const express = require('express')
const service = require('../services/registrant')
const response = require('../helpers/response')
const mailer = require('../helpers/mailer')

const router = express.Router()

router.get('/', async (req, res) => {
    const result = await service.getAll()
    return await response(res, true, 'success', result, 200)
})

router.post('/', async (req, res) => {
    req.body.status = 0
    const result = await service.create(req.body)
    mailer()
    return await response(res, true, 'success data', result, 201)
})

module.exports = router