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
    const [filteringOptions, setFilteringOptions] = useState([])
    const [view, setView] = useState('card-view')
    
    useEffect(() => {
        fetchClients().then(data => {
            setClients(data)
            setFilteringOptions(data)
        })
    }, [auth?.user])

    if (!auth?.checkAuth) return <Spinner />
    if (auth?.isAuthenticated === "unauthenticated") return redirect('/')

    function sortClients(sortingFunction) {
        // Clone the clients array and sort it using the provided sorting function.
        const sortedClients = [...clients].sort(sortingFunction)
        setClients(sortedClients)
    }

    function filterClients(data) {
        setClients(data)
    }

    function clearFilter() {
        // Reset 'clients' to original data from the server
        setClients(filteringOptions)
    }
    function handleView() {
        //toggles view from card to list view
        setView(view === 'card-view' ? 'list-view' : 'card-view');
    }

    return (
        <>
            <div className="pb-4">
                <ActionMenu
                    sortClients={sortClients}
                    filterClients={filterClients}
                    filteringOptions={filteringOptions}
                    clearFilter={clearFilter}
                    view = {handleView}
                />
            </div>

            <div className={view}>
                {clients === null && <Spinner />}
                {clients && clients.length > 0
                    && clients.map((client, index) => {
                        return <ClientCard view={view} client={client} key={index} />
                    })
                }

                {clients && clients.length === 0 && <p>You have not added any clients!</p>}
            </div>
        </>
    )
}

export default Home
