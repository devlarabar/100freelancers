const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/getUser', authController.getUser)
router.get('/discord', authController.authDiscord)
router.get('/discord/callback', authController.authDiscordCallback)
router.post('/logout', authController.logout)

module.exports = router