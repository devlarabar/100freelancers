const Client = require('../models/Client')
const mockUser = require('../config/mockUser.json')

module.exports = {
    getClients: async (req, res) => {
        const userId = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id
        const clients = await Client.find({ user: userId }).sort({ businessName: 1 }).lean()
        res.json(clients)
    },
    addClient: async (req, res) => {
        try {
            const user = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id
            const { businessName, businessType, address, email, phone } = req.body
            const client = await Client.create({
                user: user,
                businessName,
                businessType: businessType.toLowerCase(),
                address,
                email,
                phone
            })
            console.log('Client added:', client.businessName)
            res.json(`Client "${req.body.businessName}" has been added.`)
        } catch (err) {
            console.log(err)
            res.status(400)
        }
    }
}