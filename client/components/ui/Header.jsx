"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useAuthContext } from '@contexts/AuthContext'

const Header = ({ layoutMode, setLayoutMode }) => {
    const auth = useAuthContext()
    const [homeLink, setHomeLink] = useState('/')
    const [doRedirect, setDoRedirect] = useState(false)


    useEffect(() => {
        if (auth?.user) {
            setHomeLink('/home')
        }
    }, [auth?.user])

    useEffect(() => console.log(auth), [])

    const logOut = async (event) => {
        auth.logout()
        setDoRedirect(true)
    }

    if (doRedirect) {
        redirect('/')
    }

    return (
        <header className="navbar bg-base-100 dark:bg-slate-700 dark:text-slate-400">
            <div className="flex-1">
                <Link href={homeLink} className="btn btn-ghost normal-case text-xl">100freelancers</Link>
            </div>
            {auth?.user && <ul className="menu menu-horizontal">
                <li><Link href="/client/add">Client</Link></li>
                <li><Link href="/outreach/add">Outreach</Link></li>
            </ul>}
            <div className="form-control flex flex-row gap-1 mr-2">
                <input id="toggle" type="checkbox" className="toggle" checked={layoutMode === 'dark'} onChange={(e) => {
                    if (e.target.checked) setLayoutMode('dark')
                    else setLayoutMode('light')
                }} />
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto dark:bg-slate-500 dark:text-slate-100"
                    />
                </div>
                {auth?.user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src={auth?.user.avatar || ""}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="Profile"
                                />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={'/profile'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link href={'/settings'}>Settings</Link></li>
                            <li><span className="pointer" onClick={logOut}>Logout</span></li>
                        </ul>
                    </div>

                )
                    : (<>
                        <form action={`${process.env.NEXT_PUBLIC_API_URL}/auth/discord`}>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            // onClick={logIn}
                            >
                                Sign In
                            </button></form>
                    </>)
                }

            </div>
        </header>
    )
}

export default Header