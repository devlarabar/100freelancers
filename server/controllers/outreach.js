const Outreach = require('../models/Outreach')

module.exports = {
    getOutreaches: async (req, res) => {
        const userId = req.user.id
        const outreaches = await Outreach.find({ user: userId }).sort({ createdAt: -1 }).lean()
        res.json(outreaches)
    },
    addOutreach: async (req, res) => {
        try {
            const { client, contactDetails, responseDetails, clientWork } = req.body
            const outreach = await Outreach.create({
                user: req.user.id,
                client: client,
                contactDetails,
                responseDetails,
                clientWork
            })
            console.log('Outreach added:', outreach.client.businessName, outreach.contactDetails.contactMethod)
            res.json(`Outreach has been added.`)
        } catch (err) {
            console.log(err)
            res.status(400)
        }
    }
}