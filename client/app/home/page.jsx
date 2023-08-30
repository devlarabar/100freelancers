"use client"

import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'
import { useAuthContext } from 'contexts/AuthContext'

const clients = [
    {
        name: 'hi',
        businessType: 'hair salon',
        phone: '9047562648'
    }
]

const Home = () => {
    const auth = useAuthContext()

    if (!auth?.user) return <Spinner />
    if (auth?.user === "unauthenticated") return redirect('/')

    return (
        <div>
            {clients.map((client, index) => {
                return <ClientCard client={client} key={index}/>
            })}
        </div>
    )
}

export default Home