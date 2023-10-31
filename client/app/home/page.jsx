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
    const [filteringOptions, setFilteringOptions] = useState([]); // Add state for filtering options

    useEffect(() => {
        fetchClients().then(data => {
            setClients(data)
            setFilteringOptions(data); // Initialize filteringOptions with the fetched data
        })
    }, [auth?.user])

    if (!auth?.checkAuth) return <Spinner />
    if (auth?.isAuthenticated === "unauthenticated") return redirect('/')

    function sortClients(sortingFunction) {
        // Clone the clients array and sort it using the provided sorting function.
        const sortedClients = [...clients].sort(sortingFunction);
        setClients(sortedClients);  // We set the clients state variable with sorted array
    };

    function filterClients(data) {
        setClients(data) // We set the clients state variable with the filtered array coming from action menu component
    }

    function clearFilter() {
        setClients(filteringOptions); // We reset the clients state variable with the original data from the server
    };
    
    return (
        <>
            <div className="px-8 pb-4">
                <ActionMenu 
                    sortClients={sortClients} 
                    filterClients={filterClients} 
                    filteringOptions={filteringOptions} 
                    clearFilter={clearFilter} 
                />
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


// <section className="flex">
// <ArrowsUpDownIcon className="action-icon" title="Sort By" />
// <FunnelIcon className="action-icon" title="Filter By" />
// <ListBulletIcon className="action-icon" title="List View" />
// </section>

{/* <div className="">
<div className="dropdown dropdown-end text-secondary">
    <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-52">
        <li><Link href=''>Home</Link></li>
        <li>
            <Link href={'/profile'} className="justify-between">
                Profile
                <span className="badge">New</span>
            </Link>
        </li>
        <li><Link href="/client/add">+ Client</Link></li>
        <li><Link href="/outreach/add">+ Outreach</Link></li>
        <li><Link href={'/settings'}>Settings</Link></li>
        <li><span className="pointer" onClick={logOut}>Logout</span></li>
        <li><div className="form-control flex flex-row gap-1 mr-2">
            <ThemeToggle />
        </div></li>
    </ul>
</div>
</div> 
</div>
 */}
