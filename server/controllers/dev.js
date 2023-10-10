const Client = require('../models/Client')
const mockClients = require('../config/mockClients.json')

module.exports = {
    loadMockClients: async (req, res) => {
        try {
            await Client.insertMany(mockClients)
            res.send({ success: true })
        } catch (err) {
            res.send({ success: false, error: err })
        }
    }
}