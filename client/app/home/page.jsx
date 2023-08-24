"use client"

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'

const clients = [
    {
        name: 'hi',
        businessType: 'hair salon',
        phone: '9047562648'
    }
]

const Home = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') return <Spinner />
    if (status === 'unauthenticated') return redirect('/')
    return (
        <div>
            {clients.map((client, index) => {
                <ClientCard client={client} key={index}/>
            })}
        </div>
    )
}

export default Home