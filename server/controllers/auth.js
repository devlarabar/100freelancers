const passport = require('passport')

module.exports = {
    authDiscord: passport.authenticate("discord"),
    authDiscordCallback: passport.authenticate("discord", {
        failureRedirect: process.env.FRONTEND_URL,
        successRedirect: `${process.env.FRONTEND_URL}/home`
    }),
    logout: (req, res, next) => {
        const username = req.user.username
        req.logout(() => {
            if (process.env.NODE_ENV !== 'test') console.log(`${username} has logged out.`)
        })
        req.session.destroy(err => {
            if (err && process.env.NODE_ENV !== "test")
                console.log(`Session could not be destroyed during logout for user: ${username}.`, next(err))
            req.user = null
            return res.json({ message: 'Logout successful.' })
        })
    },
    getUser: (req, res) => {
        console.log(req.sessionID, req.session, req)
        console.log('User:', req.user?.username || null)
        res.send(req.user)
    },
}