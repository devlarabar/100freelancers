const Outreach = require('../models/Outreach')
const mockUser = require('../config/mockUser.json')

module.exports = {
    getOutreaches: async (req, res) => {
        const userId = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id
        const outreaches = await Outreach.find({ user: userId }).sort({ createdAt: -1 }).lean()
        res.json(outreaches)
    },
    addOutreach: async (req, res) => {
        console.log(req.user)
        try {
            const user = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id
            const { client, contactDetails, responseDetails, clientWork } = req.body
            const outreach = await Outreach.create({
                user: user,
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