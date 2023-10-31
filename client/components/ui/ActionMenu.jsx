import Link from 'next/link'
import { FunnelIcon, ArrowsUpDownIcon, ListBulletIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const ActionMenu = ({ sortClients, filterClients, clearFilter, filteringOptions }) => {
    const [currentSort, setCurrentSort] = useState('');
    const [currentFilter, setCurrentFilter] = useState([]);

    function handleSortAZ() {
        sortClients((a, b) => a['businessType'].localeCompare(b['businessType'], "en", { sensitivity: 'base' })); // We provide the function that is used for sorting from A to Z, case-insensitive comparison  
        setCurrentSort('Sorted AZ')
    };

    function handleSortZA() {
        sortClients((a, b) => b['businessType'].localeCompare(a['businessType'], "en", { sensitivity: 'base' })); // We provide the function that is used for sorting from Z to A, case-insensitive comparison
        setCurrentSort('Sorted ZA')
    }


    function handleFiltering(event) {
        const filteringValue = event.target.value || event.target.innerHTML // We get filtering value ['clinic'] for example when you click on the checkbox input and if you're clicking on the current filter badge you get the filtering value from it to through event target inner html
        const updateFilters = [...currentFilter]

        if (updateFilters.includes(filteringValue)) { // We check the if the updatedFilter array if it has any filtering values
            updateFilters.splice(updateFilters.indexOf(filteringValue), 1) // if it has any filtering values, it deletes it
        } else {
            updateFilters.push(filteringValue) // if it hasn't, we push the filtering value to the updatedFilters
        }

        let filteredData = filteringOptions.filter((option) =>
        updateFilters.includes(option.businessType) // We get an array of filteredData based on the filtering values
        );


        if (filteredData.length == 0) { // if the filteredData is empty array we reassign the filteredData with filteringOptions (Original Data from the server)
            filteredData = filteringOptions  // this necessary because when we clear all filters the array we need ti reset to the original data
        }

        filterClients(filteredData) // we call the filterClients function from the home page with filteredData
        setCurrentFilter(updateFilters) // We set the currentFilter array with updatedFilters
    }

    function removeFilter () {
        setCurrentFilter([]) // We set the currentFilter state variable to an empty array
        clearFilter() // We call the clearFilter function from the home page to reset the clients state variable to the original data from the server
    }

    const filterOptionElements = filteringOptions?.map((option, i) => {
        return (
        <label key={i} className='label '>
            <span className="label-text">{option.businessType}</span>
            <input 
                type='checkbox'
                value={option.businessType}
                checked={currentFilter.includes(option.businessType)}
                onChange={handleFiltering}
                className='checkbox'
            />
        </label>
        )

    })


    return (
        <section className="flex pl-8">
            {/* <ArrowsUpDownIcon onClick={clickHandle} className="action-icon" title="Sort By" /> */}
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><ArrowsUpDownIcon className="action-icon" title="Sort By"  /></label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-16 ">
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortAZ}>A Z</li>
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortZA}>Z A</li>
                </ul>
            </div>
            {/* <FunnelIcon className="action-icon" title="Filter By" /> */}
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><FunnelIcon className="action-icon" title="Filter By"  /></label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-52 ">
                    {filterOptionElements}
                </ul>
            </div>
            <ListBulletIcon className="action-icon" title="List View" />
            {currentSort && <div className="badge badge-primary self-center flex justify-center items-center leading-none mx-1">{currentSort}</div>

}           {currentFilter && 
            <section className='flex justify-center items-center'>
                {currentFilter.map((filter, i) => 
                    (<div key={i} className="badge badge-primary self-center flex justify-center items-center leading-none cursor-pointer mx-1" onClick={handleFiltering}>{filter}</div>))
                }
                {currentFilter.length > 0 && <div className='border-b-2 text-sm cursor-pointer ml-1' onClick={removeFilter}>Clear</div>}
            </section>}
        </section>
    )
}

export default ActionMenu