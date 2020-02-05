const express = require('express')
const service = require('../services/registrant')
const response = require('../helpers/response')
const mailer = require('../helpers/mailer')
const auth = require('../middleware/auth')

const router = express.Router()

// Get All Registrant
router.get('/', auth.verify, async (req, res) => {
    const result = await service.getAll()
    return await response(res, true, 'success get All registrant', result, 200)
})

// Get One Registrant by ID
router.get('/:id', auth.verify, async (req, res) => {
    const result = await service.getOne({ id: req.params.id })
    return await response(res, true, 'success get one registrant', result, 200)
})

// Create Registrant
router.post('/', async (req, res) => {
    req.body.status = 0
    const result = await service.create(req.body)
    const sendEmail = await mailer('ahmadhaqqi690@gmail.com', req.body.email, 'Pendaftaran', {
        name: req.body.name
    })
    return await response(res, true, 'success create registrant', result, 201)
})

// Update Registrant By ID
router.put('/:id', async (req, res) => {
    const result = await service.update(req.body, { id: req.params.id })
    return await response(res, true, 'success create registrant', result, 201)
})

// Delete Registrant
router.delete('/:id', async (req, res) => {
    const result = await service.destroy({ id: req.params.id })
    return await response(res, true, 'success delete registrant', result, 200)
})

module.exports = router
