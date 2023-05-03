const mongoose = require('mongoose')

const subscheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bikename: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('subscriber', subscheme)
