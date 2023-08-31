"use client"

import Spinner from '@components/ui/Spinner'
import { useAuthContext } from 'contexts/AuthContext'
import { useState } from 'react'
import { redirect } from 'next/navigation'

const AddClient = () => {
    const auth = useAuthContext()
    const [client, setClient] = useState({
        businessName: '',
        businessType: '',
        address: '',
        email: '',
        phone: '',
    })
    const [doRedirect, setDoRedirect] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(false)

    const addClient = async (e) => {
        e.preventDefault()
        setSubmitDisabled(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client),
            credentials: 'include'
        })
        if (response.ok) setDoRedirect(true)
    }
    if (doRedirect) redirect('/home')

    if (!auth?.user) return <Spinner />
    if (auth?.user === "unauthenticated") return redirect('/')

    return (
        <form onSubmit={(e) => addClient(e)}>
            <label htmlFor="businessName">Business Name:
                <input
                    id="businessName"
                    type="text"
                    value={client.businessName}
                    onChange={(e) => setClient({ ...client, businessName: e.target.value })}
                    className="w-full rounded p-1"
                    required
                />
            </label>
            <label htmlFor="businessType">Business Type:
                <input
                    id="businessType"
                    type="text"
                    value={client.businessType}
                    onChange={(e) => setClient({ ...client, businessType: e.target.value })}
                    className="w-full rounded p-1"
                    required
                />
            </label>
            <label htmlFor="address">Address:
                <input
                    id="address"
                    type="text"
                    value={client.address}
                    onChange={(e) => setClient({ ...client, address: e.target.value })}
                    className="w-full rounded p-1"
                />
            </label>
            <label htmlFor="email">Email:
                <input
                    id="email"
                    type="email"
                    value={client.email}
                    onChange={(e) => setClient({ ...client, email: e.target.value })}
                    className="w-full rounded p-1"
                />
            </label>
            <label htmlFor="phone">Phone:
                <input
                    id="phone"
                    type="tel"
                    value={client.phone}
                    onChange={(e) => setClient({ ...client, phone: e.target.value })}
                    className="w-full rounded p-1"
                />
            </label>
            <button type="submit" className="btn btn-primary" disabled={submitDisabled}>Add Client</button>
        </form>
    )
}

export default AddClient