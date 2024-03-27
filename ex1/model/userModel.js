const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        type: String, unique: true
    },
    address: {
        required: true,
        type: String
    },
    dateOfBirth: {
        required: true,
        type: Date
    },
    phone: {
        required: true,
        type: String
    },
    mobilePhone: {
        required: true,
        type: String
    },
    dateOfPositiveResult: {
        required: false,
        type: Date
    },
    recoveryDate: {
        required: false,
        type: Date
    },
})

module.exports = mongoose.model('user', dataSchema)