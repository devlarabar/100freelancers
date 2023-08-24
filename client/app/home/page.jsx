"use client"

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'

const Home = () => {
    const { data: session, status } = useSession()

    if (status === 'pending') return <Spinner />
    if (status === 'unauthenticated') return redirect('/')
    return (
        <div>
            Home
        </div>
    )
}

export default Home