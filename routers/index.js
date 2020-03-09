const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const registrant = require('../controllers/registrant')

router.get('/', (req, res) => {
    res.json({ status: 'ok' })
})

router.use('/auth', auth)
router.use('/registrant', registrant)

module.exports = router
