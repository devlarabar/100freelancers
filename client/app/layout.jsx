

import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import AuthProvider from '@contexts/AuthContext'
// import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '100 Freelancers',
    description: 'Organize and keep track of client outreach',
}

const RootLayout = ({ children }) => {
    // const [layoutMode, setLayoutMode] = useState('dark')

    // useEffect(() => {
    //     setLayoutMode(localStorage.getItem('layoutMode') || 'light')
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('layoutMode', layoutMode)
    // }, [layoutMode])

    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Header />
                    <main className="content">
                        {children}
                    </main>
                </AuthProvider>
                <Footer />
            </body>
        </html >
    )
}

export default RootLayout