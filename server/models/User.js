const mongoose = require('mongoose')
const { Schema, model, models } = mongoose

const UserSchema = new Schema({
    discordId: String,
    email: String,
    username: String,
    avatar: String,
    is100devs: Boolean,
    admin: Boolean,
})

const User = models.User || model("User", UserSchema)

module.exports = User