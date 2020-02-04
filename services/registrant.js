const { Registrant } = require('../models')

const getAll = async () => {
    const result = await Registrant.findAll()
    if(!result) {
        throw Error('Failed to get Registrant')
    }
    return result
}

const create = async (data) => {
    const result = await Registrant.create(data)
    if(!result) {
        throw Error('Failed to create Registrant')
    }
    return result
}

module.exports = {
    getAll,
    create
}