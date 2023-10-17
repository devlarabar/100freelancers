import React, { useState } from "react";
import {
  EllipsisHorizontalIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
const ClientCard = ({ client }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section className="client-card">
      <div>
        <div className="relative flex justify-between">
          <h3 className="">{client.name}</h3>
          <EllipsisHorizontalIcon
            className="h-8 w-8 cursor-pointer stroke-1 text-accent hover:stroke-2"
            onClick={() => setisOpen(!isOpen)}
          />
          {isOpen && (
            <div className="w-40 z-[1] border-secondary rounded-lg absolute left-full mt-2 origin-top-right  rounded-md bg-primary   shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow">
              <a className="group flex items-center px-4 py-2 text-sm text-CCCFD2-700 hover:bg-[rgb(205,213,224,0.1)] hover:text-white hover:rounded-lg">
                {" "}
                <span>add outreach</span>
              </a>
              <a className="group flex items-center px-4 py-2 text-sm text-CCCFD2-700 hover:bg-[rgb(205,213,224,0.1)] hover:text-white hover:rounded-lg">
                {" "}
                <span>edit</span>
              </a>
              <a className="group flex items-center px-4 py-2 text-sm text-CCCFD2-700 hover:bg-[rgb(205,213,224,0.1)] hover:text-white hover:rounded-lg">
                {" "}
                <span>archive</span>
              </a>
              <a className="group flex items-center px-4 py-2 text-sm text-CCCFD2-700 hover:bg-[rgb(205,213,224,0.1)] hover:text-white hover:rounded-lg">
                {" "}
                <span>delete</span>
              </a>
            </div>
          )}
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
  );
};

export default ClientCard;
