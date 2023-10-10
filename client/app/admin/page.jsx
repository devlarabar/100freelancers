"use client"

import { useAuthContext } from 'contexts/AuthContext'
import Spinner from '@components/ui/Spinner'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import Alert from '@components/ui/Alert'

const page = () => {
    const auth = useAuthContext()
    const [alert, setAlert] = useState({ message: '', type: '' })

    const loadMockClients = async (e) => {
        e.preventDefault()
        const response = await fetch("/server/dev/loadmockclients", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if (response.ok) {
            setAlert({ message: 'Mock clients have been added to the DB', type: 'success' })
        } else {
            setAlert({ message: 'Failed to add mock clients to the DB', type: 'error' })
        }
    }

    if (!auth?.checkAuth) return <Spinner />
    if (auth?.isAuthenticated() === "unauthenticated") return redirect('/')
    if (auth?.user && !auth?.user.admin) return redirect('/home')

    return (
        <section className="flex flex-col gap-4 justify-center items-center w-full max-w-lg mx-auto">
            {alert.message && <Alert message={alert.message} alertType={alert.type} />}
            <h2 className="text-center">Admin Dashboard</h2>
            {process.env.NEXT_PUBLIC_NODE_ENV === 'local' &&
                <form onSubmit={e => loadMockClients(e)} className="flex flex-col gap-4 w-full">
                    <hr />
                    <h3 className="text-center">Dev Environment & Testing</h3>
                    <input type="submit" value="Load Mock Clients" className="btn btn-sm" />
                </form>
            }

        </section>
    )
}

export default page