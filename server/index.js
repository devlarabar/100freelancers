const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const connectDB = require('./config/database')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')
const mockUser = require('./config/mockUser.json')
const User = require('./models/User')
require('dotenv').config({ path: './config/.env' })
const PORT = 4000

// ***************************** 
// Middleware

app.use(express.json())
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
)

// ***************************** 
// Sessions (MongoDB)

app.use(cookieParser())
app.set('trust proxy', 1)

if (process.env.NODE_ENV === 'local') {
    app.use(
        session({
            secret: process.env.SESSION_SECRET || 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        })
    )
} else {
    console.log('Running production environment...')
    app.use(
        session({
            secret: process.env.SESSION_SECRET || 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            store: new MongoStore({ mongooseConnection: mongoose.connection }),
            cookie: {
                secure: true, // Set to true if you're using HTTPS
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24, // 1 day
                sameSite: "none",
            }
        })
    )
}
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

// Set up mock user in local environment
// if (process.env.NODE_ENV === "local") {
//     console.log("Running local environment (using Mock User)")
//     app.use(async (req, res, next) => {
//         if (process.env.MOCK_USER !== "true") return next()
//         req.user = mockUser
//         await User.findOneAndUpdate(
//             { _id: mockUser._id },
//             { $setOnInsert: mockUser },
//             { upsert: true, new: true }
//         ).exec()
//         next()
//     })
// }

// ***************************** 
// Routers

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const clientRoutes = require('./routes/client')
const outreachRoutes = require('./routes/outreach')

app.use('/server/', homeRoutes)
app.use('/server/auth', authRoutes)
app.use('/server/client', clientRoutes)
app.use('/server/outreach', outreachRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})

module.exports = app