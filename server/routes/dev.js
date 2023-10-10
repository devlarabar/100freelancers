const express = require('express')
const router = express.Router()
const devController = require('../controllers/dev')

router.post('/loadmockclients', devController.loadMockClients)

module.exports = router