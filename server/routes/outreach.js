const express = require('express')
const router = express.Router()
const outreachController = require('../controllers/outreach')

router.get('/getoutreaches', outreachController.getOutreaches)
router.post('/add', outreachController.addOutreach)

module.exports = router