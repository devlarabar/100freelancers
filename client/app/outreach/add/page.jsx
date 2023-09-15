"use client"

import Spinner from '@components/ui/Spinner'
import { useAuthContext } from 'contexts/AuthContext'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

const AddOutreach = () => {
    const auth = useAuthContext()
    const [clients, setClients] = useState([])
    const [outreaches, setOutreaches] = useState([])
    const [outreach, setOutreach] = useState({
        client: '',
        contactDetails: {
            contacted: false,
            contactMethod: '',
            contactDate: ''
        },
        responseDetails: {
            responded: false,
            responseDate: '',
            responseYes: false
        },
        clientWork: {
            proposalSent: false,
            contractSent: false,
            siteCompleted: false,
            paid: false
        }
    })
    const [doRedirect, setDoRedirect] = useState(false)
    const [error, setError] = useState('')
    const [warn, setWarn] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(false)

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await fetch(`/server/client/getclients`, {
                method: 'GET',
                credentials: 'include'
            })
            const clientsJSON = await clientsData.json()
            setClients(clientsJSON)
        }
        const fetchOutreaches = async () => {
            const outreachData = await fetch(`/server/outreach/getoutreaches`, {
                method: 'GET',
                credentials: 'include'
            })
            const outreachJSON = await outreachData.json()
            setOutreaches(outreachJSON)
        }
        
        fetchOutreaches()
        fetchClients()
    }, [])

    useEffect(() => {
        if (clients.length === 1 && outreaches.length >= 1) setWarn('You have already reached out to this client!')
    }, [clients, outreach])

    const validationError = () => {
        if (!outreach.client) {
            setError('Please select a client.')
            return true
        }
        if (!outreach.contactDetails.contactMethod) {
            setError('Please select a contact method.')
            return true
        }
        return false
    }

    const addOutreach = async (e) => {
        e.preventDefault()
        if (!validationError()) {
            setSubmitDisabled(true)
            const response = await fetch(`/server/outreach/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(outreach),
                credentials: 'include'
            })
            if (response.ok) setDoRedirect(true)
        }
    }
    if (doRedirect) redirect('/home')

    if (!auth?.user) return <Spinner />
    if (auth?.user === "unauthenticated") return redirect('/')

    return (
        <form onSubmit={(e) => addOutreach(e)}>
            {error && <div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
            </div>}
            {warn && <div class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{warn}</span>
            </div>}
            <label htmlFor="client">Client:
                <select
                    id="client"
                    value={outreach.client}
                    onChange={(e) => {
                        if (outreaches.some(x => x.client === e.target.value)) setWarn('You have already reached out to this client!')
                        else setWarn('')
                        if (e.target.value !== '') setOutreach({ ...outreach, client: e.target.value })
                    }}
                    className="select select-bordered w-full"
                    required
                >
                    <option value="">Select Client</option>
                    {clients.length > 0 && clients.map((client, index) => {
                        return <option key={index} value={client._id}>{client.businessName} - {client.phone}</option>
                    })}
                </select>
            </label>
            <label htmlFor="contacted" className="flex gap-5">Contacted:
                <input
                    id="contacted"
                    type="checkbox"
                    value={outreach.contactDetails.contacted}
                    onChange={(e) => setOutreach({ ...outreach, contactDetails: { ...outreach.contactDetails, contacted: e.target.checked } })}
                    className="checkbox"
                    required
                />
            </label>
            <label htmlFor="method">Contact Method:
                <select
                    id="method"
                    value={outreach.contactDetails.contactMethod}
                    onChange={(e) => {
                        if (e.target.value !== '') setOutreach({
                            ...outreach, contactDetails: {
                                ...outreach.contactDetails, contactMethod: e.target.value
                            }
                        })
                    }}
                    className="select select-bordered w-full"
                    required
                >
                    <option value="">Select Method</option>
                    <option value="phone">Phone</option>
                    <option value="email">E-Mail</option>
                    <option value="in-person">In-Person</option>
                    <option value="message on website">Message on website</option>
                    <option value="social media">Social Media</option>
                    <option value="text">Text</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label htmlFor="contactDate">Contact Date:
                <input
                    id="contactDate"
                    type="date"
                    value={outreach.contactDetails.contactDate}
                    onChange={(e) => setOutreach({ ...outreach, contactDetails: { ...outreach.contactDetails, contactDate: e.target.value } })}
                    className="input-add"
                    required
                />
            </label>
            <button type="submit" className="button-form-submit" disabled={submitDisabled}>Add Outreach</button>
        </form>
    )
}

export default AddOutreach