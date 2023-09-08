import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import AuthProvider from '@contexts/AuthContext'
import ToggleThemeProvider from '@contexts/ThemeContext/useProvideTheme'
import ThemeToggle from '@components/ui/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '100 Freelancers',
    description: 'Organize and keep track of client outreach',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToggleThemeProvider>
                    <AuthProvider>
                        <Header ThemeToggle={ThemeToggle} />
                        <main className="content">
                            {children}
                        </main>
                    </AuthProvider>
                    <Footer />
                </ToggleThemeProvider>
            </body>
        </html >
    )
}

export default RootLayout