


const mongoose = require('mongoose');

const peoplesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    membershipDate: {
        type: Date,
        required: true,
        default: Date.now
        
    }
})


//export the model

module.exports = mongoose.model('Peoples', peoplesSchema)