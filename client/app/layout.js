import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import Provider from '@components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '100 Freelancers',
    description: 'Organize and keep track of client outreach',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>
                    <Header />
                    <main className="app">
                        {children}
                    </main>
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout