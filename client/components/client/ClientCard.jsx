import React from 'react'
import { EllipsisHorizontalIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
const ClientCard = ({ client }) => {
    return (
        <section className="client-card mb-8">
            <div>
                <div className="flex justify-between">
                    <h3 className="">{client.businessName}</h3>
                    <EllipsisHorizontalIcon className="h-8 w-8 text-accent stroke-1 hover:stroke-2 cursor-pointer" />
                </div>
                <hr />
                <span className="text-sm italic">{client.businessType}</span>
                <div className="client-contact">
                    <div className="contact-info-group">
                        <PhoneIcon className="contact-icon me-4" />
                        <p className="text-base">{client.phone}</p>
                    </div>
                    <div className="contact-info-group">
                        <EnvelopeIcon className="contact-icon me-4" />
                        <p className="text-base">{client.email}</p>
                    </div>
                    <div className="contact-info-group">
                        <MapPinIcon className="contact-icon me-4" />
                        <p className="text-base">{client.address}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientCard