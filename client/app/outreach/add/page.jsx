"use client"

import Spinner from '@components/ui/Spinner'
import { useAuthContext } from 'contexts/AuthContext'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { fetchClients } from '@utils/client'
import Alert from '@components/ui/Alert'

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
    const [alert, setAlert] = useState({ message: '', type: '' })
    const [submitDisabled, setSubmitDisabled] = useState(false)

    useEffect(() => {
        fetchClients().then(data => setClients(data))
        const fetchOutreaches = async () => {
            const outreachData = await fetch('/server/outreach/getoutreaches', {
                method: 'GET',
                credentials: 'include'
            })
            const outreachJSON = await outreachData.json()
            setOutreaches(outreachJSON)
        }
        fetchOutreaches()
    }, [])

    useEffect(() => {
        if (clients.length === 1 && outreaches.length >= 1) setAlert({ message: 'You have already reached out to this client!', type: 'warning' })
    }, [clients, outreach])

    const validationError = () => {
        if (!outreach.client) {
            setAlert({ message: 'Please select a client.', type: 'error' })
            return true
        }
        if (!outreach.contactDetails.contactMethod) {
            setAlert({ message: 'Please select a contact method.', type: 'error' })
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

    if (!auth?.checkAuth) return <Spinner />
    if (auth?.isAuthenticated === "unauthenticated") return redirect('/')

    return (
        <form onSubmit={(e) => addOutreach(e)}>
            {alert.message && <Alert message={alert.message} alertType={alert.type} />}

            <h3>Contact Information</h3>
            <label htmlFor="client">Client:
                <select
                    id="client"
                    value={outreach.client}
                    onChange={(e) => {
                        if (outreaches.some(x => x.client === e.target.value)) setAlert({ message: 'You have already reached out to this client!', type: 'warning' })
                        else setAlert({})
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
                    className="checkbox bg-primary"
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
            <h3>Response Information</h3>
            <label htmlFor="responded" className="flex gap-5">Responded:
                <input
                    id="responded"
                    type="checkbox"
                    value={outreach.responseDetails.responded}
                    onChange={(e) => setOutreach({ ...outreach, responseDetails: { ...outreach.responseDetails, responded: e.target.checked}})}
                    className="checkbox bg-primary"
                />
            </label>
            <label htmlFor="responseDate">Response Date:
                <input
                    id="responseDate"
                    type="date"
                    value={outreach.responseDetails.responseDate}
                    onChange={(e) => setOutreach({...outreach, responseDetails: { ...outreach.responseDetails, responseDate: e.target.value} })}
                    className="input-add"
                />
            </label>
            <label htmlFor="responseYes" className="flex gap-5">Responded Yes:
                <input
                    id="responseYes"
                    type="checkbox"
                    value={outreach.responseDetails.responseYes}
                    onChange={(e) => setOutreach({...outreach, responseDetails: {...outreach.responseDetails, responseYes: e.target.checked} })}
                    className="checkbox bg-primary"
                />
            </label>
            <h3>Client Work Checklist</h3>
            <label htmlFor="proposalSent" className="flex gap-5">Proposal Sent:
                <input
                    id="proposalSent"
                    type="checkbox"
                    value={outreach.clientWork.proposalSent}
                    onChange={(e) => setOutreach({...outreach, clientWork: {...outreach.clientWork, proposalSent: e.target.checked} })}
                    className="checkbox bg-primary"
                />
            </label>
            <label htmlFor="contractSent" className="flex gap-5">Contract Sent:
                <input
                    id="contractSent"
                    type="checkbox"
                    value={outreach.clientWork.contractSent}
                    onChange={(e) => setOutreach({...outreach, clientWork: {...outreach.clientWork, contractSent: e.target.checked} })}
                    className="checkbox bg-primary"
                />
            </label>
            <label htmlFor="siteCompleted" className="flex gap-5">Site Completed:
                <input
                    id="siteCompleted"
                    type="checkbox"
                    value={outreach.clientWork.siteCompleted}
                    onChange={(e) => setOutreach({...outreach, clientWork: {...outreach.clientWork, siteCompleted: e.target.checked} })}
                    className="checkbox bg-primary"
                />
            </label>
            <label htmlFor="paid" className="flex gap-5">Paid:
                <input
                    id="paid"
                    type="checkbox"
                    value={outreach.clientWork.paid}
                    onChange={(e) => setOutreach({...outreach, clientWork: {...outreach.clientWork, paid: e.target.checked} })}
                    className="checkbox bg-primary"
                />
            </label>
            <button type="submit" className="button-form-submit" disabled={submitDisabled}>Add Outreach</button>
        </form>
    )
}

export default AddOutreach