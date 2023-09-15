import Link from 'next/link'
import { FunnelIcon, ArrowsUpDownIcon, ListBulletIcon  } from '@heroicons/react/20/solid'

const ActionMenu = () => {
    return (
        <section className="flex">
            <ArrowsUpDownIcon className="action-icon" title="Sort By" />
            <FunnelIcon className="action-icon" title="Filter By" />
            <ListBulletIcon className="action-icon" title="List View" />
        </section>
    )
}

export default ActionMenu