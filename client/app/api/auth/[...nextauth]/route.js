import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import User from '@models/User'
import { connectToDB } from '@utils/database'

const handler = NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email })
            session.user.id = sessionUser._id.toString();
            return session
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                // check if user already exists
                const userExists = await User.findOne({ email: profile.email })
                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    console.log(`${profile.username} signed in.`)
                    await User.create({
                        email: profile.email,
                        username: profile.username.toLowerCase(),
                        image: profile.image_url,
                    })
                }
                return true
            } catch (error) {
                console.log("Error checking if user exists: ", error.message)
                return false
            }
        },
    }
})

export { handler as GET, handler as POST }