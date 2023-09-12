"use client"

import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'
import { useAuthContext } from 'contexts/AuthContext'

const clients = [
    {
        name: 'Outshine Salon',
        businessType: 'hair salon',
        phone: '9047562648',
        email: 'outshine@salon.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Homegrown Brunch Cafe',
        businessType: 'restaurant',
        phone: '9447241618',
        email: 'homegrown@brunch.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Functional Fitness',
        businessType: 'gym',
        phone: '3467541577',
        email: 'functional@fitness.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'O-Marketing',
        businessType: 'marketing',
        phone: '2467551447',
        email: 'o@marketing.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Nails Plus',
        businessType: 'nail salon',
        phone: '1667331248',
        email: 'nails@plus.com',
        address: '555 Main Street, Houston, TX 12345'
    }
]

const Home = () => {
    const auth = useAuthContext()

    if (auth?.user === undefined) return <Spinner />
    if (auth?.user === "unauthenticated" || auth?.user === null) return redirect('/')

    return (
        <div className="flex flex-wrap gap-x-[2%] gap-y-4 justify-center">
            {clients.map((client, index) => {
                return <ClientCard client={client} key={index} />
            })}
        </div>
    )
}

export default Home