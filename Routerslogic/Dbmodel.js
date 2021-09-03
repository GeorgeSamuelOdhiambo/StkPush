const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postschema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    mssidn: {
        type: String,
        required: true
    },
    requestID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    callBackStatus:{
        type: Boolean,
        required: true
    },
    resultCode: {
        type: String,
        required: true
    },
    resultDesc: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Post',postschema);