"use client"

import { useState, useEffect } from "react"
import ClienCardDropdown from "@/components/client/ClienCardDropdown"

import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"

const ClientCard = ({ client }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const clientEmailContainer = document.querySelector(`.clientEmail${client._id}`)
		const clientEmail = client.email.split('@')
		clientEmailContainer.innerHTML = `${clientEmail[0]}<wbr>@${clientEmail[1]}`
	}, [mounted])

	return (
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
