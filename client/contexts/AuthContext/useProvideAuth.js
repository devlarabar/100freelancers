"use client"

import { useState, useEffect } from 'react'

const useProvideAuth = () => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [checkAuth, setCheckAuth] = useState(false)

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const response = await fetch(`/server/auth/getUser`, {
                method: 'GET',
                credentials: 'include'
            })
            try {
                const userData = await response.json()
                setUser(userData)
            } catch (err) {
                // No user
                setUser(null)
                setIsAuthenticated('unauthenticated')
            }
        }
        fetchCurrentUser().then(data => setCheckAuth(true))
    }, [])

    const logout = async () => {
        console.log('Logging out...')
        const response = await fetch(`/server/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        })
        setUser(null)
    }

    return {
        checkAuth,
        user,
        logout,
        isAuthenticated,
    }
}

export default useProvideAuth
