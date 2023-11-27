const express = require('express')
const router = express.Router()
const stats = require('../controllers/stats')

router.get('/stats/getstats', stats.getStats)
module.exports = router