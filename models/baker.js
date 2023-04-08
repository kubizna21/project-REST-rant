const mongoose = require('mongoose')

const baker_schema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        enum: ['Rachel', 'Joey', 'Monica', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: { type: Date, required: true },
    bio: String
})

module.exports = mongoose.model('baker_schema', baker_schema)