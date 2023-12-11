"use client"

import { useMemo } from 'react'
import { redirect } from 'next/navigation'
import Spinner from '@components/ui/Spinner'
import ClientCard from '@components/client/ClientCard'
import { useAuthContext } from 'contexts/AuthContext'
import ActionMenu from '@components/ui/ActionMenu'
import { useState, useEffect } from 'react'
import { fetchClients } from '@utils/client'

export const sortingTypes = {
    ascending: "ascending",
    descending: "descending",
}

const Home = () => {
    const auth = useAuthContext()
    const [dbClients, setDBClients] = useState(null)
    const [currentSort, setCurrentSort] = useState(null)
    const [currentFilter, setCurrentFilter] = useState([])
    const [view, setView] = useState('card-view')

    useEffect(() => {
        fetchClients().then(data => {
            setDBClients(data)
        })
    }, [auth?.user])

    const clients = useMemo(() => {
        let result = dbClients ? [...dbClients] : []
        
        if (currentFilter.length > 0) {
            result = dbClients.filter(option => currentFilter.includes(option.businessType.toLowerCase())) || []
        }

        if (currentSort !== null) {
            result = result.sort((a, b) => {
                let first = a
                let second = b

                if (currentSort === sortingTypes.descending) {
                    first = b
                    second = a
                }

                return first['businessType'].localeCompare(second['businessType'], "en", { sensitivity: 'base' })
            })
        }

        return result
    }, [dbClients, currentFilter, currentSort])

    function handleSortAZ () {
        setCurrentSort(sortingTypes.ascending)
    }

    function handleSortZA () {
        setCurrentSort(sortingTypes.descending)
    }

    function handleFiltering (filteringValue) {
        const updateFilters = [...currentFilter]

        if (updateFilters.includes(filteringValue)) {
            updateFilters.splice(updateFilters.indexOf(filteringValue), 1)
        } else {
            updateFilters.push(filteringValue)
        }

        setCurrentFilter(updateFilters)
    }

    function removeFilter () {
        setCurrentFilter([])
    }

    function handleView() {
        //toggles view from card to list view
        setView(view === 'card-view' ? 'list-view' : 'card-view');
    }

    if (!auth?.checkAuth) return <Spinner />
    if (auth?.isAuthenticated === "unauthenticated") return redirect('/')

    return (
        <>
            <div>
                <ActionMenu
                    clients={dbClients || []}
                    handleSortAZ={handleSortAZ}
                    handleSortZA={handleSortZA}
                    handleFiltering={handleFiltering}
                    removeFilter={removeFilter}
                    currentSort={currentSort}
                    currentFilter={currentFilter}
                    view = {handleView}
                />
            </div>

            <div className={view}>
                {clients === null && <Spinner />}
                {clients && clients.length > 0 && clients.map((client, index) => (
                    <ClientCard view={view} client={client} key={index} />
                ))}
                {clients && clients.length === 0 && <p>You have not added any clients!</p>}
            </div>
        </>
    )
}

export default Home
