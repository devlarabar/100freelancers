const Client = require('../models/Client')
const mockClients = require('../config/mockClients.json')
const mockUser = require('../config/mockUser.json')

module.exports = {
    loadMockClients: async (req, res) => {
        if (process.env.NODE_ENV === 'local') {
            try {
                const user = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id
                let mockClientsWithUser = mockClients
                for (let client of mockClientsWithUser) {
                    client.user = user
                }
                await Client.insertMany(mockClients)
                res.send({ success: true })
            } catch (err) {
                res.send({ success: false, error: err })
            }
        } else {
            console.log('Mock clients cannot be loaded into the DB in prod')
            res.send({ message: 'Mock clients cannot be loaded into the DB in prod' })
        }
    }
}