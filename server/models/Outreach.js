const mongoose = require('mongoose')
const { Schema, model, models } = mongoose

const OutreachSchema = new Schema({
    contactDetails: {
        contacted: {
            type: Boolean,
            required: [true, 'Contacted status is required!']
        },
        contactMethod: {
            type: String,
            required: false
        },
        contactDate: {
            type: Date,
            required: false
        }
    },
    responseDetails: {
        responded: {
            type: Boolean,
            required: [true, 'Contacted status is required!']
        },
        responseDate: {
            type: Date,
            required: false
        },
        responseYes: {
            type: Boolean,
            required: false
        }
    },
    client: {
        proposalSent: Boolean,
        contractSent: Boolean,
        siteCompleted: Boolean,
        paid: Boolean
    }
})

const Outreach = models.Outreach || model("Outreach", OutreachSchema)

module.exports = Outreach