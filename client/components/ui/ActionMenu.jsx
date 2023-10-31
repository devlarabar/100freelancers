import { FunnelIcon, ArrowsUpDownIcon, ListBulletIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const ActionMenu = ({ sortClients, filterClients, clearFilter, filteringOptions }) => {
    const [currentSort, setCurrentSort] = useState('')
    const [currentFilter, setCurrentFilter] = useState([])

    function handleSortAZ() {
        // Sort from A to Z, case-insensitive comparison  
        sortClients((a, b) => a['businessType'].localeCompare(b['businessType'], "en", { sensitivity: 'base' }))
        setCurrentSort('Sorted AZ')
    };

    function handleSortZA() {
        // Sort from Z to A, case-insensitive comparison
        sortClients((a, b) => b['businessType'].localeCompare(a['businessType'], "en", { sensitivity: 'base' }))
        setCurrentSort('Sorted ZA')
    }


    function handleFiltering(event, filterValue) {
        const filteringValue = filterValue
        const updateFilters = [...currentFilter]

        // Check if filters array includes new filter value; if it does, remove it, else add to filters array
        if (updateFilters.includes(filteringValue)) {
            updateFilters.splice(updateFilters.indexOf(filteringValue), 1)
        } else {
            updateFilters.push(filteringValue)
        }

        let filteredData = filteringOptions.filter((option) =>
            // We get an array of filteredData based on the filtering values
            updateFilters.includes(option.businessType)
        )


        if (filteredData.length == 0) {
            // important: when all fitlers are cleared, need to reset to original client data
            filteredData = filteringOptions
        }

        filterClients(filteredData)
        setCurrentFilter(updateFilters)
    }

    function removeFilter() {
        setCurrentFilter([])
        clearFilter()
    }

    const filterOptionElements = filteringOptions?.map((option, i) => {
        return (
            <label key={i} className='label '>
                <span className="label-text">{option.businessType}</span>
                <input
                    type='checkbox'
                    value={option.businessType}
                    checked={currentFilter.includes(option.businessType)}
                    onChange={(e) => handleFiltering(e, option.businessType)}
                    className='checkbox'
                />
            </label>
        )

    })


    return (
        <section className="flex pl-8">
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><ArrowsUpDownIcon className="action-icon" title="Sort By" /></label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-16 ">
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortAZ}>A Z</li>
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortZA}>Z A</li>
                </ul>
            </div>
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><FunnelIcon className="action-icon" title="Filter By" /></label>
                <ul tabIndex={0} className="dropdown-menu">
                    {filterOptionElements}
                </ul>
            </div>
            <ListBulletIcon className="action-icon" title="List View" />
            {currentSort &&
                <div className="badge badge-primary self-center flex justify-center items-center leading-none mx-1">
                    {currentSort}
                </div>
            }
            {currentFilter &&
                <section className='flex justify-center items-center'>
                    {currentFilter.map((filter, i) =>
                        (<div key={i} className="badge badge-primary self-center flex justify-center items-center gap-1 leading-none cursor-pointer mx-1" onClick={(e) => handleFiltering(e, filter)}>{filter} <XMarkIcon className="w-3 h-3" /></div>))
                    }
                    {currentFilter.length > 0 && <div className='border-b-2 text-sm cursor-pointer ml-1' onClick={removeFilter}>Clear</div>}
                </section>
            }
        </section>
    )
}

export default ActionMenu