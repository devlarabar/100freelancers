"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Provider from '../Provider'

const Header = () => {
    const { data: session } = useSession()

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setupProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setupProviders()
    }, [])

    const signOut = (event) => { }
    return (
        <header className="flex w-100 bg-slate-800 h-24 p-5">
            {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <button type="button" onClick={signOut} className="outline_btn">Sign out</button>
                        <Link href="/profile">
                            <Image src={session?.user.image || "assets/images/logo.svg"}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="Profile"
                            />
                        </Link>
                    </div>
                )
                    : (<>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>)
                }
        </header>
    )
}

export default Header