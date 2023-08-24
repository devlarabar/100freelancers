"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Header = () => {
    const { data: session } = useSession()
    const [homeLink, setHomeLink] = useState('/')

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setupProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setupProviders()
    }, [])

    useEffect(() => {
        if (session?.user) {
            setHomeLink('/home')
        }
    }, [session])

    return (
        <header class="navbar bg-base-100">
            <div class="flex-1">
                <Link href={homeLink} class="btn btn-ghost normal-case text-xl">100freelancers</Link>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                </div>
                {session?.user ? (
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <Image src={session?.user.image || "assets/images/logo.svg"}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="Profile"
                                />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={'/profile'} class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li><Link href={'/settings'}>Settings</Link></li>
                            <li><span className="pointer" onClick={() => {
                                signOut()
                                redirect('/')
                            }}>Logout</span></li>
                        </ul>
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

            </div>
        </header>
    )
}

export default Header