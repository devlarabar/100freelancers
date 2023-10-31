import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import DropdownCard from "./DropdownCard";

import {
  EllipsisHorizontalIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
const ClientCard = ({ client }) => {
  return (
    <section className="client-card">
      <div>
        <div className="relative flex justify-between">
          <h3 className="">{client.name}</h3>
          <Menu>
            <Menu.Button>
              <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer stroke-1 text-accent hover:stroke-2" />
            </Menu.Button>
            <DropdownCard />
          </Menu>
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
