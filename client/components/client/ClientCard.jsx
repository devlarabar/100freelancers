"use client"

import { useState, useEffect } from "react"
import ClienCardDropdown from "@/components/client/ClienCardDropdown"

import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"

const ClientCard = ({ client, view }) => {
	
    const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const clientEmailContainer = document.querySelector(`.clientEmail${client._id}`)
		const clientEmail = client.email.split('@')
		clientEmailContainer.innerHTML = `${clientEmail[0]}<wbr>@${clientEmail[1]}`
	}, [mounted])

    if(view === 'list-view'){
        return (
            <section className="bg-primary rounded w-full p-4 my-1">
                <div className="flex justify-between items-center">
                    <div className="w-3/12 border-r border-accent">
                        <h5 className="font-bold">{client.businessName}</h5>
                        <span className="text-sm italic">{client.businessType}</span>
                    </div>
                    <div className="flex flex-col w-9/12 ps-4 md:flex-row ">
                        <div className="contact-info-group md:w-4/12 items-center">
                            <PhoneIcon className="contact-icon-list me-2" />
                            <p className="text-xs">{client.phone}</p>
                        </div>
                        <div className="contact-info-group md:w-4/12">
                            <EnvelopeIcon className="contact-icon-list me-2" />
                            <p className="text-xs break-all">{client.email}</p>
                        </div>
                        <div className="contact-info-group md:w-4/12">
                            <MapPinIcon className="contact-icon-list me-2" />
                            <p className="text-xs">{client.address}</p>
                        </div>
                    </div>
                    <ClienCardDropdown />
                </div>
        </section>
        );
    }
	else return (
		
        <section className="client-card">
			<div>
				<div className="relative flex justify-between">
					<h3>{client.businessName}</h3>
					<ClienCardDropdown />
				</div>
				<hr />
				<span className="text-sm italic">{client.businessType}</span>
				<div className="client-contact">
					<div className="contact-info-group">
						<PhoneIcon className="contact-icon me-2 xs:me-4" />
						<p className="text-sm xs:text-base">{client.phone}</p>
					</div>
					<div className="contact-info-group">
						<EnvelopeIcon className="contact-icon me-2 xs:me-4" />
						<p className={`text-sm xs:text-base clientEmail${client._id}`}></p>
					</div>
					<div className="contact-info-group">
						<MapPinIcon className="contact-icon me-2 xs:me-4" />
						<p className="text-sm xs:text-base">{client.address}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClientCard;
