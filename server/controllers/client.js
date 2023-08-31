const Client = require('../models/Client')

module.exports = {
    getClients: async (req, res) => {
        const userId = req.user.id
        const clients = await Client.find({ user: userId }).sort({ businessName: 1 }).lean()
        res.json(clients)
    },
    addClient: async (req, res) => {
        try {
            const { businessName, businessType, address, email, phone } = req.body
            const client = await Client.create({
                user: req.user.id,
                businessName,
                businessType,
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