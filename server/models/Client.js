const mongoose = require('mongoose')
const { Schema, model, models } = mongoose

const ClientSchema = new Schema({
    businessName: {
        type: String,
        required: [true, 'Business name is required!'],
    },
    businessType: {
        type: String,
        required: [true, 'Business type is required!'],
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
})

const Client = models.Client || model("Client", ClientSchema)

module.exports = Client