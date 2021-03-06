const express = require('express')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const bcrypt = require('bcrypt')
const response = require('../helpers/response')

const router = express.Router()
require('dotenv').config()

router.post('/login',  async (req, res) => {
    const data = req.body
    const user = await User.findOne({
        where: {
            email: data.email.toLowerCase()
        }
    })
    if(!user) {
        return await response(res, false, 'User not found', {}, 401)
    }
    if(!bcrypt.compareSync(data.password, user.password)) {
        return await response(res, false, 'Email or Password is wrong', {}, 401)
    }
    const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET, { expiresIn: 86400 })
    if (!token) {
        return await response(res, false, 'Failed to create token', {}, 500)
    }
    return await response(res, true, 'login success', { token: token, user: user }, 200)
})

const verify = async (req, res, next) => {
    if(!req.headers.authorization) {
        return await response(res, false, 'token not existed', {}, 401)
    }
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET)
    if(!decoded) {
        return await response(res, false, 'token unrecognized', {}, 400)
    }
    console.log(decoded)
    next()
}
module.exports = { 
    router,
    verify
}