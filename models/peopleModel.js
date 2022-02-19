


const mongoose = require('mongoose');

const peoplesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    membershipDate: {
        type: Date,
        default: Date.now
    }
})


//export the model

module.exports = mongoose.model('Peoples', peoplesSchema)