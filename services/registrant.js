const { Registrant } = require('../models')

const getAll = async () => {
    const result = await Registrant.findAll()
    if(!result) {
        throw Error('Failed to get all Registrant')
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

const getOne = async (where) => {
    const result = await Registrant.findOne({
        where: where
    })
    if(!result) {
        throw Error('Failed to get Registrant')
    }
    return result
}

const update = async (data, where) => {
    const result = await Registrant.update(data, { where: where })
    if(!result) {
        throw Error('Failed to update Registrant')
    }
    return result
}

const destroy = async (where) => {
    const result = await Registrant.destroy({ where: where })
    if(!result) {
        throw Error('Failed to delete Registrant')
    }
    return result
}

module.exports = {
    getAll,
    create,
    getOne,
    update,
    destroy
}