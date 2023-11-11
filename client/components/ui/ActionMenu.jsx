import { FunnelIcon, ArrowsUpDownIcon, ListBulletIcon, } from '@heroicons/react/20/solid'

import { sortingTypes } from "@/app/home/page.jsx"

const ActionMenu = ({ 
    clients,
    handleSortAZ,
    handleSortZA,
    handleFiltering,
    removeFilter,
    currentSort,
    currentFilter,
}) => {
    const filterOptionElements = clients
        .map(client => client.businessType)
        .filter((businessType, index, businessTypes) => index === businessTypes.indexOf(businessType))
        .map((businessType, i) => {
            return (
                <label key={i} className='label'>
                    <span className="label-text">{businessType}</span>
                    <input 
                        type='checkbox'
                        value={businessType}
                        checked={currentFilter.includes(businessType)}
                        onChange={handleFiltering}
                        className='checkbox'
                    />
                </label>
            )
        })

    return (
        <section className="flex pl-8">
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><ArrowsUpDownIcon className="action-icon" title="Sort By"  /></label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-16 ">
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortAZ}>A Z</li>
                    <li className='cursor-pointer btn-ghost text-sm text-center' onClick={handleSortZA}>Z A</li>
                </ul>
            </div>
            <div className="dropdown dropdown-bottom text-secondary">
                <label tabIndex={0} className=""><FunnelIcon className="action-icon" title="Filter By"  /></label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary border border-secondary rounded-box w-52 ">
                    {filterOptionElements}
                </ul>
            </div>
            <ListBulletIcon className="action-icon" title="List View" />
            {currentSort && (
                <div className="badge badge-primary self-center flex justify-center items-center leading-none mx-1">
                    {(currentSort === sortingTypes.ascending) && "Sorted AZ"}
                    {(currentSort === sortingTypes.descending) && "Sorted ZA"}
                </div>
            )}
            {currentFilter && (
                <section className='flex justify-center items-center'>
                    {currentFilter.map((filter, i) =>
                        (<div key={i} className="badge badge-primary self-center flex justify-center items-center leading-none cursor-pointer mx-1" onClick={handleFiltering}>{filter}</div>))
                    }
                    {currentFilter.length > 0 && <div className='border-b-2 text-sm cursor-pointer ml-1' onClick={removeFilter}>Clear</div>}
                </section>
            )}
        </section>
    )
}

export default ActionMenu