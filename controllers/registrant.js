const express = require('express')
const service = require('../services/registrant')
const response = require('../helpers/response')
const mailer = require('../helpers/mailer')
const auth = require('../middleware/auth')
const qrcode = require('qrcode')

const router = express.Router()

// Get All Registrant
router.get('/', auth.verify, async (req, res) => {
    try {
        const result = await service.getAll()
        if(result.length < 1) {
            return await response(res, true, 'Registrant is empty', {}, 200)
        }
        return await response(res, true, 'success get All registrant', result, 200)
    } catch (error) {
        return await response(res, false, 'Error', error, 500)
    }
})

// Get One Registrant by ID
router.get('/:regisId', auth.verify, async (req, res) => {
    try {
        const result = await service.getOne({ regisId: req.params.regisId })
        return await response(res, true, 'success get one registrant', result, 200)
    } catch (error) {
        console.log(error)
        return await response(res, false, 'Error', error, 500)
    }
})

// Create Registrant
router.post('/', async (req, res) => {
    try {
        req.body.status = 0
        req.body.regisId = 'feb-'+new Date().getMilliseconds()
        const result = await service.create(req.body)
        const qrcodeImage = await qrcode.toDataURL(req.body.regisId, { width: 300 })
        const sendEmail = await mailer('ahmadhaqqi690@gmail.com', req.body.email, 'Pendaftaran Event', {
            name: req.body.name,
            email: req.body.email,
            qrcode: qrcodeImage
        })
        return await response(res, true, 'success create registrant', result, 201)
    } catch (error) {
        return await response(res, false, 'Error', error, 500)
    }
})

// Update Registrant By ID
router.put('/:id', async (req, res) => {
    try {
        const result = await service.update(req.body, { id: req.params.id })
        return await response(res, true, 'success create registrant', result, 201)
    } catch (error) {
        return await response(res, false, 'Error', error, 500)
    }
})

// Delete Registrant
router.delete('/:id', async (req, res) => {
    try {
        const result = await service.destroy({ id: req.params.id })
        return await response(res, true, 'success delete registrant', result, 200)
    } catch (error) {
        return await response(res, false, 'Error', error, 500)
    }
})

router.put('/status/:regisId', async (req, res) => {
    try {
        console.log(req.params.regisId)
        console.log(req.body)
        const result = await service.update({ status: req.body.status }, { regisId: req.params.regisId })
        if(result[0] == 0) {
            return await response(res, true, 'success update status registrant', { 'message': 'registrant not found!' }, 404)    
        }
        return await response(res, true, 'success update status registrant', result, 200)
    } catch (error) {
        console.log(error)
        return await response(res, false, 'Error', error, 500)
    }
})
module.exports = router
