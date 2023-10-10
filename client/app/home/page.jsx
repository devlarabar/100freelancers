"use client"

import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'
import { useAuthContext } from 'contexts/AuthContext'
import ActionMenu from '@components/ui/ActionMenu'
import { useState, useEffect } from 'react'
import { fetchClients } from '@utils/client'

const Home = () => {
    const auth = useAuthContext()
    const [clients, setClients] = useState(null)

    useEffect(() => {
        fetchClients().then(data => setClients(data))
    }, [auth?.user])

    if (!auth?.user) return <Spinner />
    if (auth?.isAuthenticated() === "unauthenticated" || auth?.user === null) return redirect('/')

    return (
        <>
            <div className="px-8 pb-4">
                <ActionMenu />
            </div>
            <div className="flex flex-wrap gap-x-[2%] gap-y-4 justify-center">
                {clients === null && <Spinner />}
                {clients && clients.length > 0
                    && clients.map((client, index) => {
                        return <ClientCard client={client} key={index} />
                    })
                }
                {clients && clients.length === 0 && <p>You have not added any clients!</p>}
            </div>
        </>
    )
}

export default Home