const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const registrant = require('../controllers/registrant')

router.use('/registrant', registrant)

module.exports = router