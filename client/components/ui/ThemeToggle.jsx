"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const changeTheme = (e) => {
        if (e.target.checked) {
            localStorage.setItem('brc-theme', 'dark')
            setTheme('dark')
        }
        else {
            localStorage.setItem('brc-theme', 'light')
            setTheme('light')
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const themePref = localStorage.getItem('brc-theme')
        if (themePref === 'light') setTheme('light')
        else if (themePref === 'dark') setTheme('dark')
    }, [])

    if (!mounted) {
        return null
    } else return (
        <>
            <label className="flex items-center justify-between w-full">Theme: <input id="toggle" type="checkbox" className="toggle" checked={theme === 'dark'} onChange={(e) => changeTheme(e)} /></label>
        </>
    )
}

export default ThemeToggle