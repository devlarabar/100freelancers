const Client = require('../models/Client')

module.exports = {
    addClient: async (req, res) => {
        try {
            const { businessName, businessType, address, email, phone } = req.body
            const client = await Client.create({
                businessName,
                businessType,
                address,
                email,
                phone
            })
            console.log('Client added:', client)
            res.json(`Client "${req.body.businessName}" has been added.`)
        } catch (err) {
            console.log(err)
            res.status(400)
        }
    }
}