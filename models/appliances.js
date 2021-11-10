const mongoose = require('mongoose');

const schema = mongoose.Schema;

const getStates = new schema({
    app1state: {
        type: Number,
        required: true,
    },
    app2state: {
        type: Number,
        required: true,
    },
    app3state: {
        type: Number,
        required: true,
    },
    app4state: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('appliance', getStates);