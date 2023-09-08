"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = (e) => {
        if (e.target.checked) {
            localStorage.setItem('100f-theme', 'dark')
            setTheme('dark')
        }
        else {
            localStorage.setItem('100f-theme', 'light')
            setTheme('light')
        }
    }

    useEffect(() => {
        const themePref = localStorage.getItem('100f-theme')
        if (themePref === 'light') setTheme('light')
        else if (themePref === 'dark') setTheme('dark')
    }, [])

    return (
        <>
            <label className="flex items-center justify-between w-full">
                Theme:
                <input
                    id="toggle"
                    type="checkbox"
                    className="toggle"
                    checked={theme === 'dark'}
                    onChange={(e) => changeTheme(e)}
                />
            </label>
        </>
    )
}

export default ThemeToggle