const jwt = require('jsonwebtoken')
const response = require('../helpers/response')

module.exports = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            return await response(res, false, 'token not existed', {}, 401)
        }
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET)
        if(!decoded) {
            return await response(res, false, 'token unrecognized', {}, 400)
        }
        next()
    } catch (error) {
        return await response(res, false, 'Error', error, 500)
    }
}