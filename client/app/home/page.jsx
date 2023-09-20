"use client"

import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'
import { useAuthContext } from 'contexts/AuthContext'
import ActionMenu from '@components/ui/ActionMenu'

const clients = [
    {
        name: 'Outshine Salon',
        businessType: 'hair salon',
        phone: '(904) 756-2648',
        email: 'outshine@salon.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Homegrown Brunch Cafe',
        businessType: 'restaurant',
        phone: '(944) 724-1618',
        email: 'homegrown@brunch.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Functional Fitness',
        businessType: 'gym',
        phone: '(346) 754-1577',
        email: 'functional@fitness.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'O-Marketing',
        businessType: 'marketing',
        phone: '(246) 755-1447',
        email: 'o@marketing.com',
        address: '555 Main Street, Houston, TX 12345'
    },
    {
        name: 'Nails Plus',
        businessType: 'nail salon',
        phone: '(166) 733-1248',
        email: 'nails@plus.com',
        address: '555 Main Street, Houston, TX 12345'
    }
]

const Home = () => {
    const auth = useAuthContext()
    
    if (!auth?.user) return <Spinner />
    if (auth?.isAuthenticated() === "unauthenticated" || auth?.user === null) return redirect('/')

    return (
        <>
            <div className="px-8 pb-4">
                <ActionMenu />
            </div>
            <div className="flex flex-wrap gap-x-[2%] gap-y-4 justify-center">
                {clients.map((client, index) => {
                    return <ClientCard client={client} key={index} />
                })}
            </div>
        </>
    )
}

export default Home