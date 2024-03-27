const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    dateOfCoronaVaccine: {
        required: true,
        type: Date
    },
    manufacturerOfVaccine: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('coronaVaccine', dataSchema)