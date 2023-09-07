const DiscordStrategy = require('passport-discord').Strategy
const User = require('../models/User')

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        console.log('Serializing user:', user)
        done(null, user.id)
    })

    passport.deserializeUser(async (id, cb) => {
        console.log('Deserializing user...')
        try{
            const user = await User.findOne({ _id: id }).exec()
            const userInformation = {
                username: user.username,
                id: user._id,
                admin: user.admin,
                avatar: `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
            }
            console.log(userInformation)
            cb(null, userInformation)
        } catch (err) {
            cb(err)
        }
    })

    passport.use(
        new DiscordStrategy({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: `/server/auth/discord/callback`,
            scope: ['identify', 'email', 'guilds'],
            passReqToCallback: true,
        },
            async function (req, accessToken, refreshToken, profile, cb) {
                const is100devs = profile.guilds.some(server => server.id === '735923219315425401')
                let user = await User.findOne({ discordId: profile.id }).exec()
                try {
                    if (!user) {
                        console.log('Logging in...')
                        user = await User.create({
                            discordId: profile.id,
                            email: profile.email,
                            username: profile.username,
                            avatar: profile.avatar,
                            is100devs: is100devs,
                            admin: false
                        })
                        return cb(null, user)
                    } else {
                        user.username = profile.username
                        user.avatar = profile.avatar
                        const updatedUser = await user.save()
                        return cb(null, updatedUser)
                    }
                } catch (err) {
                    console.log(err)
                    return cb(err, false)
                }
            }
        )
    )
}
