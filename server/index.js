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
app.use(cookieParser('keyboard cat'))
app.set('trust proxy', 1)

if (process.env.NODE_ENV === 'local') {
    console.log('Local env running')
    app.use(
        session({
            secret: process.env.SESSION_SECRET || 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        })
    )
} else {
    console.log('Prod env running')
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

// ***************************** 
// Routers

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const clientRoutes = require('./routes/client')
const outreachRoutes = require('./routes/outreach')

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/client', clientRoutes)
app.use('/outreach', outreachRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
