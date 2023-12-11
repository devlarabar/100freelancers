"use client"

import { useState, useEffect } from "react"
import ClientCardDropdown from "@/components/client/ClientCardDropdown"

import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"

const ClientCard = ({ client, view }) => {
	if (view === 'list-view') {
		return (
			<section className="bg-primary rounded w-full p-4 my-3">
				<div className="flex justify-between items-center">
					<div className="w-3/12 pr-2 border-r border-accent">
						<h5 className="font-bold text-sm sm:text-xl">{client.businessName}</h5>
						<span className="text-sm italic">{client.businessType}</span>
					</div>
					<div className="flex flex-col w-9/12 ps-4 md:flex-row md:items-center md:justify-center">
						<div className="contact-info-group md:w-4/12 md:mb-0">
							<PhoneIcon className="contact-icon-list me-2" />
							<p className="text-xs sm:text-base">{client.phone}</p>
						</div>
						<div className="contact-info-group md:w-4/12 md:mb-0">
							<EnvelopeIcon className="contact-icon-list me-2" />
							<p className="text-xs sm:text-base break-all">{client.email}</p>
						</div>
						<div className="contact-info-group md:w-4/12 md:mb-0">
							<MapPinIcon className="contact-icon-list me-2" />
							<p className="text-xs sm:text-base">{client.address}</p>
						</div>
					</div>
					<ClientCardDropdown />
				</div>
			</section>
		);
	}

	else return (
		<section className="client-card">
			<div>
				<div className="relative flex justify-between">
					<h3>{client.businessName}</h3>
					<ClientCardDropdown />
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
						<p className="text-sm xs:text-base">{client.email}</p>
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
